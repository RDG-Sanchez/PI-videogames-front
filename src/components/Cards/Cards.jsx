// Import Style
import "./Cards.css";

// Import Librarys
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Card, SearchBar, Loader & Pagination
import { Card, SearchBar, Loader, Pagination } from "../components";

// Import Actions
import {
  getGames,
  getGenres,
  orderGames,
  filterByGender,
  filterByOrigin,
  filterByRating,
} from "../../redux/actions";

const Cards = () => {
  const games = useSelector((state) => state.games);
  const genres = useSelector((state) => state.genres);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(true);

  const totalGames = games.length;

  const lastIndex = currentPage * gamesPerPage;
  const firstIndex = lastIndex - gamesPerPage;

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderGames(e.target.value));
    setUpdate(!update);
    console.log(games);
  };

  const handleFilter = (e) => {
    if (e.target.name === "order") {
      dispatch(orderGames(e.target.value));
      setUpdate(!update);
    } else if (e.target.name === "gender") {
      dispatch(filterByGender(e.target.value));
      setUpdate(!update);
    } else if (e.target.name === "origin") {
      dispatch(filterByOrigin(e.target.value));
      setUpdate(!update);
    } else if (e.target.name === "rating") {
      dispatch(filterByRating(e.target.value));
      setUpdate(!update);
    }
  };

  useEffect(() => {
    if (games.length > 0) {
    } else {
      dispatch(getGames());
    }
    dispatch(getGenres());
  }, []);

  return (
    <div className="cards">
      {!games[0] ? (
        <Loader />
      ) : (
        <div className="main-cards">
          <SearchBar setCurrentPage={setCurrentPage} />
          <div className="main-filter">
            <select name="order" onChange={handleOrder}>
              <option value="" hidden>
                - Select order -
              </option>
              <option value="ASC">A-Z</option>
              <option value="DES">Z-A</option>
            </select>
            <select name="gender" onChange={handleFilter}>
              <option value="" hidden>
                - Select genre -
              </option>
              {genres.map((genre) => (
                <option value={genre.name}>{genre.name}</option>
              ))}
            </select>
            <select name="origin" onChange={handleFilter}>
              <option value="" hidden>
                - Select origin -
              </option>
              <option value="DB">Database</option>
              <option value="API">API</option>
            </select>
            <select name="rating" onChange={handleFilter}>
              <option value="" hidden>
                - Select rating -
              </option>
              <option value="MAJOR">Major</option>
              <option value="MINOR">Minor</option>
            </select>
          </div>

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
