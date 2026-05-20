import React, { useState } from 'react';
import { 
  FaCheckCircle, FaTimesCircle, FaUser, FaHashtag, 
  FaDownload, FaEye, FaShieldAlt, FaBook, FaCalendar, FaBuilding 
} from 'react-icons/fa';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [formData, setFormData] = useState({ fullName: '', certificateNumber: '' });
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. View Certificate (PDF Viewer mein open karega)
  const viewCertificate = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 2. Download Certificate (Blob approach - Force download)
  const downloadCertificate = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
      window.open(url, '_blank');
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setVerificationResult(null);
    setError(null);

    try {
      const response = await fetch(`https://osheq-api.vercel.app/api/certificates/verify?username=${encodeURIComponent(formData.fullName)}&certificateNumber=${encodeURIComponent(formData.certificateNumber)}`);
      if (!response.ok) throw new Error('Certificate not found or details are incorrect.');
      
      const data = await response.json();
      setVerificationResult({
        ...data.certificate,
        url: `https://osheq-api.vercel.app/certificates/${encodeURIComponent(formData.certificateNumber)}.pdf`
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="verify-page">
      <div className="verify-hero">
        <h1>Certificate Verification</h1>
        <p>Validate the authenticity of OSHEQ credentials instantly.</p>
      </div>

      <div className="container verify-layout">
        <div className="verify-form-col">
          <div className="card">
            <h2>Enter Details</h2>
            <form onSubmit={handleVerify}>
              <div className="input-group">
                <label><FaUser /> Full Name</label>
                <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} placeholder="As per certificate" required />
              </div>
              <div className="input-group">
                <label><FaHashtag /> Certificate No</label>
                <input type="text" value={formData.certificateNumber} onChange={(e) => setFormData({...formData, certificateNumber: e.target.value})} placeholder="e.g. OSHEQ-XXXXX" required />
              </div>
              <button type="submit" className="verify-btn" disabled={isLoading}>{isLoading ? 'Verifying...' : 'Verify Now'}</button>
            </form>
          </div>
        </div>

        <div className="verify-result-col">
          {error && <div className="status-box error"><FaTimesCircle /> {error}</div>}
          {verificationResult && (
            <div className="status-box success">
              <h3><FaCheckCircle /> Verification Successful</h3>
              <div className="result-grid">
                <p><strong>Holder:</strong> {verificationResult.holderName}</p>
                <p><strong>Course:</strong> {verificationResult.courseName}</p>
                <p><strong>Issue Date:</strong> {verificationResult.dateOfIssue}</p>
              </div>
              
              {/* Actions Section */}
              <div className="certificate-action-buttons">
                <button className="action-btn preview-btn" onClick={() => viewCertificate(verificationResult.url)}>
                  <FaEye /> View Certificate
                </button>
                <button className="action-btn download-btn" onClick={() => downloadCertificate(verificationResult.url, `OSHEQ_${verificationResult.certificateNumber}.pdf`)}>
                  <FaDownload /> Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default CertificateVerification;