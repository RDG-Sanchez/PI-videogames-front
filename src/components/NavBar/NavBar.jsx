// Import Style
import "./NavBar.css";

// Import Librarys
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <h1>GAMERANGE</h1>
      <div className="nav-elements">
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
