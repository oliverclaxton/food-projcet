import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipePage = () => {
  const [recipeDetails, setrecipeDetails] = useState([{}]);
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
      );
      console.log("what is response:", response.data.meals);
      setrecipeDetails(response.data.meals);
    }

    fetchDetails();
  }, [params.mealId]);

  //   console.log("what is params ", params.mealId);

  console.log("Recipe mealsd", recipeDetails[0].idMeal);

  return (
    <div className="container">
      <h1>{recipeDetails[0].strMeal}</h1>
      <img src={recipeDetails[0].strMealThumb} alt="" />
      <p>{recipeDetails[0].strInstructions}</p>
      <a href={recipeDetails[0].strYoutube}>
        Click the link to see instructions:
      </a>
    </div>
  );
};

export default RecipePage;
