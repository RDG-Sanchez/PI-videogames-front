// Import Style
import "./Cards.css";

// Import Librarys
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Card, SearchBar, Loader & Pagination
import { Card, Loader, Pagination } from "../components";
import Filters from "../Filters/Filters";

// Import Actions
import { getGames } from "../../redux/actions";

const Cards = () => {
  const games = useSelector((state) => state.games);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(true);

  const totalGames = games.length;

  const lastIndex = currentPage * gamesPerPage;
  const firstIndex = lastIndex - gamesPerPage;

  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length > 0) {
      null;
    } else {
      dispatch(getGames());
    }

    setCurrentPage(1);
    console.log(games);
  }, []);

  return (
    <div className="cards">
      {!games[0] ? (
        <Loader />
      ) : (
        <div className="main-cards">
          <Filters
            setUpdate={setUpdate}
            update={update}
            setCurrentPage={setCurrentPage}
          />
          <div className="cards-container">
            {games
              .map((game) => <Card game={game} key={game.id} />)
              .slice(firstIndex, lastIndex)}
          </div>
          <Pagination
            gamesPerPage={gamesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalGames={totalGames}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
