import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import StartForm from './pages/StartForm';
import FormFiller from './pages/FormFiller';
import UserDashboard from './pages/UserDashboard';
import Confirmation from './pages/Confirmation';
function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#222', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '1.3rem', color: '#ff9933' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>About</Link>
        <Link to="/login" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>Login</Link>
        <Link to="/signup" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>Sign Up</Link>
        <Link to="/contact" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>Contact</Link>
        <Link to="/faq" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>FAQ</Link>
        <Link to="/dashboard" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>Dashboard</Link>
        <Link to="/start-form" style={{ marginRight: '1.3rem', color: '#67e6dc' }}>Start Form</Link>
        <Link to="/form/pan">
          <button className="get-started-btn"></button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/start-form" element={<StartForm />} />
        <Route path="/form/:formId" element={<FormFiller />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
