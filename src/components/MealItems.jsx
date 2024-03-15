import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
export default function MealItems({meal}){
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3 >{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-decription">{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button >ADD TO CART</Button>
                </div>
            </article>
        </li>
    )
}