import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="barra">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/fragancias">Fragancias</Link></li>

        <li className="menu-catalogo">
          <span className="catalogo-link" onClick={() => setOpen(!open)}>
            Catálogos
          </span>

          <ul className={`submenu ${open ? "open" : ""}`}>
            <li><Link to="/catalogo/mujer">Mujer</Link></li>
            <li><Link to="/catalogo/hombre">Hombre</Link></li>
            <li><Link to="/catalogo/unisex">Unisex</Link></li>
          </ul>
        </li>

        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}