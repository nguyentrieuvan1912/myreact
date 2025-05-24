import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const url = `https://683171ef6205ab0d6c3c5308.mockapi.io/data/${id}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error loading product data:", error));
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h2>Chi tiết sản phẩm: </h2>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
