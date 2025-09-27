

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
