import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};
//Ts to handle
export default function ({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setproducts(await res.json());
    };
    fetchProducts();
  }, []);

  const item = products.find((p) => p.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex alignitems-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
