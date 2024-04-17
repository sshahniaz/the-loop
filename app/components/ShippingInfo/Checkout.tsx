import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
interface Product {
  id: string;
  name: string;
  price: number;
}

interface Props {
  products: Product[];
}

const Checkout = ({ products }: Props) => {
  const [basketProducts, setbasketProducts] = useState<Product[]>([]);

  useEffect(() => {
    setbasketProducts(products);
  }, [products]);

  const handleCheckOut = () => {
    // Call the API to create a checkout session

    fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        if (res.url) {
          window.location.href = res.url;
          // console.log(res.url)
        }
      });
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleRemoveProduct = (id: string) => {
    setbasketProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="checkoutCardFlex">
        <div className="checkoutCard">
          <h2>Basket Summary</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className="checkoutItemsFlex">
                  {product.name} - £{product.price.toFixed(2)}
                  <button onClick={() => handleRemoveProduct(product.id)}>
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="checkoutCard">
          <h2>Order Total</h2>
          <p>Order Total: £{totalPrice.toFixed(2)}</p>
          <div className="buttonFlexShipping">
            <button id="checkoutButton" onClick={handleCheckOut}>
              Buy Now
            </button>

            <Link href="/">
              {" "}
              <button id="backButton">Back Home </button>
            </Link>
          </div>
          <hr />
          <p>
            By continuing you agree with the Loops{" "}
            <Link href="/faq"> Terms & Conditions.</Link>
          </p>

          <p>
            Need Help? Contact <Link href="/">Customer Services.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
