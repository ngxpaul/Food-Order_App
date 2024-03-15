import { useEffect } from "react";
import { useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/meals");
      
      if (!response.ok) {
        //....
      }
      const meal = await response.json();
      setLoadedMeals(meal);
      console.log(loadedMeals);
    }
    fetchData();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
