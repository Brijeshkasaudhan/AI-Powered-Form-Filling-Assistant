import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add actual signup logic/API call here
    alert(`Signing up as: ${form.name}`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">📝 Sign Up</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="signup-name">Name</label>
          <input
            id="signup-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />

          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />

          <button type="submit">Create Account</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
