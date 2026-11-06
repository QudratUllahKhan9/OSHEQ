import React, { useEffect, useState } from "react";
import { api, adminKey } from "../api";
import CertificateCard from "../components/CertificateCard/CertificateCard";
import "./atp.css";

export default function AdminPanel() {
  const [key, setKey] = useState(adminKey.get());
  const [authed, setAuthed] = useState(Boolean(adminKey.get()));
  const [apps, setApps] = useState([]);
  const [certs, setCerts] = useState([]);
  const [error, setError] = useState("");
  const [info, setInfo] = useState(null);
  const [form, setForm] = useState({ name: "", course: "", provider: "Safety Solution Pvt Ltd.", date: "", certNo: "" });
  const [created, setCreated] = useState(null);
  const [busy, setBusy] = useState(false);

  const loadAll = async () => {
    try {
      const [a, c] = await Promise.all([api.atpApplications(), api.certificates()]);
      setApps(a.applications || []); setCerts(c.certificates || []);
    } catch (e) { setError(e.message); }
  };

  useEffect(() => { if (authed) loadAll(); /* eslint-disable-next-line */ }, [authed]);

  const login = async (e) => {
    e.preventDefault(); setError("");
    try { await api.adminLogin(key); adminKey.set(key); setAuthed(true); }
    catch (err) { setError(err.message); }
  };

  const approve = async (id) => {
    setError(""); setInfo(null);
    try {
      const r = await api.approveAtp(id);
      setInfo(r);
      await loadAll();
    } catch (e) { setError(e.message); }
  };
  const reject = async (id) => {
    try { await api.rejectAtp(id); await loadAll(); } catch (e) { setError(e.message); }
  };

  const createCert = async (e) => {
    e.preventDefault(); setError(""); setBusy(true); setCreated(null);
    try {
      const r = await api.createCertificate(form);
      setCreated(r.certificate);
      await loadAll();
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  if (!authed) {
    return (
      <main className="atp-page"><div className="atp-wrap">
        <div className="atp-head"><span className="atp-eyebrow">Admin</span><h1>Admin Panel</h1>
          <p>Admin key daalein (backend ke <code>ADMIN_KEY</code> env se).</p></div>
        <form className="atp-card" onSubmit={login}>
          <label>Admin key<input type="password" value={key} onChange={e => setKey(e.target.value)} required /></label>
          {error && <div className="atp-alert">{error}</div>}
          <button className="btn btn-primary">Continue</button>
        </form>
      </div></main>
    );
  }

  const pending = apps.filter(a => a.status === "pending");

  return (
    <main className="atp-page"><div className="atp-wrap wide">
      <div className="atp-topbar">
        <div><span className="atp-eyebrow">Admin</span><h1>Dashboard</h1></div>
        <button className="btn btn-ghost" onClick={() => { adminKey.clear(); setAuthed(false); }}>Logout</button>
      </div>

      {error && <div className="atp-alert">{error}</div>}
      {info && (
        <div className="atp-ok">
          <b>Approved:</b> {info.credentials.name} · {info.credentials.academy}<br />
          Email: <b>{info.credentials.email}</b> · Password: <b>{info.credentials.password}</b><br />
          {info.mail && info.mail.delivered ? "Email bhej diya gaya ✓" : "SMTP set nahi — email data/mail-outbox.json me save hui."}
        </div>
      )}

      <div className="atp-cards">
        <div className="stat"><b>{pending.length}</b><span>Pending ATP</span></div>
        <div className="stat"><b>{apps.filter(a => a.status === "approved").length}</b><span>Approved</span></div>
        <div className="stat"><b>{certs.length}</b><span>Certificates</span></div>
      </div>

      <div className="atp-card">
        <h2>ATP applications</h2>
        {apps.length === 0 ? <p className="muted">Koi application nahi.</p> : (
          <div className="table-scroll">
            <table className="atp-table">
              <thead><tr><th>Name</th><th>Academy</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {apps.map(a => (
                  <tr key={a.id}>
                    <td data-label="Name">{a.name}</td>
                    <td data-label="Academy">{a.academy}</td>
                    <td data-label="Email">{a.email}</td>
                    <td data-label="Status"><span className={`pill pill-${a.status}`}>{a.status}</span></td>
                    <td data-label="Action">
                      {a.status === "pending" ? (
                        <div className="row-actions">
                          <button className="btn btn-mini primary" onClick={() => approve(a.id)}>Accept</button>
                          <button className="btn btn-mini" onClick={() => reject(a.id)}>Reject</button>
                        </div>
                      ) : <span className="muted">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="atp-card">
        <h2>Create certificate</h2>
        <form className="atp-grid" onSubmit={createCert}>
          <label>Participant name *<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></label>
          <label>Course<input value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} placeholder="ISO 45001:2018 Lead Auditor" /></label>
          <label>Provider<input value={form.provider} onChange={e => setForm({ ...form, provider: e.target.value })} /></label>
          <label>Date<input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} /></label>
          <label>Certificate No<input value={form.certNo} onChange={e => setForm({ ...form, certNo: e.target.value })} placeholder="auto" /></label>
          <button className="btn btn-primary" disabled={busy}>{busy ? "Generating…" : "Generate"}</button>
        </form>
      </div>

      {created && (
        <div className="atp-card">
          <h2>{created.certNo}</h2>
          <p className="muted">QR: <a href={created.verifyUrl} target="_blank" rel="noopener noreferrer">{created.verifyUrl}</a></p>
          <CertificateCard {...{ name: created.name, course: created.course, provider: created.provider, dateText: created.dateText, certNo: created.certNo }} qrSrc={`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/qr/${created.certNo}`} />
          <div className="row-actions" style={{ marginTop: 14 }}>
            <a className="btn btn-mini primary" href={`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/pdf/${created.certNo}`} target="_blank" rel="noopener noreferrer">Download PDF</a>
            <a className="btn btn-mini" href={`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/preview/${created.certNo}`} target="_blank" rel="noopener noreferrer">Preview PNG</a>
          </div>
        </div>
      )}
    </div></main>
  );
}
