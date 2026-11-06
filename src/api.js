/** Central API helper — one place for the backend URL + auth headers. */
export const API_BASE = (process.env.REACT_APP_API_URL || "http://localhost:5000").replace(/\/+$/, "");

export const apiUrl = (p) => `${API_BASE}${p.startsWith("/") ? p : "/" + p}`;

const TOKEN_KEY = "osheq_atp_token";
const ADMIN_KEY = "osheq_admin_key";

export const atpToken = {
  get: () => localStorage.getItem(TOKEN_KEY) || "",
  set: (t) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};
export const adminKey = {
  get: () => localStorage.getItem(ADMIN_KEY) || "",
  set: (k) => localStorage.setItem(ADMIN_KEY, k),
  clear: () => localStorage.removeItem(ADMIN_KEY),
};

async function request(path, { method = "GET", body, auth = "atp" } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth === "atp" && atpToken.get()) headers.Authorization = `Bearer ${atpToken.get()}`;
  if (auth === "admin" && adminKey.get()) headers["x-admin-key"] = adminKey.get();

  const res = await fetch(apiUrl(path), {
    method, headers, body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch { data = null; }
  if (!res.ok) {
    const msg = (data && (data.error || data.message)) || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  health: () => request("/api/health", { auth: "none" }),

  /* ATP public */
  applyAtp: (payload) => request("/api/atp/apply", { method: "POST", body: payload, auth: "none" }),
  atpLogin: (email, password) => request("/api/atp/login", { method: "POST", body: { email, password }, auth: "none" }),

  /* ATP session */
  me: () => request("/api/atp/me"),
  changePassword: (currentPassword, newPassword) =>
    request("/api/atp/change-password", { method: "POST", body: { currentPassword, newPassword } }),

  /* admin */
  adminLogin: (key) => request("/api/admin/login", { method: "POST", body: { key }, auth: "none" }),
  atpApplications: (status) => request(`/api/atp${status ? `?status=${status}` : ""}`, { auth: "admin" }),
  approveAtp: (id, password) => request(`/api/atp/${id}/approve`, { method: "POST", body: { password }, auth: "admin" }),
  rejectAtp: (id) => request(`/api/atp/${id}/reject`, { method: "POST", auth: "admin" }),

  /* certificates */
  createCertificate: (payload) => request("/api/certificates", { method: "POST", body: payload, auth: "admin" }),
  certificates: () => request("/api/certificates", { auth: "admin" }),
  certificate: (certNo) => request(`/api/certificates/${encodeURIComponent(certNo)}`, { auth: "none" }),
  verifyLegacy: (username, certificateNumber) =>
    request(`/api/certificates/verify?username=${encodeURIComponent(username)}&certificateNumber=${encodeURIComponent(certificateNumber)}`, { auth: "none" }),
};
