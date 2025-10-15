import React from "react";
import { Link } from "react-router-dom";

const SettingsPopup = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(2px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          textAlign: "center",
          width: "320px",
        }}
      >
        <h2 style={{ color: "#25D366" }}>⚙️ Configuración</h2>

        {/* Selector de tema (simulación) */}
        <div style={{ marginTop: "1.2rem" }}>
          <h4 style={{ marginBottom: "0.5rem" }}>Cambiar tema:</h4>
          <select
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            <option value="claro"> Modo Claro</option>
            <option value="oscuro"> Modo Oscuro</option>
          </select>
          <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.3rem" }}>
      
          </p>
        </div>

        {/* 📘 Ir al centro de ayuda */}
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
          <li>
            <Link
              to="/help"
              onClick={onClose}
              style={{
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "bold",
              }}
            >
              📘 Ir al Centro de Ayuda
            </Link>
          </li>

          {/* 🚪 Cerrar sesión */}
          <li style={{ marginTop: "1rem" }}>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🚪 Cerrar sesión
            </button>
          </li>
        </ul>

        {/* Botón para cerrar el popup */}
        <button
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            background: "#25D366",
            border: "none",
            borderRadius: "0.5rem",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SettingsPopup;