import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, atpToken } from "../api";
import "./atp.css";

export default function AtpPortal() {

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!atpToken.get()) { setLoading(false); return; }
    try { setSession(await api.me()); }
    catch { atpToken.clear(); setSession(null); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const login = async (e) => {
    e.preventDefault(); setError(""); setBusy(true);
    try {
      const r = await api.atpLogin(email.trim().toLowerCase(), password);
      atpToken.set(r.token);
      setSession(await api.me());
      setPassword("");
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  };

  const logout = () => { atpToken.clear(); setSession(null); setMsg(""); };

  const changePw = async (e) => {
    e.preventDefault(); setError(""); setMsg("");
    if (pw1 !== pw2) return setError("Dono password same nahi hain.");
    try { await api.changePassword(password, pw1); setMsg("Password update ho gaya."); setPw1(""); setPw2(""); }
    catch (err) { setError(err.message); }
  };

  if (loading) return <main className="atp-page"><div className="atp-wrap"><p>Loading…</p></div></main>;

  /* ---------------- logged in ---------------- */
  if (session) {
    const { user, certificates } = session;
    return (
      <main className="atp-page">
        <div className="atp-wrap wide">
          <div className="atp-topbar">
            <div>
              <span className="atp-eyebrow">ATP Portal</span>
              <h1>{user.academy}</h1>
              <p className="muted">{user.name} · {user.email}</p>
            </div>
            <button className="btn btn-ghost" onClick={logout}>Logout</button>
          </div>

          <div className="atp-cards">
            <div className="stat"><b>{certificates.length}</b><span>Certificates</span></div>
            <div className="stat"><b>Active</b><span>Partner status</span></div>
            <div className="stat"><b>{user.academy.slice(0, 12)}</b><span>Academy</span></div>
          </div>

          <div className="atp-card">
            <h2>Password change karein</h2>
            <form onSubmit={changePw} className="atp-grid">
              <label>Current password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
              <label>New password<input type="password" value={pw1} onChange={e => setPw1(e.target.value)} required /></label>
              <label>Confirm new<input type="password" value={pw2} onChange={e => setPw2(e.target.value)} required /></label>
              <button className="btn btn-primary" type="submit">Update</button>
            </form>
            {error && <div className="atp-alert">{error}</div>}
            {msg && <div className="atp-ok">{msg}</div>}
          </div>

          <div className="atp-card">
            <h2>Your certificates</h2>
            {certificates.length === 0 ? <p className="muted">Abhi koi certificate assign nahi hua.</p> : (
              <div className="table-scroll">
                <table className="atp-table">
                  <thead><tr><th>Certificate No</th><th>Name</th><th>Course</th><th>Issued</th><th>Verify</th></tr></thead>
                  <tbody>
                    {certificates.map(c => (
                      <tr key={c.id}>
                        <td>{c.certNo}</td><td>{c.name}</td><td>{c.course || "—"}</td><td>{c.dateText}</td>
                        <td><a href={c.verifyUrl} target="_blank" rel="noopener noreferrer">Open</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- login form ---------------- */
  return (
    <main className="atp-page">
      <div className="atp-wrap">
        <div className="atp-head">
          <span className="atp-eyebrow">Authorized Training Partners</span>
          <h1>ATP Portal Login</h1>
          <p>Wahi email use karein jis se application bheji thi. Password admin approve karte waqt email par aata hai.</p>
        </div>
        <form className="atp-card" onSubmit={login}>
          <label>Email Address<input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="partner@company.com" autoComplete="username" /></label>
          <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" /></label>
          {error && <div className="atp-alert">{error}</div>}
          <button className="btn btn-primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
          <p className="muted small">Account nahi hai? <Link to="/become-atp">Apply to become an ATP</Link></p>
        </form>
      </div>
    </main>
  );
}
