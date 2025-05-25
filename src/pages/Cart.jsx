import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ListGroup, Button } from "react-bootstrap";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const totalPrice = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="menu-header">
          <h2>Shopping Cart</h2>
        </div>
        <p className="empty-cart-message">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="menu-header">
        <h2>Shopping Cart</h2>
      </div>

      <ListGroup>
        {cart.map(({ id, name, image, price, quantity }) => (
          <ListGroup.Item key={id} className="d-flex align-items-center">
            <img
              src={image}
              alt={name}
              style={{ width: 80, height: 80, marginRight: 15, objectFit: "cover" }}
            />
            <div className="flex-grow-1">
              <h5>{name}</h5>
              <p>Price: ${price}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => updateQuantity(id, quantity - 1)}
                disabled={quantity <= 1}
              >-</Button>
              <span className="mx-2">{quantity}</span>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => updateQuantity(id, quantity + 1)}
              >+</Button>
              <Button
                variant="danger"
                size="sm"
                className="ms-2"
                onClick={() => removeItem(id)}
              >Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="text-end mt-3">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
