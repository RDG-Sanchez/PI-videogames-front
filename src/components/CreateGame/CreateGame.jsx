// Import Style
import "./CreateGame.css";

// Import Librarys & Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Import Actions
import { getGenres, getGames, clearStateGames } from "../../redux/actions";

// Import Utils
import { converters, validators } from "../../utils/utils";
import URL_API from "../../utils/helpers";

// TODO - Desabilitar el boton de "Create" cuando el formulario no sea valido.

const CreateGame = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description_raw: "",
    platforms: [],
    genres: [],
    background_image: "",
    rating: 0,
    released: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: "",
    genres: [],
    image: "",
    rating: 0,
    release: "",
  });

  const [formValid, setFormValid] = useState(false);

  const sendGame = async () => {
    try {
      const convert = converters.convertForm(form);
      const response = await axios.post(
        `${URL_API}/api/videogames/create`,
        convert
      );
      dispatch(clearStateGames());
      dispatch(getGames());
      navigate("/home");
      alert("Videogame created succesfully");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "genres") {
      setForm({ ...form, genres: [...form.genres, e.target.value] });
    } else if (e.target.name === "platforms") {
      setForm({ ...form, platforms: [...form.platforms, e.target.value] });
      console.log(e.target.value);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    if (
      !errors.name &&
      !errors.description &&
      !errors.platforms &&
      !errors.genres &&
      !errors.image &&
      !errors.release &&
      !errors.rating
    ) {
      setFormValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errors.name ||
      errors.description ||
      errors.platforms ||
      errors.genres ||
      errors.image ||
      errors.release ||
      errors.rating
    ) {
      alert("Check the form");
    } else {
      setFormValid(true);
      sendGame();
    }
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className="creategame">
      <div className="main-creategame">
        <form className="creategame-form" onSubmit={handleSubmit}>
          {/* // ! Name */}
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Resident Evil 4, C&C Generals, ect..."
            autoComplete="off"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                name: validators.validName(form.name),
              });
            }}
          />
          <p className={!errors.name ? "valid" : "error"}>
            Error: {errors.name}
          </p>

          {/* // ! Description */}
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            name="description_raw"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                description: validators.validDescription(form.description_raw),
              });
            }}
          />
          <p className={!errors.description ? "valid" : "error"}>
            Error: {errors.description}
          </p>

          {/* // ! Platforms */}
          <label htmlFor="">Platforms</label>
          <select
            name="platforms"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                platforms: validators.validPlatforms(form.platforms),
              });
            }}
          >
            <option value="" defaultValue="" hidden>
              - Select a platforms -
            </option>
            <option value="PC">PC</option>
            <option value="macOS">macOS</option>
            <option value="Linux">Linux</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox Series X/S">Xbox Series X/S</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Nintendo 3DS">Nintendo 3DS</option>
            <option value="NeoGeo">NeoGeo</option>
            <option value="NES">NES</option>
            <option value="SNES">SNES</option>
            <option value="GameCube">GameCube</option>
            <option value="PSP">PSP</option>
            <option value="PS Vita">PS Vita</option>
            <option value="WEB">WEB</option>
          </select>
          <label>Your Platforms</label>
          <p>
            {converters
              .convertForm(form)
              .platforms.map((platform) => platform.platform.name)
              .join(", ")}
          </p>

          <p className={!errors.platforms ? "valid" : "error"}>
            Error: {errors.platforms}
          </p>
          <p
            className="creategame-btn-reset"
            onClick={() => setForm({ ...form, platforms: [] })}
          >
            Reset Platforms
          </p>

          {/* // ! Genres */}
          <label htmlFor="">Genres</label>
          <select
            name="genres"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                genres: validators.validGenres(form.genres),
              });
            }}
          >
            <option value="" defaultValue="" hidden>
              - Select a genres -
            </option>
            {genres.map((genre) => (
              <option value={genre.id}>{genre.name}</option>
            ))}
          </select>
          <p className={!errors.genres.length > 0 ? "valid" : "error"}>
            Error: {errors.genres}
          </p>

          <label>Your Genres</label>

          <p>
            {genres
              .filter((genre) =>
                converters.convertForm(form).genres.includes(genre.id)
              )
              .map((genre) => genre.name)
              .join(", ")}
          </p>
          <p
            className="creategame-btn-reset"
            onClick={() => setForm({ ...form, genres: [] })}
          >
            Reset Genres
          </p>

          {/* // ! Image URL */}
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            name="background_image"
            placeholder="http://imageurl.com/image.png"
            autoComplete="off"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                image: validators.validImage(form.background_image),
              });
            }}
          />
          <p className={!errors.image ? "valid" : "error"}>
            Error: {errors.image}
          </p>

          <div className="creategame-preview-img">
            <label htmlFor="">Preview Image</label>
            <img src={form.background_image} alt="" />
          </div>

          {/* // ! Release Date */}
          <label htmlFor="">Release Date</label>
          <input
            type="date"
            name="released"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                release: validators.validReleaseDate(form.released),
              });
            }}
          />
          <p className={!errors.release ? "valid" : "error"}>
            Error: {errors.release}
          </p>

          {/* // ! Rating */}
          <label htmlFor="">Rating: {form.rating}</label>
          <input
            type="range"
            step={0.1}
            min={1}
            max={5}
            name="rating"
            onChange={handleChange}
            onBlur={() => {
              setErrors({
                ...errors,
                rating: validators.validRating(form.rating),
              });
            }}
          />
          <p className={!errors.rating ? "valid" : "error"}>
            Error: {errors.rating}
          </p>
          <button disabled={!formValid ? "on" : null}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
