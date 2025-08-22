import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <section className="w-[600px] h-[600px] relative bg-[url('assets/image.avif')] bg-cover bg-center z-[10] hover:after:animate-move after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_right,transparent,#fff3,transparent)] after:z-[12] after:opacity-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('assets/splash.avif')] before:bg-cover before:bg-center before:mix-blend-lighten before:z-[11]"></section>
  );
};

const rootEl = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

// estilos clave de animación
const style = document.createElement("style");
style.textContent = `
@keyframes move {
  0% { opacity: 1; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(100%); }
}
`;
document.head.appendChild(style);
