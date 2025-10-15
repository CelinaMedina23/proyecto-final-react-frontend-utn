# Clon de WhatsApp - Proyecto React

Este proyecto es una simulación básica de WhatsApp Web desarrollada con **React**,con los requisitos cumplidos de rutas protegidas, popup funcional y página estática de ayuda.

---

## Funcionalidades Implementadas

### Rutas Protegidas
- Solo los usuarios con sesión activa pueden acceder a `/chat`.
- Si no hay sesión activa, se redirige automáticamente al login.

### Popup Funcional
- Se agregó el componente **SettingsPopup**.
- Se abre desde el botón de configuración del chat (`Messages.jsx`).
- Se puede cerrar mediante un botón y tiene un fondo semitransparente.
- Contiene enlaces interactivos, como acceso al centro de ayuda.

### Página de Ayuda
- Nueva ruta `/help` que muestra información estática:
  - Funcionamiento general del chat.
  - Tecnologías utilizadas.
  - Posibles mejoras futuras.

---

## Tecnologías Utilizadas

- **React**
- **React Router DOM**
- **Vite**
- **Context API**
- **localStorage**

---

## Estructura del Proyecto
src/
┣ components/
┃ ┣ Chat.jsx
┃ ┣ Sidebar.jsx
┃ ┣ SettingsPopup.jsx
┣ views/
┃ ┣ Login.jsx
┃ ┣ Messages.jsx
┃ ┣ Help.jsx
┃ ┣ NotFound.jsx
┣ context/
┃ ┗ ChatContext.jsx
┣ router/
┃ ┗ RouterApp.jsx

## Mejoras Futuras

- Mensajería real y en tiempo real con WebSockets.
- Implementacion de un Backend para almacenar chats y usuarios.
- Modo oscuro / claro o theme que el usuario quiera (o en el mejor caso que la pueda estilizar a su gusto).
- Poder enviar archivos multimedia.

