// Import Style
import "./Landing.css";

// Import IMG
import bg from "../../assets/Landing/8286624.jpg";

// Import Icons
import { ICONS } from "../../assets/icons/icons";

// Import Librarys
import { Link } from "react-router-dom";

const ViewLanding = () => {
  return (
    <div className="landing">
      <div className="main-landing">
        <div className="landing-div-1">
          <img src={bg} alt="" />
          <div className="landing-overlay">
            <h1>GAMERANGE</h1>
            <Link to={"/home"}>{ICONS.enter}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLanding;
