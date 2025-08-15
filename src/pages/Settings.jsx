import React from "react";

export default function Settings() {
  const logout = () => { localStorage.setItem("isLoggedIn","false"); window.location.href="/"; };
  return (
    <div className="page">
      <h2>Settings</h2>
      <div className="card"><button className="btn danger" onClick={logout}>Logout</button></div>
    </div>
  );
}
