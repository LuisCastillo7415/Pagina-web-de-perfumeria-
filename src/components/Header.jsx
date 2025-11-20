import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header className="header-container">
      
      <div className="logo-container">
        <Link to="/">
          <img src="/IMAGENES/PORTADA.png" alt="Logo_empresa" />
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="buscar perfume..."
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="right-elements">
        <i className="fas fa-shopping-cart cart-icon"></i>
        <button className="customize-button">PERSONALIZA TU COMPRA</button>
      </div>

    </header>
  )
}
