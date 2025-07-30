import './CertificateVerification.css';
import React, { useState } from 'react';
import { FaSearch, FaCertificate, FaUser, FaCheckCircle, FaTimesCircle, FaDownload } from 'react-icons/fa';

const CertificateVerification = () => {
  const [username, setUsername] = useState('');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Verification failed');
      }

      setVerificationResult({
        isValid: true,
        holderName: data.certificate.holderName,
        certificateNumber: data.certificate.certificateNumber,
        courseName: data.certificate.courseName,
        issueDate: data.certificate.date,
        pdfUrl: `https://osheq-api.vercel.app/certificates/${data.certificate.certificateNumber}.pdf`,
        pdfExists: data.certificate.pdfExists
      });

    } catch (err) {
      setVerificationResult({
        isValid: false,
        certificateNumber,
        message: err.message || 'Failed to verify certificate'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!verificationResult?.pdfUrl) return;
    
    const link = document.createElement('a');
    link.href = verificationResult.pdfUrl;
    link.download = `${verificationResult.certificateNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="certificate-verification-container">
      <div className="search-section">
        <h2><FaSearch /> Verify Certificate</h2>
        <form onSubmit={handleVerify}>
          <div className="input-group">
            <label htmlFor="username">Your Username</label>
            <div className="input-with-icon">
              <FaUser />
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
              <FaCertificate />
              <input
                type="text"
                id="certificateNumber"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                placeholder="Enter certificate number"
                required
              />
            </div>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </form>
      </div>

      {verificationResult && (
        <div className="result-section">
          {verificationResult.isValid ? (
            <>
              <div className="result-header valid">
                <FaCheckCircle />
                <h3>Certificate Verified Successfully</h3>
              </div>
              
              <div className="certificate-display">
                {verificationResult.pdfExists ? (
                  <div className="pdf-viewer-container">
                    <iframe 
                      src={verificationResult.pdfUrl}
                      title="Certificate PDF"
                      className="pdf-viewer"
                    />
                    <button onClick={handleDownload} className="download-btn">
                      <FaDownload /> Download PDF
                    </button>
                  </div>
                ) : (
                  <div className="certificate-details">
                    <p>Certificate details are valid but PDF not found.</p>
                    <p><strong>Holder:</strong> {verificationResult.holderName}</p>
                    <p><strong>Certificate Number:</strong> {verificationResult.certificateNumber}</p>
                    <p><strong>Course:</strong> {verificationResult.courseName}</p>
                    <p><strong>Issue Date:</strong> {verificationResult.issueDate}</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="result-header invalid">
              <FaTimesCircle />
              <h3>Verification Failed</h3>
              <p>{verificationResult.message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;
      
    
