// Import Actions
import {
  GET_GAMES,
  CLEAR_STATE_GAMES,
  GET_GAMES_BY_ID,
  CLEAR_STATE_GAME,
  SEARCH_GAMES,
  CLEAR_STATE_ORIGIN,
  GET_GENRES,
  ORDER_GAMES,
  FILTER_BY_GENRES,
  FILTER_BY_ORIGIN,
  FILTER_BY_RATING,
} from "./actions";

// Create Initial State
const initialState = {
  game: {},
  games: [],
  genres: [],
  origin: [],
  allGames: [],
};

// Create Reducer
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GAMES:
      return { ...state, games: payload, allGames: payload };

    case CLEAR_STATE_GAMES:
      return { ...state, games: payload };

    case GET_GAMES_BY_ID:
      return { ...state, game: payload };

    case CLEAR_STATE_GAME:
      return { ...state, game: payload };

    case SEARCH_GAMES:
      return { ...state, games: payload, allGames: payload };

    case CLEAR_STATE_ORIGIN:
      return { ...state, games: payload, allGames: payload, origin: payload };

    case GET_GENRES:
      return { ...state, genres: payload };

    case ORDER_GAMES:
      const order = payload;
      if (order === "ASC") {
        const sortGamesAZ = state.games.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, games: sortGamesAZ };
      } else if (order === "DES") {
        return {
          ...state,
          games: state.games.sort((a, b) => b.name.localeCompare(a.name)),
        };
      }

    case FILTER_BY_GENRES:
      const genre = payload;

      if (state.origin.length === 0) {
        const filteredGames = state.allGames.filter((game) =>
          game.genres.map((genre) => genre.name).includes(genre)
        );

        if (filteredGames.length === 0) {
          alert("Nothing here 👀");
          return { ...state, games: state.allGames };
        } else {
          return { ...state, games: filteredGames };
        }
      } else if (state.origin.length > 0) {
        const filteredGames = state.origin.filter((game) =>
          game.genres.map((genre) => genre.name).includes(genre)
        );

        if (filteredGames.length === 0) {
          alert("Nothing here 👀");
          return { ...state, games: state.origin };
        } else {
          return { ...state, games: filteredGames };
        }
      }

    case FILTER_BY_ORIGIN:
      const origin = payload;
      if (origin === "DB") {
        const originGamesDB = state.allGames.filter((game) => game.database);
        if (originGamesDB.length === 0) {
          alert("Nothing here 🤔");
          return { ...state, games: state.allGames };
        } else {
          return { ...state, games: originGamesDB, origin: originGamesDB };
        }
      } else if (origin === "API") {
        const originGamesAPI = state.allGames.filter((game) => !game.database);
        if (originGamesAPI.length === 0) {
          alert("Nothing here 🤔");
          return { ...state, games: state.allGames };
        } else {
          return { ...state, games: originGamesAPI, origin: originGamesAPI };
        }
      }

    case FILTER_BY_RATING:
      const rating = payload;
      if (rating === "LOW") {
        const ratingGamesMin = state.games.sort((a, b) => a.rating - b.rating);
        return { ...state, games: ratingGamesMin };
      } else if (rating === "HIGH") {
        const ratingGamesMaj = state.games.sort((a, b) => b.rating - a.rating);
        return { ...state, games: ratingGamesMaj };
      }

    default:
      return state;
  }
};

export default rootReducer;
