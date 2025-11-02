import React, { useState, useRef } from 'react';
import { FaSearch, FaCertificate, FaUser, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaDownload, FaPrint, FaUserShield } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [username, setUsername] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const certificateRef = useRef(null);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!username.trim() || !certificateNumber.trim()) {
      alert('Please enter both username and certificate number');
      return;
    }

    setIsLoading(true);
    setVerificationResult(null);

    try {
      const response = await fetch(
        `https://osheq-api.vercel.app/api/certificates/verify?username=${encodeURIComponent(username)}&certificateNumber=${encodeURIComponent(certificateNumber)}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ 
          message: 'Verification failed' 
        }));
        throw new Error(errorData.message || 'Verification failed');
      }
      console.log(response,"KKKKKKKKKKK")
      const data = await response.json();
      console.log(data)

      // --- START: This is the logic you wanted ---
      
      // 1. Get the certificate number and PDF URL
      const certNumber = data.certificate.certificateNumber;
      const certificatePdfUrl = `https://osheq-api.vercel.app/certificates/${certNumber}.pdf`;

      // 2. Create the NEW public URL for the QR Code
      //    (This is the page you must build on osheq.us)
      const publicVerificationUrl = `https://www.osheq.us/certificate-lookup?cert=${encodeURIComponent(certNumber)}`;

      setVerificationResult({
        isValid: true,
        holderName: data.certificate.holderName || username,
        certificateNumber: certNumber,
        courseName: data.certificate.courseName || "OSHEQ Training",
        issueDate: data.certificate.dateOfIssue,
        dateOfBirth: data.certificate.dateOfBirth,

        // 3. pdfUrl is for the iframe viewer on this page
        pdfUrl: certificatePdfUrl, 

        // 4. qrCode now links to your public page, NOT the PDF
        qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
          publicVerificationUrl
        )}`,
        user: {
          name: username,
          email: `${username.toLowerCase()}@example.com`,
          joinDate: "01/01/2023"
        }
      });
      // --- END: Logic Change ---

    } catch (err) {
      console.error('Verification error:', err);
      setVerificationResult({
        isValid: false,
        certificateNumber,
        message: err.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (verificationResult?.pdfUrl) {
      const link = document.createElement('a');
      link.href = verificationResult.pdfUrl;
      link.download = `${verificationResult.certificateNumber}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    if (!certificateRef.current) return;
    html2canvas(certificateRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${verificationResult.certificateNumber}.pdf`);
    });
  };

  const handlePrint = () => {
    if (verificationResult?.pdfUrl) {
      window.open(verificationResult.pdfUrl, '_blank');
      return;
    }

    if (!certificateRef.current) return;
    html2canvas(certificateRef.current).then(canvas => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html><head><title>Print Certificate</title>
        <style>body { margin: 0; padding: 0; } img { max-width: 100%; height: auto; }</style>
        </head><body>
        <img src="${canvas.toDataURL('image/png')}" />
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              window.close();
            }, 500);
          }
        </script>
        </body></html>
      `);
      printWindow.document.close();
    });
  };

  return (
    <div className="certificate-verification-container">
      <div className="verification-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <FaUserShield className="hero-icon" />
          <h1>Certificate Verification</h1>
          <p>Verify training certificates with your credentials</p>
        </div>
      </div>

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
                    placeholder="Enter certificate number (e.g. OSHEQ-12345)"
                    required
                  />
                </div>
              </div>

              {/* This is the OSHEQ.us link */}
              <div className="main-site-link">
                <p>
                  Part of the <a href="https://www.osheq.us" target="_blank" rel="noopener noreferrer">
                    OSHEQ.us
                  </a> official network.
                </p>
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

          {verificationResult && (
            <div className="result-section">
              <div className="result-header">
                {verificationResult.isValid ? (
                  <>
                    <FaCheckCircle className="status-icon valid" />
                    <h3>Certificate Verified Successfully</h3>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="status-icon invalid" />
                    <h3>Certificate Verification Failed</h3>
                  </>
                )}
                <span className="verified-by">Verified by {username}</span>
              </div>

              {verificationResult.isValid ? (
                <>
                  <div className="certificate-display">
                    <div className="certificate-image-container" ref={certificateRef}>
                      {verificationResult.pdfUrl ? (
                        <iframe 
                          src={verificationResult.pdfUrl} 
                          title="Certificate PDF"
                          className="pdf-viewer"
                        />
                      ) : (
                        <div className="certificate-template">
                          <h3>{verificationResult.courseName}</h3>
                          <p>This certifies that</p>
                          <h2>{verificationResult.holderName}</h2>
                          <p>has successfully completed the training</p>
                          <p>Certificate Number: {verificationResult.certificateNumber}</p>
                          <p>Issued on: {verificationResult.issueDate}</p>
                          <img src={verificationResult.qrCode} alt="QR Code" className="certificate-qr" />
                        </div>
                      )}
                      <div className="certificate-overlay">
                        <button className="action-btn" onClick={handleDownload}>
                          <FaDownload /> Download
                        </button>
                        <button className="action-btn" onClick={handlePrint}>
                          <FaPrint /> Print
                        </button>
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
                          <label>Certificate Number</label>
                          <p>{verificationResult.certificateNumber}</p>
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
                          <label>Date of birth</label>
                          <p>{verificationResult.dateOfBirth}</p>
                        </div>
                      </div>

                      <div className="qr-code">
                        <img src={verificationResult.qrCode} alt="Verification QR Code" />
                        <p>Scan to verify this certificate</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="invalid-notice">
                  <p>
                    The certificate with number <strong>{verificationResult.certificateNumber}</strong> could not be verified.
                    {verificationResult.message && <span> Reason: {verificationResult.message}</span>}
                  </p>
                  <p>Please check the details and try again, or contact our support team for assistance.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;