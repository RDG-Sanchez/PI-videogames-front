// Import Style
import "./About.css";

// Import Image
import videogames from "../../assets/About/videogame.png";

const About = () => {
  return (
    <div className="about">
      <div className="main-about">
        <h2>
          GAMERANGE is a web platform for video game lovers, where you can
          explore all of them, you can also create video games by providing a
          quantity of necessary data.
        </h2>
        <img src={videogames} alt="" />
        Developed by: <b>@RDG-Sanchez</b>
      </div>
    </div>
  );
};

export default About;
