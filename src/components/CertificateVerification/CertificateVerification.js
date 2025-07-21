import React, { useState, useRef } from 'react';
import { FaSearch, FaCertificate, FaUser, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaDownload, FaPrint, FaUserShield } from 'react-icons/fa';
import html2canvas from 'html2canvas';

import './CertificateVerification.css';

const CertificateVerification = () => {
  const [username, setUsername] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const certificateRef = useRef(null);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!username.trim() || !certificateNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockData = {
        username,
        certificateNumber,
        isValid: true, // Always valid for demo
        holderName: 'John Doe',
        courseName: 'OSHEQ Safety Professional Certification',
        issueDate: '2023-05-15',
        expiryDate: '2025-05-15',
        certificateId: `OSH-${Math.floor(100000 + Math.random() * 900000)}`,
        certificateImage: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(`https://osheq.com/verify/${certificateNumber}`)
      };
      
      setVerificationResult(mockData);
      setIsLoading(false);
    }, 1500);
  };

  const handleDownload = () => {
    // if (!certificateRef.current) return;

    // html2canvas(certificateRef.current).then(canvas => {
    //   const imgData = canvas.toDataURL('image/png');
    //   // const pdf = new jsPDF('landscape');
    //   const imgProps = pdf.getImageProperties(imgData);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
    //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //   pdf.save(`${verificationResult.certificateNumber}.pdf`);
    // });
  };

  const handlePrint = () => {
    if (!certificateRef.current) return;

    html2canvas(certificateRef.current).then(canvas => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Certificate</title>
            <style>
              body { margin: 0; padding: 0; }
              img { max-width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <img src="${canvas.toDataURL('image/png')}" />
            <script>
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.close();
                }, 500);
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    });
  };

  return (
    <div className="certificate-verification-container">
      {/* Hero Section */}
      <div className="verification-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <FaUserShield className="hero-icon" />
          <h1>Certificate Verification</h1>
          <p>Verify training certificates with your credentials</p>
        </div>
      </div>

      {/* Verification Form */}
      <div className="verification-body">
        <div className="verification-card">
          <div className="search-section">
            <h2><FaSearch className="section-icon" /> Verify Certificate</h2>
            <form onSubmit={handleVerify}>
              <div className="input-group">
                <label htmlFor="username">Your Username</label>
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="certificateNumber">Certificate Number</label>
                <div className="input-with-icon">
                  <FaCertificate className="input-icon" />
                  <input
                    type="text"
                    id="certificateNumber"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    placeholder="Enter certificate number (e.g. OSH-123456)"
                    required
                  />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="verify-btn">
                {isLoading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <FaSearch className="btn-icon" />
                    Verify Certificate
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Section */}
          {verificationResult && (
            <div className={`result-section ${verificationResult.isValid ? 'valid' : 'invalid'}`}>
              <div className="result-header">
                {verificationResult.isValid ? (
                  <FaCheckCircle className="status-icon valid" />
                ) : (
                  <FaTimesCircle className="status-icon invalid" />
                )}
                <h3>
                  {verificationResult.isValid 
                    ? 'Valid Certificate Verified' 
                    : 'Certificate Not Valid'}
                </h3>
                <span className="verified-by">Verified by: {verificationResult.username}</span>
              </div>

              <div className="certificate-display">
                <div className="certificate-image-container" ref={certificateRef}>
                  <img 
                    src={verificationResult.certificateImage} 
                    alt="Certificate Preview" 
                    className="certificate-image"
                  />
                  <div className="certificate-overlay">
                    <button className="action-btn" onClick={handleDownload}>
                      <FaDownload /> Download
                    </button>
                    <button className="action-btn" onClick={handlePrint}>
                      <FaPrint /> Print
                    </button>
                  </div>
                  <div className="certificate-details-overlay">
                    <div className="detail-overlay">
                      <span>Certificate ID: {verificationResult.certificateNumber}</span>
                      <span>Holder: {verificationResult.holderName}</span>
                      <span>Course: {verificationResult.courseName}</span>
                      <span>Issued: {verificationResult.issueDate}</span>
                      <span>Expires: {verificationResult.expiryDate}</span>
                    </div>
                    <div className="qr-overlay">
                      <img src={verificationResult.qrCode} alt="QR Code" />
                    </div>
                  </div>
                </div>

                <div className="certificate-details">
                  <div className="detail-row">
                    <FaUser className="detail-icon" />
                    <div>
                      <label>Certificate Holder</label>
                      <p>{verificationResult.holderName}</p>
                    </div>
                  </div>
                  
                  <div className="detail-row">
                    <FaCertificate className="detail-icon" />
                    <div>
                      <label>Course Name</label>
                      <p>{verificationResult.courseName}</p>
                    </div>
                  </div>
                  
                  <div className="detail-row">
                    <FaCalendarAlt className="detail-icon" />
                    <div>
                      <label>Issue Date</label>
                      <p>{verificationResult.issueDate}</p>
                    </div>
                  </div>
                  
                  <div className="detail-row">
                    <FaCalendarAlt className="detail-icon" />
                    <div>
                      <label>Expiry Date</label>
                      <p>{verificationResult.expiryDate}</p>
                    </div>
                  </div>

                  <div className="qr-code">
                    <img src={verificationResult.qrCode} alt="Verification QR Code" />
                    <p>Scan to verify</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

  
    </div>
  );
};

export default CertificateVerification;