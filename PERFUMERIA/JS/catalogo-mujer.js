document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost/PERFUMERIA/obtener_perfumes.php?categoria=2")
        .then(respuesta => respuesta.json())
        .then(perfumes => {
            const contenedor = document.getElementById("contenedor-perfumes");
            contenedor.innerHTML = ""; 

            perfumes.forEach(perfume => {
                const div = document.createElement("div");
                div.classList.add("tarjeta-perfume");

                div.innerHTML = `
                    <img src="${perfume.imagen}" alt="${perfume.nombre}">
                    <h3>${perfume.nombre}</h3>
                    <p><strong>Marca:</strong> ${perfume.marca}</p>
                    <p><strong>Precio:</strong> $${perfume.precio}</p>
                `;

                contenedor.appendChild(div);
            });
        })
        .catch(error => console.error("Error al obtener perfumes:", error));
});