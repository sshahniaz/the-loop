import React from "react";
import ImageHover from "../ImageHover";
import AddToWishList from "../wishlist/AddToWishList";
import "../../search/SearchResults.scss";
interface Product {
  id: string;
  name: string;
  price: number;
  colour: string;
  material: string;
  condition: string;
  imageLink: string;
}

const Products = ({ products }: { products: Product[] }) => {
  const handlwWishlistupdate = async () => {
    console.log("wishlist updated");
  };
  return (
    <>
      <div className="pageContainer">
        <div className="searchResultContainer">
          <h2>Products</h2>
          {products.map((product) => (
            <div className="searchResultCard" key={product.id}>
              <ImageHover image={product.imageLink} alt={product.name} />
              <div className="iconFloat">
                <h3 className="productHeading">{product.name}</h3>
                <AddToWishList
                  productId={product.id}
                  onUpdateWishlist={handlwWishlistupdate}
                />
              </div>
              <p>£{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
