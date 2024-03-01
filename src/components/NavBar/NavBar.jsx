// Import Style
import "./NavBar.css";

// Import Icons
import { ICONS } from "../../assets/icons/icons";

// Import Librarys
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <h1>GAMERANGE</h1>
      <div className="nav-buttons">
        <Link className="nav-button" to="/home">
          {ICONS.home}
          Home
        </Link>
        <Link className="nav-button" to="/create">
          {ICONS.create}
          Create
        </Link>
        <Link className="nav-button" to="/about">
          {ICONS.info}
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
