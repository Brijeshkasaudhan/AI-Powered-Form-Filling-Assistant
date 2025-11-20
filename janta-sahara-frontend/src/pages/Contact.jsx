import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // For now, just show thank you message (can add API later)
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">📬 Contact Us</h1>
        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your message here"
              rows={4}
            />
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        ) : (
          <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
