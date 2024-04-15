
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

interface Product {
  id: string;
  name: string;
  price: number;
}

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();

  const availableProducts = checkProducts.data.filter((product: any) => product.active === true);

  return availableProducts;
}

export const POST = async (req: any) => {
  // const { priceId } = req.body;
  // const { user } = req.session;
  // console.log(user);
  const { products } = await req.json();
  const data: Product[] = products;
  // console.log(data);
  let activeProducts = await getActiveProducts();
  // console.log(activeProducts);
  try {
    for (const product of data) {
      const productExists = activeProducts.find((prod: any) => prod.name === product.name);
      
      if (productExists === undefined) {
        const prod = await stripe.products.create({
         name: product.name,
         default_price_data: {
            currency: "GBP",
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    
    console.log("Error creating  new product", error);
    throw error;

  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const productExists = activeProducts.find((prod: any) => prod.name === product.name);

    if (productExists) {
      stripeItems.push({  
        price: productExists?.default_price,
        quantity: 1,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['GB', 'US'],
        },
    payment_method_types: ["card"],
    line_items: stripeItems,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
  });

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   line_items: [
  //     {
  //       price: priceId,
  //       quantity: 1,
  //     },
  //   ],
  //   mode: "payment",
  //   success_url: `${req.headers.origin}/success`,
  //   cancel_url: `${req.headers.origin}/cancel`,
  // });

  return NextResponse.json({ url: session.url });

  // return NextResponse.redirect(session.url, { status: 303 });
}