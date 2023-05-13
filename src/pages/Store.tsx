import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export default function Store() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      setproducts(await res.json());
    };
    fetchProducts();
  }, []);
  console.log(products);

  type productprobs = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  };
  return (
    <div className="store p-4 text-center justify-ceontent-center">
      <div className="row gap-4 col-12">
        {products.map((product: productprobs) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
