

document.addEventListener("DOMContentLoaded", () => {
  const submenu = document.querySelector(".submenu");
  const catalogoLink = document.querySelector(".catalogo-link");

  if (!submenu || !catalogoLink) {
    console.warn("menu.js: no se encontró .submenu o .catalogo-link en el DOM.");
    return;
  }


  const currentPath = decodeURI(window.location.pathname).toLowerCase();

 
  if (currentPath.includes("catalogo-mujer") ||
      currentPath.includes("catalogo-hombre") ||
      currentPath.includes("catalogo-unisex")) {
    submenu.classList.add("show");
  }

 
  catalogoLink.addEventListener("click", (e) => {
    e.preventDefault();      
    e.stopPropagation();   
    submenu.classList.toggle("show");
  });

  submenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    submenu.classList.remove("show");
  });


  const subLinks = Array.from(submenu.querySelectorAll("a"));
  subLinks.forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href && currentPath.includes(href.replace("../", "").replace("./", ""))) {
      a.classList.add("active-sub"); 
    }
  });

  console.debug("menu.js: inicializado. currentPath=", currentPath);
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost/PERFUMERIA/obtener_perfumes.php")
        .then(respuesta => respuesta.json())
        .then(perfumes => {
            const contenedor = document.getElementById("contenedor-perfumes");

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