// Import Librarys
import axios from "axios";

// Creating Actions
export const GET_GAMES = "GET_GAMES";
export const CLEAR_STATE_GAMES = "CLEAR_STATE_GAMES";
export const GET_GAMES_BY_ID = "GET_GAMES_BY_ID";
export const CLEAR_STATE_GAME = "CLEAR_STATE_GAME";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const GET_GENRES = "GET_GENRES";
export const ORDER_GAMES = "ORDER_GAMES";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_RATING = "FILTER_BY_RATING";

// Import Helper
import URL_API from "../utils/helpers";

export const getGames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_API}/api/videogames`);
      return dispatch({ type: GET_GAMES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const clearStateGames = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR_STATE_GAMES, payload: [] });
  };
};

export const getGamesById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_API}/api/videogames/id/${id}`);

      return dispatch({ type: GET_GAMES_BY_ID, payload: data });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const clearStateGame = () => {
  return (dispatch) => {
    return dispatch({ type: CLEAR_STATE_GAME, payload: [] });
  };
};

export const searchGames = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${URL_API}/api/videogames/search?name=${name}`
      );
      return dispatch({ type: SEARCH_GAMES, payload: data });
    } catch (error) {
      alert("No se han encontrado videojuegos");
      return dispatch(getGames());
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL_API}/api/genres`);
      return dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderGames = (order) => {
  return (dispatch) => {
    return dispatch({ type: ORDER_GAMES, payload: order });
  };
};

export const filterByGender = (gender) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_GENDER, payload: gender });
  };
};

export const filterByOrigin = (origin) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_ORIGIN, payload: origin });
  };
};

export const filterByRating = (order) => {
  return (dispatch) => {
    return dispatch({ type: FILTER_BY_RATING, payload: order });
  };
};
