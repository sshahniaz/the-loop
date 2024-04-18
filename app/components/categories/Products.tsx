import React from 'react'


interface Product{
  id: string;
  name: string;
  price: number;
  colour: string;
  material: string;
  condition: string;
  imageLink: string[];
}

const Products = ({ products }: { products: Product[] }) => {

  return (
     <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {/* Display product information here */}
          <p>{product.name} - £{ product.price }</p>
          

        </div>
      ))}
    </div>
  )
}

export default Products