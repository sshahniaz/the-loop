import Link from "next/link";
interface MenuItemProps {
  catagory: ({
    name: string;
  } & {
    subCatagory: {
      name: string;
    }[];
  })[];
}

const MenuItem = async ({ catagory }: MenuItemProps) => {
  return (
    <div className="menuItem">
      {catagory.map((menuCats, index) => (
        <span className="heading" key={index}>
          <Link key={index} href={`/categories/${menuCats.name}`}>
            {menuCats.name}
          </Link>
          <ul className="menuLevel3">
            {menuCats.subCatagory.map((subCat, index) => (
              <li key={index}>
                <Link href={`/categories/${subCat.name}`}>{subCat.name}</Link>
              </li>
            ))}
          </ul>
        </span>
      ))}
    </div>
  );
};

export default MenuItem;
