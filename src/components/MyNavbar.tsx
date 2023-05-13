import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

export default function MyNavbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar bg="white" className="shadow-sm mb-4" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shop App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          </Nav>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{
                width: "3.5rem",
                height: "3.5rem",
                position: "relative",
              }}
              className="rounded-circle"
            >
              <AiOutlineShoppingCart size={30} />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
