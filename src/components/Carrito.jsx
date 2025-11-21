import React, { useId } from 'react';
import { useCart } from '../hooks/useCart';

export default function Carrito() {
  const cartCheckboxId = useId();
  const {cart} = useCart(); 
  const { addToCart, removeFromCart, clearCart } = useCart();
  

  return (
    <>
 
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <i className="fas fa-shopping-cart cart-icon"></i>
      </label>
      

    
      <input id={cartCheckboxId} type="checkbox" hidden />

  
      <aside className='cart'>
        <button className='clear-cart' onClick={() => clearCart()}>limpiar carrito</button>
        <ul>
            {cart.length === 0 && <p className='anuncio-cart'>Su carrito está vacío</p>}

            {cart.map(item =>(
          <li key={item.idperfume}>
            <img src={item.imagen} alt="" />
            <p>{item.nombre}</p>
            <p>{item.precio}</p>
            <div>
                <button className='btn-lateral izq' onClick={() => removeFromCart(item.idperfume)}><i class="fas fa-minus"></i></button>
                <span>{item.quantity}</span>
                <button className='btn-lateral der' onClick={() => addToCart(item)}><i class="fas fa-plus"></i></button>
              </div>    
          </li>
            ))}
        </ul>
         {cart.length > 0 && (
    <div className="cart-total">
      <strong>Total:</strong> ${cart.reduce((sum, item) => sum + Number(item.precio) * item.quantity, 0)}
    </div>
  )}
         
      </aside>
    </>
  );
}