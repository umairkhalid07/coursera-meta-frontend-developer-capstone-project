// Packages
import { Link } from "react-router-dom";
// Assets
import "./styles.scss";

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body">
        <p>{meal.description}</p>
        <Link to="">Order a delivery</Link>
      </div>
    </article>
  );
};

export default MealCard;
