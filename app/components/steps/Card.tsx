// import { Icon } from "@mui/material";
import "./styles.css";

type LinkItem = string | React.ReactElement; // Union type for link item

interface CardProps {
    title: string;
    href: string;
    linkItem?: LinkItem; // Optional link item prop (text or icon)
  }
  
  const Card: React.FC<CardProps> = ({ title, href, linkItem = "Learn More" }) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <a href={href} className="card-link">
        {typeof linkItem === 'string' ? linkItem : linkItem} {/* Render based on type */}
        </a>
      </div>
    );
  };

  export default Card;