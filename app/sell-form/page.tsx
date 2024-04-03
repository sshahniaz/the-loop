import { useState } from "react";
import "./sellform.scss";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
// import { string } from "zod";

interface ProductData {
  name: string;
  details: string;
  condition: string;
  type: string;
  category: string;
  subCategory: string;
  price: number;
  colour: string;
  material: string;
}
const SellersFormPage = () => {
  async function listItem(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const details = formData.get("details");
    const condition = formData.get("condition");
    const type = formData.get("type");
    const category = formData.get("category");
    const subCategory = formData.get("subCategory");
    const price = formData.get("price");
    const colour = formData.get("colour");
    const material = formData.get("material");

    const product = await prisma.product.create({
      data: {
        name: name as string,
        details: details as string,
        price: Number(formData.get("price")) as number,
        discount: 0,
        imageLink: [
          "/assets/stock-photos/lighting/ceilinglight1.png",
          "/assets/stock-photos/lighting/ceilinglight1.png",
        ],

        colour: colour as string,
        material: material as string,
        type: type as string,
        catagory: category as string,
        subCatagory: subCategory as string,
        sale: 0,
        condition: condition as string,
        owner: {
          connect: {
            id: "65faf8493a25aae6e6aedda2",
          },
        },
      },
    });

    revalidatePath("/sell-form");

    console.log("data:", formData);
  }

  return (
    <div className="sellersForm">
      <form action={listItem}>
        {/* form part 1 */}
        <div className="formP1">
          <h3>Description</h3>
          {/* name */}
          <label htmlFor="name">Item Name</label>
          <input id="name" name="name" type="text" />
          {/* deatils */}
          <label htmlFor="details">Item Description</label>
          <textarea name="details" id="details" cols={30} rows={10}></textarea>
          {/* condition */}
          <label htmlFor="condition">Condition</label>
          <select name="condition" id="condition">
            <option value=""></option>
            <option value="New">New</option>
            <option value="Used-Good">Used-Good</option>
            <option value="Used-Fair">Used-Fair</option>
          </select>
        </div>
        {/* form part 2 */}

        <div className="formP2">
          <h3>Category</h3>
          {/* item type */}
          <label htmlFor="type">Type of Item</label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="Furniture">Furniture</option>
            <option value="Home-Decor">Home-Decor</option>
            <option value="Lighting">Lighting</option>
          </select>
          {/* category */}
          <label htmlFor="category">Item Category</label>
          <select name="category" id="category">
            <option value=""></option>
            <option value="Seating">Seating</option>
            <option value="Tables">Tables</option>
            <option value="Storage">Storage</option>
            <option value="Accessories">Accessories</option>
            <option value="Mirrors">Mirrors</option>
            <option value="Art">Art</option>
            <option value="Lamps">Lamps</option>
            <option value="Ceiling Lights">Ceiling Lights</option>
          </select>

          {/* subcategory */}
          <label htmlFor="subCatagory">Item Sub-Category</label>
          <select name="subCategory" id="subCategory">
            <option value=""></option>
            <option value="Sofas">Sofas</option>
            <option value="Armchairs">Armchairs</option>
            <option value="Dining Chairs">Dining Chairs</option>
            <option value="Stools">Stools</option>
            <option value="Coffee Tables">Coffee Tables</option>
            <option value="Dressing Tables">Dressing Tables</option>
            <option value="Dining Tables">Dining Tables</option>
            <option value="Side Tables">Side Tables</option>
            <option value="Sideboards">Sideboards</option>
            <option value="Cabinets">Cabinets</option>
            <option value="Chest of Drawers">Chest of Drawers</option>
            <option value="Candle Holders">Candle Holders</option>
            <option value="Clocks">Clocks</option>
            <option value="Vases">Vases</option>
            <option value="Picture Frames">Picture Frames</option>
            <option value="Floor Mirrors">Floor Mirrors</option>
            <option value="Wall Mirrors">Wall Mirrors</option>
            <option value="Sculptures">Sculptures</option>
            <option value="Posters">Posters</option>
            <option value="Paintings">Paintings</option>
            <option value="Floor Lamps">Floor Lamps</option>
            <option value="Table Lamps">Table Lamps</option>
            <option value="Sconces">Sconces</option>
            <option value="Lamp Bases">Lamp Bases</option>
            <option value="Lamp Shades">Lamp Shades</option>
            <option value="Ceiling Shades">Ceiling Shades</option>
            <option value="Chandeliers">Chandeliers</option>
            <option value="Pendants">Pendants</option>
          </select>
        </div>
        {/* form part 3 */}
        {/* price */}
        <div className="formP3">
          <h3>Price</h3>
          <label htmlFor="price">Price</label>
          <input name="price" id="price" type="text" />
        </div>
        {/* form part 4 */}
        <div className="formP4">
          <h3>Specifications</h3>
          {/* colour */}
          <label htmlFor="colour">Colour</label>
          <select id="colour" name="colour">
            <option value=""></option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="cyan">Cyan</option>
            <option value="magenta">Magenta</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="brown">Brown</option>
            <option value="navy">Navy</option>
            <option value="teal">Teal</option>
            <option value="maroon">Maroon</option>
            <option value="olive">Olive</option>
            <option value="lime">Lime</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="turquoise">Turquoise</option>
            <option value="salmon">Salmon</option>
            <option value="ivory">Ivory</option>
            <option value="beige">Beige</option>
            <option value="coral">Coral</option>
            <option value="tan">Tan</option>
            <option value="plum">Plum</option>
            <option value="powderblue">Powder Blue</option>
            <option value="mistyrose">Misty Rose</option>
            <option value="limegreen">Lime Green</option>
            <option value="orangered">Orange Red</option>
            <option value="palegreen">Pale Green</option>
            <option value="skyblue">Sky Blue</option>
          </select>
          {/* material */}
          <label htmlFor="material">Material</label>
          <select id="material" name="material">
            <option value="wood">Wood</option>
            <option value="metal">Metal</option>
            <option value="plastic">Plastic</option>
            <option value="leather">Leather</option>
            <option value="fabric">Fabric</option>
            <option value="glass">Glass</option>
            <option value="stone">Stone</option>
            <option value="bamboo">Bamboo</option>
            <option value="rattan">Rattan</option>
            <option value="wicker">Wicker</option>
            <option value="ceramic">Ceramic</option>
            <option value="vinyl">Vinyl</option>
            <option value="fiber">Fiber</option>
            <option value="linen">Linen</option>
            <option value="suede">Suede</option>
            <option value="microfiber">Microfiber</option>
            <option value="silk">Silk</option>
            <option value="velvet">Velvet</option>
            <option value="canvas">Canvas</option>
            <option value="polyester">Polyester</option>
            <option value="nylon">Nylon</option>
            <option value="polypropylene">Polypropylene</option>
            <option value="jute">Jute</option>
            <option value="cotton">Cotton</option>
            <option value="rubber">Rubber</option>
            <option value="latex">Latex</option>
            <option value="resin">Resin</option>
            <option value="aluminum">Aluminum</option>
            <option value="steel">Steel</option>
            <option value="brass">Brass</option>
            <option value="bronze">Bronze</option>
            <option value="copper">Copper</option>
            <option value="iron">Iron</option>
            <option value="stainless steel">Stainless Steel</option>
            <option value="nickel">Nickel</option>
            <option value="chrome">Chrome</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="titanium">Titanium</option>
            <option value="acrylic">Acrylic</option>
            <option value="PVC">PVC</option>
            <option value="fiberglass">Fiberglass</option>
            <option value="stone">Stone</option>
            <option value="granite">Granite</option>
            <option value="marble">Marble</option>
            <option value="quartz">Quartz</option>
            <option value="porcelain">Porcelain</option>
            <option value="terracotta">Terracotta</option>
            <option value="brick">Brick</option>
            <option value="concrete">Concrete</option>
            <option value="clay">Clay</option>
            <option value="gypsum">Gypsum</option>
            <option value="plywood">Plywood</option>
            <option value="MDF">MDF </option>
            <option value="chipboard">Chipboard</option>
            <option value="laminates">Laminates</option>
            <option value="veneer">Veneer</option>
            <option value="hardwood">Hardwood</option>
            <option value="softwood">Softwood</option>
          </select>
        </div>
        <button type="submit">Sell Item</button>
      </form>
    </div>
  );
};

export default SellersFormPage;
