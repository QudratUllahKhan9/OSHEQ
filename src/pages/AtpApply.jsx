import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { api } from "../api";
import "./atp.css";

export default function AtpApply() {
  const [form, setForm] = useState({ name: "", academy: "", email: "", contact: "", note: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState("");

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError(""); setBusy(true);
    try {
      const r = await api.applyAtp(form);
      setDone(r.application);
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  return (
    <>
      <Header />
      <main className="atp-page">
        <div className="atp-wrap">
          <div className="atp-head">
            <span className="atp-eyebrow">Grow with OSHEQ</span>
            <h1>Become an Authorized Training Partner</h1>
            <p>Apply karein. Admin approve karega, phir aapke email par login details aa jayengi.</p>
          </div>

          {done ? (
            <div className="atp-card atp-success">
              <h2>Application submit ho gayi ✓</h2>
              <p><b>{done.name}</b> — <b>{done.academy}</b></p>
              <p>Status: <span className="pill pill-pending">Pending approval</span></p>
              <p className="muted">
                Admin approve karne ke baad <b>{done.email}</b> par password bheja jayega.
                Usi email se aap <Link to="/atp/login">ATP Portal</Link> me login karenge.
              </p>
              <Link className="btn btn-primary" to="/atp/login">ATP Portal kholen</Link>
            </div>
          ) : (
            <form className="atp-card" onSubmit={submit}>
              <div className="atp-grid">
                <label>Full Name *<input name="name" value={form.name} onChange={set} required placeholder="Ahmad Raza" /></label>
                <label>Academy / Organization *<input name="academy" value={form.academy} onChange={set} required placeholder="SafeWork Training Academy" /></label>
                <label>Email Address *<input type="email" name="email" value={form.email} onChange={set} required placeholder="partner@company.com" /></label>
                <label>Contact Number<input name="contact" value={form.contact} onChange={set} placeholder="+92 300 1234567" /></label>
              </div>
              <label className="full">Note (optional)
                <textarea name="note" rows="3" value={form.note} onChange={set} placeholder="Courses, city, experience..." />
              </label>
              {error && <div className="atp-alert">{error}</div>}
              <button className="btn btn-primary" disabled={busy}>{busy ? "Sending…" : "Submit application"}</button>
              <p className="muted small">Already approved? <Link to="/atp/login">Login here</Link></p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
