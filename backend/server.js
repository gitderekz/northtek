/**
 * cd backend
 * npm install
 * npm run init-db
 * npm run dev
 * http://localhost:5000/admin
 * admin
 * NorthTek2024!
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Production settings
const isProduction = process.env.NODE_ENV === 'production';

// CORS configuration for production
const corsOptions = {
    origin: [
        'https://api.northtek.co.tz',
        'https://www.api.northtek.co.tz',
        'https://www.northtek.co.tz',
        'https://northtek.co.tz',
        'http://www.northtek.co.tz',
        'http://northtek.co.tz'
    ],
    credentials: true
};

const app = express();
const PORT = process.env.PORT || 5000;
const db = new Database('enquiries.db');

// Middleware
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files for admin panel
app.use('/admin', express.static('admin'));

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Email transporter configuration (with better error handling)
let transporter;
try {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Test the connection
    transporter.verify((error) => {
      if (error) {
        console.log('Email configuration error (will save to database):', error.message);
        transporter = null;
      } else {
        console.log('Email server is ready');
      }
    });
  }
} catch (error) {
  console.log('Email setup failed, will use database only:', error.message);
  transporter = null;
}

// Save enquiry to database
const saveEnquiryToDatabase = (data, emailSent = false, emailError = null) => {
  const stmt = db.prepare(`
    INSERT INTO enquiries (firstName, lastName, email, phone, message, emailSent, emailError)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  return stmt.run(
    data.firstName,
    data.lastName,
    data.email,
    data.phone || null,
    data.message,
    emailSent ? 1 : 0,
    emailError
  );
};

// Send email function
const sendEmail = async (data) => {
  if (!transporter) {
    throw new Error('Email service not configured');
  }

  // Email to company
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@northek.co.tz',
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  };

  // Auto-reply to user
  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'Thank you for contacting Northtek Hydroworks',
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>Dear ${data.firstName} ${data.lastName},</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p>Best regards,<br>Northtek Hydroworks Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
  await transporter.sendMail(autoReplyOptions);
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    let emailSent = false;
    let emailError = null;

    // Try to send email
    if (transporter) {
      try {
        await sendEmail(req.body);
        emailSent = true;
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Failed to send email, saving to database:', error.message);
        emailError = error.message;
      }
    }

    // Always save to database
    saveEnquiryToDatabase(req.body, emailSent, emailError);

    res.status(200).json({ 
      success: true, 
      message: emailSent 
        ? 'Message sent successfully!' 
        : 'Message saved successfully! We will review it shortly.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process your message. Please try again later.' 
    });
  }
});

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      success: true, 
      token,
      user: { id: user.id, username: user.username }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Login failed' 
    });
  }
});

// Get all enquiries (protected route)
app.get('/api/admin/enquiries', authenticateToken, (req, res) => {
  try {
    const enquiries = db.prepare(`
      SELECT * FROM enquiries ORDER BY createdAt DESC
    `).all();

    res.json({ success: true, enquiries });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch enquiries' 
    });
  }
});

// Get single enquiry (protected route)
app.get('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  try {
    const enquiry = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(req.params.id);
    
    if (!enquiry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Enquiry not found' 
      });
    }

    res.json({ success: true, enquiry });
  } catch (error) {
    console.error('Error fetching enquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch enquiry' 
    });
  }
});

// Update enquiry status (protected route)
app.put('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  try {
    const { status, notes } = req.body;
    const enquiryId = req.params.id;

    const enquiry = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(enquiryId);
    if (!enquiry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Enquiry not found' 
      });
    }

    db.prepare(`
      UPDATE enquiries 
      SET status = ?, notes = ?, updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(status || enquiry.status, notes || enquiry.notes, enquiryId);

    const updatedEnquiry = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(enquiryId);

    res.json({ 
      success: true, 
      message: 'Enquiry updated successfully',
      enquiry: updatedEnquiry
    });

  } catch (error) {
    console.error('Error updating enquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update enquiry' 
    });
  }
});

// Delete enquiry (protected route)
app.delete('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  try {
    const result = db.prepare('DELETE FROM enquiries WHERE id = ?').run(req.params.id);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Enquiry not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Enquiry deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete enquiry' 
    });
  }
});

// Get enquiry statistics (protected route)
app.get('/api/admin/statistics', authenticateToken, (req, res) => {
  try {
    const stats = db.prepare(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN status = 'reviewed' THEN 1 ELSE 0 END) as reviewed,
        SUM(CASE WHEN status = 'contacted' THEN 1 ELSE 0 END) as contacted,
        SUM(CASE WHEN status = 'resolved' THEN 1 ELSE 0 END) as resolved,
        SUM(CASE WHEN emailSent = 1 THEN 1 ELSE 0 END) as emailSent
      FROM enquiries
    `).get();

    res.json({ success: true, stats });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch statistics' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    emailConfigured: !!transporter
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service: ${transporter ? 'Configured' : 'Not configured (using database only)'}`);
});