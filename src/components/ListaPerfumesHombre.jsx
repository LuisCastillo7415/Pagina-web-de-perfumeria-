import React from 'react'
import { useFetch } from '../hooks/useFetch'; 
import { Link } from 'react-router-dom';
import { useCart } from "../hooks/useCart";

export default function ListaPerfumesHombre() {
   const { addToCart } = useCart();

const {data} = useFetch("http://localhost/perfumeria-api/obtener_perfumes.php?categoria=1")

   return (
      <div  className="grid-perfumes">
        {data?.map((p) =>(
         
          
          <div className="tarjeta-perfume">
          <Link to={`/perfume/${p.idperfume}`} className='link-detalles'  key={p.idperfume}>
            <img src={p.imagen} alt={p.nombre} />
            <h2>{p.nombre}</h2>
            <p>{p.marca}</p>
            <p>{p.precio}</p>
          </Link>
          <div className='add-container'>
        <button className='addtocart' onClick={() => addToCart(p)}> <i class="fas fa-cart-plus"></i> </button>
          </div>
           </div>
      
  
        ))}
      </div>
    )
}
