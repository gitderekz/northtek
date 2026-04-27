import React, { useState } from 'react'
import './Contacts.css'
import { contacts } from '../../data'

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id='contact'>
      <div className="bg__image"></div>
      <div className="overlay"></div>
      <div className="container">
        <div className="column">
          {
            contacts.map((contact, index) => (
              <div className="contact__info" key={index}>
                <div className="icon__container">{contact.icon}</div>
                <div className="details">
                  <p className="text__muted">{contact.name}</p>
                  <p className="value">{contact.value}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="column form__container">
          <form onSubmit={handleSubmit}>
            <div className="form__top">
              <h3 className="sub__title g-text">Keep in touch</h3>
              <p>Send us a message through an email.</p>
              <div className="form__middle">
                <div className="row">
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name *" 
                    className='control'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name *" 
                    className='control'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    className='control'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone number" 
                    className='control'
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea 
                  name="message" 
                  cols={30} 
                  rows={5} 
                  placeholder='Message *' 
                  className='control'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {submitStatus === 'success' && (
                <div style={{ color: 'green', marginBottom: '15px' }}>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ color: 'red', marginBottom: '15px' }}>
                  Failed to send message. Please try again later.
                </div>
              )}
              <div className="form__bottom">
                <button 
                  type="submit" 
                  className="btn btn__primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts