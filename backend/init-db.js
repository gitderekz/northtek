const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const db = new Database('enquiries.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    notes TEXT,
    emailSent BOOLEAN DEFAULT 0,
    emailError TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Create default admin user
const username = process.env.ADMIN_USERNAME || 'admin';
const password = process.env.ADMIN_PASSWORD || 'admin123';

// Check if admin exists
const existingAdmin = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);

if (!existingAdmin) {
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.prepare('INSERT INTO admin_users (username, password) VALUES (?, ?)').run(username, hashedPassword);
  console.log(`Admin user created: ${username}`);
  console.log(`Password: ${password}`);
} else {
  console.log('Admin user already exists');
}

console.log('Database initialized successfully!');
db.close();