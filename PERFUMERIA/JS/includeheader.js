document.addEventListener("DOMContentLoaded", () => {

  const headerContainer = document.getElementById("header-placeholder");

  fetch("/PERFUMERIA/COMPONENTES/header.html")
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;

      // Cargar carrito.js una vez insertado el header
      const script = document.createElement("script");
      script.src = "/PERFUMERIA/JS/carrito.js";
      script.onload = () => {
        // AHORA sí se puede inicializar el carrito
        if (typeof inicializarCarrito === "function") {
          inicializarCarrito();
        }
      };
      document.body.appendChild(script);
    })
    .catch(error => console.error("Error al cargar header:", error));

  // Insertar el sidebar solo UNA vez
  document.body.insertAdjacentHTML("beforeend", `
    <div id="sidebar-carrito" class="sidebar-carrito">
      <div class="carrito-header">
        <h2>Tu Carrito</h2>
        <span id="cerrar-carrito" class="cerrar-btn">&times;</span>
      </div>
      <div id="carrito-items" class="carrito-items">
        <p>Tu carrito está vacío</p>
      </div>
      <div class="carrito-footer">
        <p id="total">Total: $0</p>
        <button id="finalizar-compra">Finalizar compra</button>
      </div>
    </div>
  `);

});