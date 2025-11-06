import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaUser, FaHashtag, FaQrcode, FaEnvelope, FaShieldAlt, FaUniversity, FaBuilding, FaCalendar, FaBook } from 'react-icons/fa';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [fullName, setFullName] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setVerificationResult(null);
    setError(null);

    try {
      const response = await fetch(
        `https://osheq-api.vercel.app/api/certificates/verify?username=${encodeURIComponent(fullName)}&certificateNumber=${encodeURIComponent(certificateNumber)}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          message: 'Certificate not found or details are incorrect.',
        }));
        throw new Error(errorData.message);
      }
      
      const data = await response.json();

      setVerificationResult({
        isValid: true,
        holderName: data.certificate.holderName,
        certificateNumber: data.certificate.certificateNumber,
        courseName: data.certificate.courseName,
        issueDate: data.certificate.dateOfIssue,
        atp: data.certificate.atp || 'OSHEQ Academy Pvt Ltd.',
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="verification-page-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <FaShieldAlt className="header-icon" />
          <h1>Certificate Verification</h1>
          <p>Ensure the authenticity of OSHEQ qualifications</p>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Left Side - Information */}
        <div className="info-section">
          <div className="info-card">
            <h2>About Verification</h2>
            <p>
              OSHEQ regularly receives requests from employers, recruitment agencies, 
              Higher Education institutions, and other organizations to confirm that 
              an individual holds a OSHEQ qualification. It is important to OSHEQ that 
              organizations can validate qualifications so that you can maintain workplace 
              safety.
            </p>
            <p className="warning-text">
              We take all reports of fraudulent Certificates and Parchments very seriously, 
              and we advise all students to keep these documents secure to prevent fraud.
            </p>

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaQrcode />
                </div>
                <div className="feature-content">
                  <h3>QR Code Verification</h3>
                  <p>All Certificates and Parchments issued by OSHEQ include a QR code that can be scanned with a smartphone to verify authenticity.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaUniversity />
                </div>
                <div className="feature-content">
                  <h3>Online Verification</h3>
                  <p>Using our free self-service verification platform, you can validate all Certificates and Parchments issued by OSHEQ.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <FaEnvelope />
                </div>
                <div className="feature-content">
                  <h3>Direct Verification</h3>
                  <p>If you have a copy of OSHEQ qualification parchment, we can verify through <strong>info@osheq.org</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Verification Form */}
        <div className="form-section">
          <div className="verification-card">
            <div className="card-header">
              <FaShieldAlt className="card-icon" />
              <h2>Verify Certificate</h2>
              <p>Enter your details to verify your OSHEQ certificate</p>
            </div>

            <form onSubmit={handleVerify}>
              <div className="input-group">
                <label htmlFor="fullName">
                  <FaUser className="input-icon" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="certificateNumber">
                  <FaHashtag className="input-icon" />
                  Certificate No
                </label>
                <input
                  type="text"
                  id="certificateNumber"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  placeholder="Enter Your Certificate No"
                  required
                />
              </div>

              <button type="submit" className="verify-button" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loader"></span>
                    Verifying...
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="button-icon" />
                    Verify Certificate
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Section */}
          {error && (
            <div className="result-card error">
              <div className="result-header">
                <FaTimesCircle className="result-icon" />
                <h3>Verification Failed</h3>
              </div>
              <p>{error}</p>
            </div>
          )}

          {verificationResult && (
            <div className="result-card success">
              <div className="result-header">
                <FaCheckCircle className="result-icon" />
                <h3>Certificate Verified Successfully</h3>
              </div>
              
              <div className="result-grid">
                <div className="result-item">
                  <FaUser className="item-icon" />
                  <div className="item-content">
                    <label>Full Name</label>
                    <p>{verificationResult.holderName}</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <FaHashtag className="item-icon" />
                  <div className="item-content">
                    <label>Certificate Number</label>
                    <p>{verificationResult.certificateNumber}</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <FaBook className="item-icon" />
                  <div className="item-content">
                    <label>Course Name</label>
                    <p>{verificationResult.courseName}</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <FaCalendar className="item-icon" />
                  <div className="item-content">
                    <label>Date of Issue</label>
                    <p>{verificationResult.issueDate}</p>
                  </div>
                </div>
                
                <div className="result-item">
                  <FaBuilding className="item-icon" />
                  <div className="item-content">
                    <label>ATP</label>
                    <p>{verificationResult.atp}</p>
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