// import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "url";
import prisma from "@/prisma/client";
// import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      const url = request.url;
      const parsedUrl = new URL(url, `http://${request.headers.get("host")}`);
      const searchQuery = parsedUrl.searchParams.get("q");
      const queryParams = parse(request.url, true).query;
      if (typeof searchQuery !== "string") {
        throw new Error("invalid request");
      }

      const hardcodedSearchQuery = "test-product";
      const products = await prisma.product.findMany({
        where: {
          OR: [
            {
              name: {
                contains: searchQuery || hardcodedSearchQuery,
                mode: "insensitive",
              },
            },
            {
              catagory: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
            {
              subCatagory: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
            {
              colour: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
            {
              type: {
                contains: searchQuery,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      // console.log("Fetched products:", products);
      return Response.json({ products });
    } catch (error) {
      return Response.json({ message: "not found" }, { status: 500 });
    }
  }

  //   console.log(query);
  //   const url = new URL(request.url);
}
