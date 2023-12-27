import image from "../../../assets/KITCHEN_2.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text"> Welcome to SJJV Industry! </div>
      <img className="hero-image" alt="Hero Img" src={image} />
    </div>
  );
};

export default Hero;
