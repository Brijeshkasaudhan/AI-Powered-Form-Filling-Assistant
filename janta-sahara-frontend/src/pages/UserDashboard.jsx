import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import jsPDF from 'jspdf';
// import Chatbot from '../components/Chatbot'; // Adjust path as needed
import Chatbot from '../components/Chatbot'; // or correct relative path

function UserDashboard() {
  const userData = {
    name: 'Ankita Patel',
    email: 'ankita@example.com',
    recentActivity: [
      'Filled Form: PAN Card',
      'Saved Application: Birth Certificate',
      'Checked Status: Ration Card',
    ],
  };

  const [panHistory, setPanHistory] = useState([]);
  const [aadharHistory, setAadharHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedPAN = JSON.parse(localStorage.getItem('panApplications') || "[]");
    setPanHistory(savedPAN.reverse());
    const savedAadhar = JSON.parse(localStorage.getItem('aadharApplications') || "[]");
    setAadharHistory(savedAadhar.reverse());
  }, []);

  // PAN handlers
  const deletePANRecord = idx => {
    if (!window.confirm('Are you sure you want to delete this PAN application?')) return;
    const arr = [...panHistory];
    arr.splice(idx, 1);
    setPanHistory(arr);
    localStorage.setItem('panApplications', JSON.stringify([...arr].reverse()));
  };

  const downloadPANPDF = rec => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(30, 156, 186);
    doc.text('PAN Card Application', 10, 18);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(20, 30, 40);

    let y = 34;
    ['name', 'dob', 'aadhaar', 'mobile', 'address', 'submittedAt'].forEach(field => {
      doc.text(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${rec[field]}`, 14, y);
      y += 10;
    });
    doc.save(`PAN_Application_${rec.name}.pdf`);
  };

  // Aadhaar handlers
  const deleteAadharRecord = idx => {
    if (!window.confirm('Are you sure you want to delete this Aadhaar application?')) return;
    const arr = [...aadharHistory];
    arr.splice(idx, 1);
    setAadharHistory(arr);
    localStorage.setItem('aadharApplications', JSON.stringify([...arr].reverse()));
  };

  const downloadAadharPDF = rec => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(103, 230, 220);
    doc.text('Aadhaar Update Application', 10, 18);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(20, 30, 40);

    let y = 34;
    ['name', 'dob', 'aadhaar', 'mobile', 'address', 'submittedAt'].forEach(field => {
      doc.text(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${rec[field]}`, 14, y);
      y += 10;
    });
    doc.save(`Aadhaar_Update_${rec.name}.pdf`);
  };

  // Filtered lists based on search input
  const filteredPan = panHistory.filter(rec =>
    rec.name.toLowerCase().includes(searchTerm)
  );
  const filteredAadhar = aadharHistory.filter(rec =>
    rec.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">👩‍💼 Welcome, {userData.name}</h1>
        <div className="dashboard-info">
          <p><strong>Email:</strong> {userData.email}</p>
          <h2 className="dashboard-subheading">Recent Activity</h2>
          <ul className="dashboard-list">
            {userData.recentActivity.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Search by Name..."
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '20px',
              borderRadius: '6px',
              border: '1px solid #67e6dc',
              backgroundColor: '#1a202c',
              color: '#e2e8f0'
            }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
            autoComplete="off"
          />

          {/* PAN Card Applications */}
          <h2 className="dashboard-subheading" style={{ marginTop: 32 }}>Your PAN Card Applications</h2>
          {filteredPan.length === 0 ? (
            <p style={{ color: '#bbbbbb' }}>No PAN Card forms match your search.</p>
          ) : (
            <ul className="pan-history-list">
              {filteredPan.map((rec, i) => (
                <li key={i} className="pan-history-item">
                  <div><b>Name:</b> {rec.name}</div>
                  <div><b>DOB:</b> {rec.dob}</div>
                  <div><b>Aadhaar:</b> {rec.aadhaar}</div>
                  <div><b>Mobile:</b> {rec.mobile}</div>
                  <div><b>Address:</b> {rec.address}</div>
                  <div><b>Submitted:</b> {rec.submittedAt}</div>
                  <button className="delete-btn" onClick={() => deletePANRecord(i)}>Delete</button>
                  <button className="download-btn" onClick={() => downloadPANPDF(rec)}>Download PDF</button>
                </li>
              ))}
            </ul>
          )}

          {/* Aadhaar Update Applications */}
          <h2 className="dashboard-subheading" style={{ marginTop: 32 }}>Your Aadhaar Update Applications</h2>
          {filteredAadhar.length === 0 ? (
            <p style={{ color: '#bbbbbb' }}>No Aadhaar Update forms match your search.</p>
          ) : (
            <ul className="pan-history-list">
              {filteredAadhar.map((rec, i) => (
                <li key={i} className="pan-history-item">
                  <div><b>Name:</b> {rec.name}</div>
                  <div><b>DOB:</b> {rec.dob}</div>
                  <div><b>Aadhaar:</b> {rec.aadhaar}</div>
                  <div><b>Mobile:</b> {rec.mobile}</div>
                  <div><b>Address:</b> {rec.address}</div>
                  <div><b>Submitted:</b> {rec.submittedAt}</div>
                  <button className="delete-btn" onClick={() => deleteAadharRecord(i)}>Delete</button>
                  <button className="download-btn" onClick={() => downloadAadharPDF(rec)}>Download PDF</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Chatbot Widget with passed props */}
        <Chatbot panHistory={panHistory} aadharHistory={aadharHistory} />

        <button className="dashboard-logout">Log out</button>
      </div>
    </div>
  );
}

export default UserDashboard;
