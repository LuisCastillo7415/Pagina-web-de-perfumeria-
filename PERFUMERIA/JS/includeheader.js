document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-placeholder");

  fetch("../COMPONENTES/header.html")
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el header:", error));
});