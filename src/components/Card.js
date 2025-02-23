import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ path, text, project, color, rotation }) => {
  return (
    <Link
      to={path}
      className="card"
      style={{ backgroundColor: color, "--rotation": `${rotation}deg` }}
    >
      
      <p className="card-project">{project}</p>
      <p className="card-text">{text}</p>
    </Link>
  );
};

export default Card;
