function inicializarCarrito() {
    const carritoIcon = document.querySelector(".cart-icon");
    const sidebar = document.getElementById("sidebar-carrito");
    const cerrar = document.getElementById("cerrar-carrito");

    // Si alguna parte del carrito no existe, detenemos el script
    if (!carritoIcon || !sidebar || !cerrar) {
        return; 
    }

    carritoIcon.addEventListener("click", () => {
        sidebar.classList.toggle("activo");
    });

    cerrar.addEventListener("click", () => {
        sidebar.classList.remove("activo");
    });
}

document.addEventListener("DOMContentLoaded", inicializarCarrito);