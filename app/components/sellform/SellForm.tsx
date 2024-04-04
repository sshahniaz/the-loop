"use client";
import { listItem } from "@/app/actions/actions";
import { useRef } from "react";
import SellButton from "./SellButton";
import { z } from "zod";
import toast from "react-hot-toast";

const ListItemSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Field is required",
    })
    .max(150),
  details: z
    .string()
    .min(50, {
      message: "Please provide more detail",
    })
    .max(500, { message: "Character Limit reached" }),
  condition: z.string().min(1, {
    message: "Field is required",
  }),
  type: z.string().min(1, { message: "Field is required" }),
  category: z.string().min(1, { message: "Field is required" }),
  subCategory: z.string().min(1, { message: "Field is required" }),
  price: z.string().min(1, { message: "Field is required" }),
  colour: z.string().min(1, { message: "Field is required" }),
  material: z.string().min(1, { message: "Field is required" }),
});

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const newListItem = {
      name: formData.get("name"),
      details: formData.get("details"),
      condition: formData.get("condition"),
      type: formData.get("type"),
      category: formData.get("category"),
      subCategory: formData.get("subCategory"),
      price: formData.get("price"),
      colour: formData.get("colour"),
      material: formData.get("material"),
      imageLink: formData.get("image"),
    };

    const result = ListItemSchema.safeParse(newListItem);

    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      });

      toast.error(errorMessage);
      //   console.log(result.error.issues);
      return;
    }
    ref.current?.reset();
    await listItem(formData);
  };

  return (
    <div className="sellersForm">
      <form ref={ref} action={clientAction}>
        {/* form part 1 */}
        <div className="formP1">
          <h3>Description</h3>
          {/* name */}
          <label htmlFor="name">
            Item Name <span className="requiredField">*</span>
          </label>
          <input id="name" name="name" type="text" />
          {/* deatils */}
          <label htmlFor="details">
            Item Description<span className="requiredField">*</span>
          </label>
          <textarea name="details" id="details" cols={30} rows={10}></textarea>
          {/* condition */}
          <label htmlFor="condition">
            Condition<span className="requiredField">*</span>
          </label>
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
          <label htmlFor="type">
            Type of Item<span className="requiredField">*</span>
          </label>
          <select name="type" id="type">
            <option value=""></option>
            <option value="Furniture">Furniture</option>
            <option value="Home-Decor">Home-Decor</option>
            <option value="Lighting">Lighting</option>
          </select>
          {/* category */}
          <label htmlFor="category">
            Item Category<span className="requiredField">*</span>
          </label>
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
          <label htmlFor="subCatagory">
            Item Sub-Category<span className="requiredField">*</span>
          </label>
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
          <label htmlFor="price">
            Price<span className="requiredField">*</span>
          </label>
          <input name="price" id="price" type="text" placeholder="£" />
        </div>
        {/* form part 4 */}
        <div className="formP4">
          <h3>Specifications</h3>
          {/* colour */}
          <label htmlFor="colour">
            Colour<span className="requiredField">*</span>
          </label>
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
          <label htmlFor="material">
            Material<span className="requiredField">*</span>
          </label>
          <select id="material" name="material">
            <option value=""></option>
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
        <div className="formP5">
          <h3>Upload Images</h3>
          {/* <label htmlFor="image">
            Price<span className="requiredField">*</span>
          </label> */}
          <input name="image" id="image" type="file" multiple />
        </div>
        <SellButton />
      </form>
    </div>
  );
}
