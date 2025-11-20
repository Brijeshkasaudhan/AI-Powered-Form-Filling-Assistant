import React from 'react';
import { Link } from 'react-router-dom';
import './StartForm.css';

const formsAvailable = [
  { name: "PAN Card Application", description: "Permanent Account Number form for India.", id: "pan" },
  { name: "Aadhar Update", description: "Update or correct your Aadhar details.", id: "aadhar" },
  { name: "Birth Certificate", description: "Apply for a government birth certificate online.", id: "birth" },
  { name: "Ration Card Application", description: "New/renew a ration card for your household.", id: "ration" },
  { id: "pan", name: "PAN Card Application", description: "Fill your PAN card form step-by-step." },
  { id: "aadhar", name: "Aadhaar Update", description: "Update your Aadhaar details easily." },
];

function StartForm() {
  return (
    <div className="start-form-page">
      <div className="start-form-container">
        <h1 className="start-form-title">📑 Select a Form to Fill</h1>
        <div className="form-select-list">
          {formsAvailable.map(form => (
            <div className="form-card" key={form.id}>
              <h2>{form.name}</h2>
              <p>{form.description}</p>
              {/* Use Link for navigation */}
              <Link to={`/form/${form.id}`}>
                <button className="form-btn">Start</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StartForm;
