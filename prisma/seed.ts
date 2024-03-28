// This seed file populates your database with sample data

// Import Prisma Client
//If needed
//RUN : npx prisma db seed 
//Fow insturctions at :https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed Customers
    // const customer1 = await prisma.customer.create({
    //   data: {
    //     email: 'customer1@example.com',
    //     password: 'password1',
    //   },
    // });

    // // Seed Profile
    // const profile1 = await prisma.profile.create({
    //   data: {
    //     active: true,
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     stars: 5,
    //     address: '123 Main St',
    //     cardDetails: {
    //       create: {
    //         name: 'John Doe',
    //         cardNumber: '1234567890123456',
    //         expiryDate: new Date(),
    //         billingAddress: '123 Main St',
    //         cvv: '123',
    //       },
    //     },
    //     deliveryAddress: '123 Main St',
    //     wishlist: [],
    //     marketing: true,
    //     customerId: customer1.id,
    //   },
    // });

    // // Seed Product
    // const product1 = await prisma.product.create({
    //   data: {
    //     name: 'Product 1',
    //     details: 'Product 1 details',
    //     ownerId: customer1.id,
    //     price: 100,
    //     discount: 10,
    //     imageLink: ['image1.jpg', 'image2.jpg'],
    //     colour: 'Red',
    //     material: 'Cotton',
    //     type:'Fashion',
    //     catagory: 'Clothing',
    //     subCatagory: 'Shirts',
    //     sale: 10,
    //     condition: 'New',
    //   },
    // });

    // // Seed Transaction
    // const transaction1 = await prisma.transaction.create({
    //   data: {
    //     customerId: customer1.id,
    //     products: {
    //       connect: [{ id: product1.id }],
    //     },
    //     quantity: [1],
    //     price: [100],
    //     totalPrice: 100,
    //     deliveryAddress: '123 Main St',
    //     transactionStatus: 'Completed',
    //   },
    // });

    // // Seed Delivery
    // const delivery1 = await prisma.delivery.create({
    //   data: {
    //     transactionId: transaction1.id,
    //     status: true,
    //     estimatedDate: new Date(),
    //     deliveryDate: new Date(),
    //     sent: true,
    //     received: true,
    //   },
    // });

    //Seed Nav

    const navBar = await prisma.nav.createMany({
      data: [
        {
          name: "Furniture",
          catagory: [
            {
              name: "Seating",
              subCatagory: [
                { name: "Sofas"}, {name:"Armchairs"}, {name:"Dining Chairs"}, {name:"Stools"}
              ]
            }, { name: "Tables",
              subCatagory: [
                { name: "Coffee Tables"}, {name:"Dressing Tables"}, {name:"Dining Tables"}, {name:"Side Tables"}
              ] }, { name: "Storage",
              subCatagory: [
                { name: "Sideboards"}, {name:"Cabinets"}, {name:"Chest of Drawers"}
              ] }
          ]

        },{name: "Home Decor",
          catagory: [
            {
              name: "Accessories",
              subCatagory: [
                { name: "Candle Holders"}, {name:"Clocks"}, {name:"Vases"}, {name:"Picture Frames"}
              ]
            }, { name: "Mirrors",
              subCatagory: [
                { name: "Floor Mirrors"}, {name:"Wall Mirrors"}
              ] }, { name: "Art",
              subCatagory: [
                { name: "Sculptures"}, {name:"Posters"}, {name:"Paintings"}
              ] }
          ]},{name: "Lighting",
          catagory: [
            {
              name: "Lamps",
              subCatagory: [
                { name: "Floor Lamps"}, {name:"Table Lamps"}, {name:"Sconces"}, {name:"Lamp Bases"}, {name: "Lamp Shades"}
              ]
            }, { name: "Ceiling Lights",
              subCatagory: [
                { name: "Ceiling Shades"}, {name:"Chandeliers"}, {name:"Pendants"}
              ] }
          ]}
      ]
    });

    console.log('Seed data created successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
