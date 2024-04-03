import Menu from "./Menu";
import prisma from "@/prisma/client";
import Input from "./Input";
import "./Navigation.scss";

export default async function Navigation() {
  const navType = await prisma.nav.findMany({
    select: {
      name: true,
      catagory: true,
    },
  });

  return (
    <>
      <div className="menu">
        <div className="navigationContainer">
          <button id="hamburger">
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
          </button>

          <Input />
          <Menu productTypes={navType} />
        </div>
      </div>
    </>
  );
}
