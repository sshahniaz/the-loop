"use client";

import { useEffect, useState } from "react";
import getUser from "../actions/GetUserAction";
import { revalidatePath } from "next/cache";
import Form from "../components/sellform/SellForm";
import { useUser } from "@clerk/nextjs";
import "../components/sellform/sellForm.scss";

interface User {
  id: string;
  email: string;
}

const SellersFormPage = () => {
  const { isSignedIn, user } = useUser();

  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (isSignedIn && user.primaryEmailAddress && userInfo === null) {
      const checkUserId = async () => {
        try {
          const referenceUser = await getUser(
            user.primaryEmailAddress?.emailAddress ?? ""
          );
          if (referenceUser) {
            setUserInfo(referenceUser);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkUserId();
    }
  });
  // console.log(userInfo);
  return (
    <main className="sellFormMain">
      {/* <h1>{userInfo?.id}</h1> */}
      {/* <h1 className="sellFormTitle"> Sell an Item</h1> */}
      <Form user={{ id: userInfo?.id ?? "" }} />
    </main>
  );
};

export default SellersFormPage;
