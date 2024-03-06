// Import Style
import "./NavBar.css";

// Import Librarys
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="main-nav">
      <Link className="nav-title" to="/home">
        <h1>GAMERANGE</h1>
      </Link>
      <div className="nav-elements">
        <Link
          className={pathname === "/home" ? "nav-button active" : "nav-button"}
          to="/home"
        >
          Home
        </Link>
        <Link
          className={
            pathname === "/create" ? "nav-button active" : "nav-button"
          }
          to="/create"
        >
          Create
        </Link>
        <Link
          className={pathname === "/about" ? "nav-button active" : "nav-button"}
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
