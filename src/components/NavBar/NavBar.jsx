// Import Style
import "./NavBar.css";

// Import Icons
import { ICONS } from "../../assets/icons/icons";

// Import SearchBar
import { SearchBar } from "../components";

// Import Librarys
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <h1>GAMERANGE</h1>
      <div className="nav-elements">
        <SearchBar />
        <Link className="nav-button" to="/home">
          Home
        </Link>
        <Link className="nav-button" to="/create">
          Create
        </Link>
        <Link className="nav-button" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
