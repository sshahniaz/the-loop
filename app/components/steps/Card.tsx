import SvgIcon from "@mui/material/SvgIcon";
import PermMediaIcon from "@mui/icons-material/PermMedia";
// import "./styles.scss";
import Link from "next/link";

// type LinkItem = string | React.ReactElement; // Union type for link item

interface CardProps {
  title: string;
  href: string;
  linkItem?: any; // Optional link item prop (text or icon)
}

const Card: React.FC<CardProps> = ({
  title,
  href,
  linkItem = "Learn More",
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <Link href={href} className="card-link">
        {typeof linkItem === "string" ? (
          linkItem
        ) : (
          <SvgIcon component={linkItem} sx={{ width: 95, height: 95 }} />
        )}
      </Link>
    </div>
  );
};

export default Card;
