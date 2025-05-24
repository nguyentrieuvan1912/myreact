import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const MenuPricing = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const url = "https://683171ef6205ab0d6c3c5308.mockapi.io/data";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cake data");
        }
        return response.json();
      })
      .then((data) => setCakes(data))
      .catch((error) => console.error("Error loading cake data:", error));
  }, []);

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div>
      <div className="menu-header">
        <h2>Menu & Pricing</h2>
        <p>Check out our delicious cakes at affordable prices!</p>
      </div>
      <div className="cake-list">
        {cakes.map((cake) => (
          <ProductCard key={cake.id} product={cake} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuPricing;
