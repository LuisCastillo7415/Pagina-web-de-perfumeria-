console.log("detalle.js cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const idPerfume = params.get("id");

    if (!idPerfume) {
        document.getElementById("detalle-producto").innerHTML =
            "<p>Perfume no encontrado</p>";
        return;
    }

    fetch(`http://localhost/PERFUMERIA/obtener_perfume.php?id=${idPerfume}`)
        .then(res => res.json())
        .then(perfume => {
            const contenedor = document.getElementById("detalle-producto");
            console.log("Perfume recibido:", perfume);

            contenedor.innerHTML = `
                <div class="detalle-card">
                    <img src="${perfume.imagen}" alt="${perfume.nombre}">
                    <div class="detalle-info">
                        <h2>${perfume.nombre}</h2>
                        <p><strong>Marca:</strong> ${perfume.marca}</p>
                        <p><strong>Descripción:</strong> ${perfume.descripcion}</p>
                        <p><strong>Precio:</strong> $${perfume.precio}</p>

                      <button class="btn-agregar"
                                data-id="${perfume.idperfume}"
                                data-nombre="${perfume.nombre}"
                                data-precio="${perfume.precio}"
                                data-imagen="${perfume.imagen}">
                            Agregar al carrito
                      </button>
                    </div>
                </div>
            `;

            // ACTIVAR BOTÓN
            const btn = document.querySelector(".btn-agregar");
            btn.addEventListener("click", () => {
                agregarAlCarrito({
                    id: perfume.id,
                    nombre: perfume.nombre,
                    precio: perfume.precio,
                    imagen: perfume.imagen
                });

                
            });
        })
        .catch(error => {
            console.error("Error al obtener el perfume:", error);
            document.getElementById("detalle-producto").innerHTML =
                "<p>Error al cargar el perfume</p>";
        });
});

// Botón volver
document.addEventListener("DOMContentLoaded", () => {
    const btnVolver = document.getElementById("btn-volver");
    if (btnVolver) {
        btnVolver.addEventListener("click", () => {
            window.history.back();
        });
    }
});