// Import Style
import "./Detail.css";

// Import Librarys
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Import Actions
import {
  getGamesById,
  clearStateGame,
  getGames,
  clearStateGames,
} from "../../redux/actions";

// Import Loader
import { Loader } from "../components";

// Import Utils
import { functions } from "../../utils/utils";

const Detail = () => {
  const { id } = useParams();
  const game = useSelector((state) => state.game);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    let key = prompt("Enter KEY:");
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/videogames/delete?id=${game.id}&key=${key}`
      );
      dispatch(clearStateGames());
      dispatch(getGames());
      navigate("/home");
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    dispatch(getGamesById(id));
    return () => {
      dispatch(clearStateGame());
    };
  }, []);

  return (
    <div className="detail">
      <div className="main-detail" key={game.id}>
        {!game.name ? (
          <Loader />
        ) : (
          <>
            <img src={game?.background_image} alt="" />
            <div className="detail-overlay">
              <h2>{game?.name}</h2>
              <b>Release</b>
              <p>{functions.convertDate(game.released)}</p>
              <b>Description</b>
              <p>{game?.description_raw}</p>
              <b>Genres</b>
              <p>{game.genres?.map((genre) => genre?.name).join(", ")}</p>
              <b>Platforms</b>
              <p>
                {game.platforms
                  ?.map((platform) => platform.platform?.name)
                  .join(", ")}
              </p>
              <b>Rating</b>
              <p>{game?.rating}</p>
              {game.database ? (
                <button onClick={handleDelete}>Delete</button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
