import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";

type productProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  id: number;
};

export default function ProductItem({
  image,
  title,
  description,
  price,
  id,
}: productProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const cartQuantity = getItemQuantity(id);
  console.log(cartQuantity);

  function truncate(string: string, n: number) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Card className="col-sm-12" style={{ width: "18rem" }}>
      <Card.Img style={{ height: "250px" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-start">{truncate(title, 50)}</Card.Title>

        <Card.Text className="text-start">
          {truncate(description, 150)}
        </Card.Text>
        <Card.Title className="d-flex align-items-center justify-content-between">
          <span className="fs-2">Price</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {cartQuantity === 0 ? (
          <Button
            className="align-self-start px-5"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to Cart
          </Button>
        ) : (
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="productActions d-flex justify-content-center align-items-center gap-2">
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span>{cartQuantity} in cart</span>
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button variant="danger" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
