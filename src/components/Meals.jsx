import { useEffect } from "react";
import { useState } from "react";
import MealItems from "./MealItems";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/meals");
     console.log(response); 
      if (!response.ok) {
        //....
      }
      const meal = await response.json();
      console.log(meal)
      setLoadedMeals(meal);
     
    }
    fetchData();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
       <MealItems key={meal.id} meal={meal}></MealItems>
      ))}
    </ul>
  );
}
