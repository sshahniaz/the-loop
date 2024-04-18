import React, { useState } from "react";
import ImageHover from "../ImageHover";
import AddToWishList from "../wishlist/AddToWishList";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import "../../search/SearchResults.scss";
import Link from "next/link";
import getUser from "@/app/actions/GetUserAction";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    email: string;
    password: string | null;
    profileId: string | null;
  } | null>(null);
  const router = useRouter();

  const { isSignedIn, user } = useUser();

  const fetchUser = async () => {
    const userDb = await getUser(user?.primaryEmailAddress?.emailAddress ?? "");
    setCurrentUser(userDb);
  };

  const handlwWishlistupdate = async () => {
    if (isSignedIn) {
      await fetchUser();
    } else {
      router.push("/sign-in");
    }

    console.log("wishlist updated");
  };

  return (
    <div className="pageContainer">
      <div className="searchResultContainer">
        <h2>Products</h2>
        {products.map((product) => (
          <Link key={product.id} href={`../../product/${product.id}`}>
            <div className="searchResultCard" key={product.id}>
              <ImageHover image={product.imageLink} alt={product.name} />
              <div className="iconFloat">
                <h3 className="productHeading">{product.name}</h3>
                {isSignedIn ? (
                  <AddToWishList
                    productId={product.id}
                    userId={currentUser?.id}
                    onUpdateWishlist={handlwWishlistupdate}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </div>
              <p>£{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
