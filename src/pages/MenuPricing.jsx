import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const MenuPricing = () => {
  const [cakes, setCakes] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const res = await fetch("https://683171ef6205ab0d6c3c5308.mockapi.io/data");
        if (!res.ok) throw new Error("Failed to fetch cake data");
        const data = await res.json();
        setCakes(data);
      } catch (err) {
        console.error("Error loading cake data:", err);
      }
    };

    fetchCakes();
  }, []);

  return (
    <div>
      <div className="menu-header">
        <h2>Menu & Pricing</h2>
        <p>Check out our delicious cakes at affordable prices!</p>
      </div>

      <div className="cake-list">
        {cakes.map(cake => (
          <ProductCard key={cake.id} product={cake} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuPricing;
