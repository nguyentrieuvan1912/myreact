import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://683171ef6205ab0d6c3c5308.mockapi.io/data");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <img src="../src/images/banner.jpg" alt="Banner" className="banner w-100" />

      <h2 className="text-center my-4">EXPLORE OUR CAKES</h2>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
