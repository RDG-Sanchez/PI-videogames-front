// Import Librarys & Hooks
import { Link } from "react-router-dom";

// Import Style
import "./Card.css";

const Card = ({ game }) => {
  return (
    <>
      {Object.keys(game).length == 0 ? (
        <p>Loading..</p>
      ) : (
        <div className="main-card">
          <img className="card-img" src={game?.background_image} alt="" />
          <div className="main-information">
            <Link className="card-title" to={`/detail/${game?.id}`}>
              {game.name}
            </Link>
            <div className="card-information">
              <p className="card-genre">Genre:</p>
              <p className="card-genres">{game?.genres[0]?.name}</p>
              <p className="card-genre">Rating:</p>
              <p className="card-ratings">{game?.rating}</p>
            </div>
            <p className="card-fromBy">{game.database ? "DB" : "API"}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
