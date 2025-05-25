import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) =>
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      return exist
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });

  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, quantity) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
