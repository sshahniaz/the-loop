import { useState } from "react";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import Form from "../components/sellform/SellForm";
import "../components/sellform/sellForm.scss";
const SellersFormPage = () => {
  return (
    <>
      <h1 className="sellFormTitle"> Sell an Item</h1>
      <Form />
    </>
  );
};

export default SellersFormPage;
