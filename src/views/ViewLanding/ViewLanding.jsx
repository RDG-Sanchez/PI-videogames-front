// Import Style
import "./Landing.css";

// Import IMG
import bg from "../../assets/Landing/bg.webp";

// Import Librarys
import { Link } from "react-router-dom";

const ViewLanding = () => {
  return (
    <div className="main-landing">
      <h1 className="landing-title">GAMERANGE</h1>
      <Link className="landing-button" to="/home">
        Enter
      </Link>
      <img src={bg} alt="" />
    </div>
  );
};

export default ViewLanding;
