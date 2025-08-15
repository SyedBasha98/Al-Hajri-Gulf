import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // optional small styles (see below)

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = React.useState({ email: "", password: "", remember: true });
  const [error, setError] = React.useState("");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");

    // 👉 Replace with your own auth logic. For demo, accept anything non-empty.
    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    // Save login flag (optionally save a token or user too)
    localStorage.setItem("isLoggedIn", "true");
    if (form.remember) {
      localStorage.setItem("userEmail", form.email);
    } else {
      localStorage.removeItem("userEmail");
    }

    nav("/", { replace: true }); // go to app
  };

  React.useEffect(() => {
    // prefill email if previously stored
    const saved = localStorage.getItem("userEmail") || "";
    if (saved) setForm((p) => ({ ...p, email: saved }));
  }, []);

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={submit}>
        <h2>Sign in</h2>
        <div>
          <label className="login-label">Username</label>
          <input
            className="login-input"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Username"
          />
        </div>
        <div>
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="••••••••"
          />
        </div>
        <label className="login-check">
          <input type="checkbox" name="remember" checked={form.remember} onChange={onChange} />
          Remember me
        </label>

        {error && <div className="login-error">{error}</div>}

        <div className="login-actions">
          <button className="btn primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
