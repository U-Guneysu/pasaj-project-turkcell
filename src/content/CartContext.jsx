import { createContext, useContext, useState } from "react";

// Context oluştur
const CartContext = createContext();

// Sağlayıcı bileşen
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Sepete ekle
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Sepetten çıkar 
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Tümünü Kaldır Buttonu Gelecek

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
