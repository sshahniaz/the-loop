import axios from "axios";
import React from "react";
import useSWR from "swr";
import { Product } from "@prisma/client";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const { data, error } = useSWR<any>("/api/product", fetcher);

const OthersBoughtProduct = () => {
  if (error) return <div>Error fetching</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="productSmallFLex">
      <h2>Users Bought Next </h2>
      {data.map((product: Product) => (
        <div className="othersFlex">
          <div className="images">
            <img src={product.imageLink}></img>
          </div>
          <div className="othersInfoFlex">
            <div className="othersDetailsFlex">
              <h2>{product.name}</h2>
              <h3>£{product.price}</h3>
              <p>{product.details}</p>
            </div>
            <AddToWishList />
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default OthersBoughtProduct;
