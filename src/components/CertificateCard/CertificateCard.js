import React from "react";
import bg from "../../assets/cert-bg.jpg";
import "./CertificateCard.css";

/**
 * Visual replica of the generated PDF (same artwork, same field positions).
 * Positions come from backend/src/render-pdf.js  (A4 794x1123).
 */
export default function CertificateCard({ name, course, provider, dateText, certNo, qrSrc }) {
  return (
    <div className="cert-sheet" style={{ backgroundImage: `url(${bg})` }}>
      <div className="cf cf-name">{name || ""}</div>
      {course ? <div className="cf cf-course">{course}</div> : null}
      <div className="cf cf-provider">{provider || "Safety Solution Pvt Ltd."}</div>
      <div className="cf cf-dated">DATED: {dateText || "00-Apr-0000"}</div>
      <div className="cf cf-certno">CERTIFICATE NO: {certNo || ""}</div>
      <div className="cf-qr">{qrSrc ? <img src={qrSrc} alt="Verify QR" /> : null}</div>
    </div>
  );
}
