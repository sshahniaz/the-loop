import prisma from "@/prisma/client";

import { NextResponse } from "next/server";

// export default function handler(req: Request, res: Response) {
//   const url = new URL(req.url, );

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      // get the customerId from the url
      const url = new URL(request.url, `http://${request.headers.get("host")}`);
      // console.log(url);
      const { pathname } = url;
      const customerId = pathname.split("/").slice(-1)[0];
      // const customerId = "65faf8493a25aae6e6aedda3";
      // const parsedUrl = new URL(url, 'http://localhost:3000');
      // const userId = parsedUrl.searchParams.get()
      // console.log(customerId);
      const products = await prisma.product.findMany({
        where: {
          ownerId: customerId,
        },
      });
      // console.log(products);
      // may need to use Response instead of NextResponse
      return NextResponse.json(products);
    } catch (error) {
      return NextResponse.json({ error: "Error fetching data" });
    }
  }
}