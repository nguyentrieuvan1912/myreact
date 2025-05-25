import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => (
  <Card className="mb-5" style={{ maxWidth: 400, margin: "auto" }}>
    <Card.Img variant="top" src={product.image} className="imgsp" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>Price: ${product.price}</Card.Text>
      <div className="button-group d-flex justify-content-between">
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View
        </Link>
        <Button variant="success" onClick={() => addToCart(product)}>
          Add
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
