import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Selling.scss";

import SellingDisplay from "./SellingDisplay";
import { DeleteItem, fetchProductData } from "@/app/actions/SellingActions";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import SellingListEmpty from "./SellingListEmpty";

interface SellingProps {
  userId: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  imageLink: string[];
}

export default async function SellingComponent({ userId }: SellingProps) {
  const [sellingItems, setSellingItems] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      if (userId) {
        const fetchedProducts = await fetchProductData(userId);
        console.log(fetchedProducts);
        setSellingItems(fetchedProducts);
      }
    };
    getProducts();
  }, []);

  //   if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
  //     onDelete(product.id);
  //   }
  // };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await DeleteItem(productId);

      // Update state
      const updatedProducts = sellingItems.filter(
        (product) => product.id !== productId
      );
      setSellingItems(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="activeListingsDisplay">
      {sellingItems.length === 0 ? (
        <SellingListEmpty />
      ) : (
        <div>
          <h2 className="listingsHeading">Active Listings</h2>
          <ul>
            <SellingDisplay
              products={sellingItems}
              onDelete={handleDeleteProduct}
            />
          </ul>
        </div>
      )}
      <h2>Active Listings</h2>
    </div>
  );
}

// type sellingModel = {
//   products: {
//     name: string;
//     price: number;
//     imageLink: string[];
//   }[];
// };
// const SellingComponent = ({ products }: sellingModel) => {

//   return (
//     <>
//       <div className="sellingContainer">
//         <form action="">
//           {products.map((product, index) => (
//             <div className="sellingComponentContainer">
//               <img src={product.imageLink[0]} alt={product.name} />
//               <input type="text" value={product.name} />
//               <input type="text" value={product.price} />
//               <button type="submit">
//                 <EditIcon />
//               </button>
//               <button type="submit">
//                 <DeleteIcon />
//               </button>
//             </div>
//           ))}
//         </form>
//       </div>

{
  /* <div className="sellingContainer">
        {products.map((product, index) => (
          <div className="sellingComponentContainer" key={index}>
            <img src={product.imageLink[0]} alt={product.name} />
            <div className="sellingInfo">
              <h3 className="sellingHeading">
                {product.name} - £{product.price}
              </h3>
              <div className="chevronFlex">
                <p>
                  {" "}
                  <Link href="#">Revise Product Listing</Link>
                </p>
                <span className="chevron">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              <div className="chevronFlex">
                <p>
                  {" "}
                  <Link href="#">End Product Listing</Link>
                </p>
                <span className="chevron">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
      
            </div>
          </div>
        ))}
      </div> */
}
//     </>
//   );
// };

// export default SellingComponent;
