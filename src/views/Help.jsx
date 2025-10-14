import { Link } from "react-router-dom";

const Help = () => {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#25D366" }}>Centro de Ayuda - Clon de WhatsApp</h1>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>⚙️Funcionamiento general del clon</h2>
        <p>
          Esta aplicación simula un funcionamiento simple y basico de WhatsApp Web. 
          Permite iniciar sesión, acceder a una sala de chat y mantener el estado 
          del usuario activo gracias a utilizar <strong>localStorage</strong>. 
          Las rutas están protegidas para garantizar que solo usuarios logueados 
          puedan acceder.
        </p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>💡Tecnologías utilizadas</h2>
        <ul>
          <li><strong>React</strong> para la construcción de la interfaz.</li>
          <li><strong>React Router DOM</strong> para la navegación entre rutas protegidas y públicas.</li>
          <li><strong>Hooks</strong> (<code>useState</code>, <code>useEffect</code>, <code>useNavigate</code>) para el manejo del estado y efectos.</li>
          <li><strong>localStorage</strong> para persistir el estado de sesión.</li>
          <li><strong>Vite</strong> como entorno de desarrollo rápido.</li>
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>🙌🏻Posibles mejoras futuras</h2>
        <ul>
          <li>Implementar mensajes en tiempo real utilizando WebSockets.</li>
          <li>Agregar una base de datos para guardar los chats y usuarios.</li>
          <li>Incluir soporte de temas (claro/oscuro o el que se quiera utilizar) en la configuración.</li>
          <li>Permitir el envío de archivos e imágenes.</li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem" }}>
        <Link to="/chat" style={{ color: "#25D366", textDecoration: "none" }}>
          ← Volver al Chat
        </Link>
      </p>
    </main>
  );
};

export default Help;