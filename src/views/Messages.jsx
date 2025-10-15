import { useState } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { ChatProvider } from "../context/ChatContext";
import SettingsPopup from "../components/SettingsPopup";

const Messages = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <ChatProvider>
      <div className="app">
        {/* Barra lateral con botón de configuración */}
        <Sidebar />

        {/* Botón de configuración (puede moverse a la Sidebar si preferís) */}
        <button
          onClick={() => setShowPopup(true)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            zIndex: 500,
          }}
        >
          ⚙️ Configuración
        </button>

        <Chat />

        {/* Popup */}
        {showPopup && <SettingsPopup onClose={() => setShowPopup(false)} />}
      </div>
    </ChatProvider>
  );
};

export { Messages };