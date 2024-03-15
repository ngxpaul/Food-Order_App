import {currencyFormatter} from "../util/formatting.js";
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
                    <button >ADD TO CART</button>
                </div>
            </article>
        </li>
    )
}