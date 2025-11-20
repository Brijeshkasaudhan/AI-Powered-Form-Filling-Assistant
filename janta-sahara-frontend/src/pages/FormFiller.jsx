import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function FormFiller() {
  const { formId } = useParams();
  const navigate = useNavigate();

  // PAN CARD SECTION
  if (formId === 'pan') {
    const [fields, setFields] = useState({
      name: '', dob: '', aadhaar: '', address: '', mobile: ''
    });
    const [errors, setErrors] = useState({});

    const tips = {
      name: "Enter your full name as on Aadhaar.",
      dob: "Use the format YYYY-MM-DD.",
      aadhaar: "12-digit Aadhaar number required.",
      address: "Current address as per proof.",
      mobile: "Valid Indian mobile number."
    };

    const validateFields = () => {
      let err = {};
      if (!fields.name.trim()) err.name = "Name is required";
      if (!fields.dob) err.dob = "Date of birth is required";
      if (!/^\d{12}$/.test(fields.aadhaar)) err.aadhaar = "Aadhaar must be 12 digits";
      if (!fields.address.trim()) err.address = "Address is required";
      if (!/^[6-9]\d{9}$/.test(fields.mobile)) err.mobile = "Mobile must be a valid Indian number";
      return err;
    };

    const handleChange = e => {
      setFields({ ...fields, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = e => {
      e.preventDefault();
      const validationErrors = validateFields();
      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
      } else {
        const applications = JSON.parse(localStorage.getItem('panApplications') || "[]");
        applications.push({ ...fields, submittedAt: new Date().toLocaleString() });
        localStorage.setItem('panApplications', JSON.stringify(applications));
        navigate('/confirmation');
      }
    };

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', color: '#e2e8f0',
        background: 'linear-gradient(120deg, #080812 60%, #181825 100%)',
        fontFamily: "Poppins, sans-serif"
      }}>
        <div style={{
          background: 'rgba(22, 26, 37, 0.98)', padding: '48px 32px',
          borderRadius: '20px', maxWidth: '480px',
          boxShadow: '0 0 40px 0 rgba(19, 136, 8, 0.15), 0 0 80px 0 rgba(103, 230, 220, 0.09)'
        }}>
          <h1 style={{
            fontSize: '2rem', color: '#ff9933', marginBottom: '24px', textAlign: 'center'
          }}>
            PAN Card Application
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <span title={tips.name} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="name" type="text" value={fields.name} onChange={handleChange} required
              placeholder="Full Name"
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.name && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.name}</div>}

            <label>
              Date of Birth
              <span title={tips.dob} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="dob" type="date" value={fields.dob} onChange={handleChange} required
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.dob && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.dob}</div>}

            <label>
              Aadhaar Number
              <span title={tips.aadhaar} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="aadhaar" type="text" value={fields.aadhaar} onChange={handleChange} required placeholder="Aadhaar Number"
              maxLength={12}
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.aadhaar && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.aadhaar}</div>}

            <label>
              Address
              <span title={tips.address} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="address" type="text" value={fields.address} onChange={handleChange} required placeholder="Address"
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.address && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.address}</div>}

            <label>
              Mobile Number
              <span title={tips.mobile} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="mobile" type="tel" value={fields.mobile} onChange={handleChange} required placeholder="Mobile Number"
              maxLength={10}
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.mobile && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.mobile}</div>}

            <button type="submit" style={{
              marginTop: "19px", background: "linear-gradient(90deg, #138808 70%, #67e6dc 100%)",
              border: "none", padding: "13px", fontSize: "1.03rem",
              color: "#fff", borderRadius: "8px", width: "100%", fontWeight: "800", cursor: "pointer"
            }}>
              Submit PAN Form
            </button>
          </form>
        </div>
      </div>
    );
  }

  // AADHAAR UPDATE SECTION
  if (formId === 'aadhar') {
    const [fields, setFields] = useState({
      name: '', dob: '', aadhaar: '', address: '', mobile: ''
    });
    const [errors, setErrors] = useState({});

    const tips = {
      name: "Enter your updated full name.",
      dob: "Use the format YYYY-MM-DD.",
      aadhaar: "Enter your existing 12-digit Aadhaar number.",
      address: "New address after update.",
      mobile: "Valid Indian mobile number for OTP."
    };

    const validateFields = () => {
      let err = {};
      if (!fields.name.trim()) err.name = "Name is required";
      if (!fields.dob) err.dob = "Date of birth is required";
      if (!/^\d{12}$/.test(fields.aadhaar)) err.aadhaar = "Aadhaar must be 12 digits";
      if (!fields.address.trim()) err.address = "Address is required";
      if (!/^[6-9]\d{9}$/.test(fields.mobile)) err.mobile = "Mobile must be a valid Indian number";
      return err;
    };

    const handleChange = e => {
      setFields({ ...fields, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = e => {
      e.preventDefault();
      const validationErrors = validateFields();
      if (Object.keys(validationErrors).length) {
        setErrors(validationErrors);
      } else {
        const applications = JSON.parse(localStorage.getItem('aadharApplications') || "[]");
        applications.push({ ...fields, submittedAt: new Date().toLocaleString() });
        localStorage.setItem('aadharApplications', JSON.stringify(applications));
        navigate('/confirmation');
      }
    };

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', color: '#e2e8f0',
        background: 'linear-gradient(120deg, #080812 60%, #181825 100%)',
        fontFamily: "Poppins, sans-serif"
      }}>
        <div style={{
          background: 'rgba(22, 26, 37, 0.98)', padding: '48px 32px',
          borderRadius: '20px', maxWidth: '480px',
          boxShadow: '0 0 40px 0 rgba(19, 136, 8, 0.15), 0 0 80px 0 rgba(103, 230, 220, 0.09)'
        }}>
          <h1 style={{
            fontSize: '2rem', color: '#67e6dc', marginBottom: '24px', textAlign: 'center'
          }}>
            Aadhaar Update Form
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <span title={tips.name} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="name" type="text" value={fields.name} onChange={handleChange} required
              placeholder="Full Name"
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.name && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.name}</div>}

            <label>
              Date of Birth
              <span title={tips.dob} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="dob" type="date" value={fields.dob} onChange={handleChange} required
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.dob && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.dob}</div>}

            <label>
              Aadhaar Number
              <span title={tips.aadhaar} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="aadhaar" type="text" value={fields.aadhaar} onChange={handleChange} required placeholder="Aadhaar Number"
              maxLength={12}
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.aadhaar && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.aadhaar}</div>}

            <label>
              Address
              <span title={tips.address} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="address" type="text" value={fields.address} onChange={handleChange} required placeholder="New Address"
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.address && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.address}</div>}

            <label>
              Mobile Number
              <span title={tips.mobile} style={{ marginLeft: 7, color: '#67e6dc', cursor: 'pointer' }}>❓</span>
            </label>
            <input name="mobile" type="tel" value={fields.mobile} onChange={handleChange} required placeholder="Mobile Number"
              maxLength={10}
              style={{ width: "100%", marginBottom: 7, padding: 8, borderRadius: 6, border: "1px solid #67e6dc99", background: "#1a202c", color: "#e2e8f0" }} />
            {errors.mobile && <div style={{ color: '#ff9933', fontSize: '0.97rem' }}>{errors.mobile}</div>}

            <button type="submit" style={{
              marginTop: "19px", background: "linear-gradient(90deg, #67e6dc 70%, #138808 100%)",
              border: "none", padding: "13px", fontSize: "1.03rem",
              color: "#fff", borderRadius: "8px", width: "100%", fontWeight: "800", cursor: "pointer"
            }}>
              Submit Aadhaar Update
            </button>
          </form>
        </div>
      </div>
    );
  }

  // OTHER FORMS PLACEHOLDER
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg,#080812 60%,#181825 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#e2e8f0'
    }}>
      <div style={{
        background: 'rgba(22,26,37,0.98)',
        padding: '48px 32px',
        borderRadius: '20px',
        maxWidth: '480px',
        boxShadow: '0 0 40px 0 rgba(19,136,8,0.15),0 0 80px 0 rgba(103,230,220,0.09)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#ff9933',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Form filling coming soon for {formId}
        </h1>
      </div>
    </div>
  );
}

export default FormFiller;
