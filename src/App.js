// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import OriginalApp from "./OriginalApp";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={isLoggedIn ? <OriginalApp /> : <Navigate to="/login" replace />} />
    </Routes>
  );
}
