import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="position-sticky">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Cake Zone
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              ABOUT US
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              MENU & PRICING
            </Nav.Link>
            <Nav.Link as={NavLink} to="/chefs">
              MASTER CHEFS
            </Nav.Link>
            <NavDropdown title="PAGES" id="pages-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/cart">
              <FaShoppingCart size={20} />
              <span className="cart-count">{cartItemCount}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
