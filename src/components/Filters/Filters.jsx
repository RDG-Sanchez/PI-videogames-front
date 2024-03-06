// Import Style
import "./Filters.css";

// Import Icons
import { ICONS } from "../../assets/icons/icons";

// Import Hooks & Librarys
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getGenres,
  orderGames,
  filterByGender,
  filterByOrigin,
  filterByRating,
} from "../../redux/actions";

const Filters = ({ setUpdate, update, setCurrentPage }) => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    if (e.target.name === "order") {
      dispatch(orderGames(e.target.value));
      setUpdate(!update);
      setCurrentPage(1);
    } else if (e.target.name === "gender") {
      dispatch(filterByGender(e.target.value));
      setUpdate(!update);
      setCurrentPage(1);
    } else if (e.target.name === "origin") {
      dispatch(filterByOrigin(e.target.value));
      setUpdate(!update);
      setCurrentPage(1);
    } else if (e.target.name === "rating") {
      dispatch(filterByRating(e.target.value));
      setUpdate(!update);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    if (genres.length > 0) {
    } else {
      dispatch(getGenres());
    }
  }, []);
  return (
    <div className="main-filter">
      <select name="order" onChange={handleFilter}>
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
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
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
        <option value="MAJOR">High</option>
        <option value="MINOR">Low</option>
      </select>
    </div>
  );
};

export default Filters;
