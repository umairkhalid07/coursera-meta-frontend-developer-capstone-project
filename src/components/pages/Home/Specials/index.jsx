// Packages
import { Link } from "react-router-dom";
// Components
import MealCard from "../MealCard";
// Assets
import "./styles.scss";
import food1Image from "../../../../assets/food1.jpeg";
import food2Image from "../../../../assets/food2.jpeg";
import food3Image from "../../../../assets/food3.jpeg";

const meals = [
  {
    name: "Mediterranean Bowl",
    image: food1Image,
    price: "$14.50",
    description: `A fresh mix of crispy greens, bell peppers, kalamata olives, and
      creamy feta cheese, topped with crunchy garlic and herb-seasoned croutons.`,
  },
  {
    name: "Garlic Crostini",
    image: food2Image,
    price: "$6.49",
    description: `Crunchy, toasted bread brushed with garlic and drizzled with
      extra virgin olive oil, finished with a sprinkle of sea salt.`,
  },
  {
    name: "Citrus Tart",
    image: food3Image,
    price: "$6.25",
    description: `A zesty lemon-infused tart with a buttery crust, made using
      a time-honored family recipe for a perfect balance of sweet and tangy.`,
  },
];

const Specials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week's specials!</h2>
        <Link className="button-primary" to="">
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default Specials;
