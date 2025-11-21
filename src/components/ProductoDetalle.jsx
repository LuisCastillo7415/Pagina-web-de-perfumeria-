import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function ProductoDetalle() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [perfume, setPerfume] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/perfumeria-api/obtener_perfume.php?id=${id}`)
      .then(res => res.json())
      .then(data => setPerfume(data));
  }, [id]);

  if (!perfume) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="detalle-container">
    <div className="detalle-card">
         <div class="contenedor-volver">
      <button onClick={() => navigate(-1)} className="btn-volver">
        ⬅ Volver
      </button>
      </div>
      <img src={perfume.imagen} alt={perfume.nombre} className="detalle-imagen" />
        <div class="detalle-info">
      <h1>{perfume.nombre}</h1>
      <p><strong>Marca:</strong> {perfume.marca}</p>
      <p><strong>Precio:</strong> {perfume.precio}</p>
      <p><strong>Descripción:</strong> {perfume.descripcion}</p>
      </div>
      
    </div>
   
    </div>
  );
}