import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/shoppingCartContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "../components/CartItem";
import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type shoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: shoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setproducts(await res.json());
    };
    fetchProducts();
  }, []);

  // console.log(cartItems);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                console.log(item);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
