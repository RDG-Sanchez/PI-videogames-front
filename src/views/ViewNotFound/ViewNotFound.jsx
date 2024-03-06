// Import Style
import "./ViewNotFound.css";

// Import Librarys
import { Link } from "react-router-dom";

const ViewNotFound = () => {
  return (
    <div className="not-found">
      <div className="main-not-found">
        <h1>Page Not Found 🥸</h1>
        <h2>
          I think you have entered a site that we do not know, we have searched
          everywhere but we did not find anything, go back to the beginning,
          your games miss you ☹️
        </h2>
        <Link className="not-fount-back-button" to="/home">
          I want to go with my games 🥰
        </Link>
      </div>
    </div>
  );
};

export default ViewNotFound;
