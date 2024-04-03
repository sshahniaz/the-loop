import { useState } from "react";
import "./sellform.scss";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import Form from "../components/SellForm";
// import { string } from "zod";

const SellersFormPage = () => {
  return <Form />;
};

export default SellersFormPage;
