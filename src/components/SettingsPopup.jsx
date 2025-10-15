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
        backgroundColor: "rgba(0,0,0,0.5)",
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
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h2>Configuración</h2>
        <p>Selecciona una opción:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/help" onClick={onClose}>
              📘 Ir al Centro de Ayuda
            </Link>
          </li>
        </ul>
        <button
          style={{
            marginTop: "1rem",
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