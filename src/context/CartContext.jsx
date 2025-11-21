import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productIndex = cart.findIndex(item => item.idperfume === product.idperfume);

    if (productIndex >= 0) {

      const newCart = structuredClone(cart);
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => setCart([]);

  const removeFromCart = (productId)=>{
     const productIndex = cart.findIndex(item => item.idperfume === productId);
    if (productIndex >= 0) {
      const newCart = structuredClone(cart);
      if (newCart[productIndex].quantity > 1) {
        newCart[productIndex].quantity -= 1;
        setCart(newCart);
      } else {
        newCart.splice(productIndex, 1);
        setCart(newCart);
      }
    }
  };

  const total = cart.reduce((sum, item) => sum + Number(item.precio) * item.quantity, 0);
  

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}