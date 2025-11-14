
document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost/PERFUMERIA/obtener_perfumes.php")
        .then(respuesta => respuesta.json())
        .then(perfumes => {
            const contenedor = document.getElementById("contenedor-perfumes");

            perfumes.forEach(perfume => {
                const div = document.createElement("div");
                div.classList.add("tarjeta-perfume");

                div.innerHTML = `
                   <a href="/perfumeria/componentes/detalle.html?id=${perfume.idperfume}" class="link-producto">
                    <img src="${perfume.imagen}" alt="${perfume.nombre}">
                    <h3>${perfume.nombre}</h3>
                    <p><strong>Marca:</strong> ${perfume.marca}</p>
                    <p><strong>Precio:</strong> $${perfume.precio}</p>
                    </a>
                `;

                contenedor.appendChild(div);
            });
        })
        .catch(error => console.error("Error al obtener perfumes:", error));
});