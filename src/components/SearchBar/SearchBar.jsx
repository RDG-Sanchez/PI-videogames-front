// Import Style
import "./SearchBar.css";

// Import Librarys
import { useDispatch } from "react-redux";

// Import Actions
import { getGames, searchGames, clearStateGames } from "../../redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const input = document.getElementsByClassName("searchbar-input");
    if (!input[0].value.trim()) {
      alert("Please enter a name to search");
    } else {
      dispatch(clearStateGames());
      dispatch(searchGames(input[0].value.trim()));
      setCurrentPage(1);
    }
  };

  const handleReset = () => {
    dispatch(clearStateGames());
    dispatch(getGames());
    setCurrentPage(1);
  };

  return (
    <div className="main-searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search games"
      />
      <button className="searchbar-button-search" onClick={handleSearch}>
        Search
      </button>

      <button className="searchbar-button-reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
