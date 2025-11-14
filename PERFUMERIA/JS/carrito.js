window.carrito = window.carrito || [];          // almacenamiento global
window.__carrito_iniciado = window.__carrito_iniciado || false;

function cargarCarritoDesdeStorage() {
  try {
    const raw = localStorage.getItem('carrito');
    window.carrito = raw ? JSON.parse(raw) : window.carrito || [];
  } catch (e) {
    window.carrito = window.carrito || [];
  }
}

function guardarCarritoEnStorage() {
  try {
    localStorage.setItem('carrito', JSON.stringify(window.carrito));
  } catch (e) {
    console.warn('No se pudo guardar carrito en localStorage', e);
  }
}

function actualizarCarrito() {
  const contenedor = document.getElementById("carrito-items");
  const totalTexto = document.getElementById("total");
  if (!contenedor || !totalTexto) return; // si aún no existe el sidebar, salir

  contenedor.innerHTML = "";

  let total = 0;

  window.carrito.forEach(item => {
    total += (parseFloat(item.precio) || 0) * item.cantidad;

    contenedor.innerHTML += `
      <div class="item-carrito">
        <img src="${item.imagen}" class="img-carrito" alt="${item.nombre}">
        <div class="item-detalle">
          <p class="item-nombre">${item.nombre}</p>
          <p class="item-cantidad">Cantidad: ${item.cantidad}</p>
          <p class="item-precio">Precio: $${item.precio}</p>
          <button class="btn-eliminar" data-id="${item.id}">Eliminar</button>
        </div>
      </div>
    `;
  });

  if ((window.carrito || []).length === 0) {
    contenedor.innerHTML = `<p>Tu carrito está vacío</p>`;
  }

  totalTexto.textContent = `Total: $${total.toFixed(2)}`;
}

// agregar acepta elemento <button> con dataset o un objeto {id,nombre,precio,imagen}
function agregarAlCarrito(source) {
  let id, nombre, precio, imagen;

  if (!source) return;

  if (source instanceof Element) {
    id = source.dataset.id;
    nombre = source.dataset.nombre;
    precio = parseFloat(source.dataset.precio);
    imagen = source.dataset.imagen;
  } else if (typeof source === 'object') {
    id = source.id;
    nombre = source.nombre;
    precio = parseFloat(source.precio);
    imagen = source.imagen;
  } else {
    console.warn('agregarAlCarrito: fuente inválida', source);
    return;
  }

  if (!id) {
    console.warn('agregarAlCarrito: id inválido', source);
    return;
  }

  // usar window.carrito (global)
  let productoExistente = (window.carrito || []).find(item => item.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    window.carrito.push({
      id,
      nombre,
      precio,
      imagen,
      cantidad: 1
    });
  }

  guardarCarritoEnStorage();
  actualizarCarrito();
}

// eliminar (delegado)
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('btn-eliminar')) {
    const id = e.target.dataset.id;
    window.carrito = (window.carrito || []).filter(i => i.id !== id);
    guardarCarritoEnStorage();
    actualizarCarrito();
  }
});

// inicializador: registra listeners sin duplicarlos
function inicializarCarrito() {
  if (window.__carrito_iniciado) return;
  window.__carrito_iniciado = true;

  cargarCarritoDesdeStorage();

  const carritoIcon = document.querySelector(".cart-icon");
  const sidebar = document.getElementById("sidebar-carrito");
  const cerrar = document.getElementById("cerrar-carrito");

  // si falta el DOM del header/sidebar, solo inicializamos el render y salimos
  actualizarCarrito();

  if (!carritoIcon || !sidebar || !cerrar) return;

  carritoIcon.addEventListener("click", (ev) => {
    ev.stopPropagation();
    sidebar.classList.toggle("activo");
  });

  cerrar.addEventListener("click", (ev) => {
    ev.stopPropagation();
    sidebar.classList.remove("activo");
  });

  // Delegación para botones "Agregar"
  document.addEventListener("click", (e) => {
    // ignorar si el menú u otros scripts detienen la propagación
    if (!e.target) return;

    // Si el click vino de un boton .btn-agregar
    if (e.target.classList.contains("btn-agregar")) {
      // no permitir que el menú lo bloquee
      e.stopPropagation();
      agregarAlCarrito(e.target);
      return;
    }

    // Si el click es fuera del sidebar y el sidebar está abierto, cerrarlo
    // (no interferir con otros componentes)
    if (sidebar.classList.contains('activo') && !e.target.closest('#sidebar-carrito') && !e.target.closest('.cart-icon')) {
      sidebar.classList.remove('activo');
    }
  });

  // render inicial
  actualizarCarrito();
}

// Exponer funciones globales por si otros scripts las llaman
window.agregarAlCarrito = agregarAlCarrito;
window.actualizarCarrito = actualizarCarrito;
window.inicializarCarrito = inicializarCarrito;

// Si el includeHeader.js llama al cargar el script con onload, ya se ejecutará.
// Pero añadimos fallback:
document.addEventListener('DOMContentLoaded', () => {
  // intentar inicializar pero sin forzar errores si falta header
  try { inicializarCarrito(); } catch (e) { /* ignora */ }
});

document.addEventListener("DOMContentLoaded", () => {
    inicializarCarrito();   // Enlaza los botones del carrito
    actualizarCarrito();    // Reconstruye el contenido visual del carrito
});