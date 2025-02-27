// Packages
import { Link } from "react-router-dom";
// Helpers
import pages from "../../../../utils/pages";
// Assets
import "./styles.scss";
import restaurantImage from "../../../../assets/restaurant.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Pakistan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link className="button-primary" to={pages.bookings.path}>
            Reserve a table
          </Link>
        </div>
        <img className="hero-image" src={restaurantImage} alt="food" />
      </div>
    </section>
  );
};

export default Hero;
