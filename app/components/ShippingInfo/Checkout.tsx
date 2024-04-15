import React, {useState, useEffect } from 'react'

interface Product {
  id: string;
  name: string;
  price: number;
}

interface Props {
  products: Product[];
} 



const Checkout = ({ products }: Props) => {
  const [ basketProducts, setbasketProducts ] = useState<Product[]>([])
  
  useEffect(() => {
    setbasketProducts(products)
  }, [products])

  const handleCheckOut = () => {
    // Call the API to create a checkout session
    
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        if (res.url) { 
          window.location.href = res.url
          // console.log(res.url)
        }
      })
  }
  
  const totalPrice = products.reduce((total, product) => total + product.price, 0)

  const handleRemoveProduct = (id: string) => {
    setbasketProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - £{product.price.toFixed(2)}
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: £{totalPrice.toFixed(2)}</p>

      <button onClick={handleCheckOut}>Buy Now</button>
    </div>
  )
}

export default Checkout