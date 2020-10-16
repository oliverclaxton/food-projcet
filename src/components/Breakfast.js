import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Breakfast.scss";

const Breakfast = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`
      );
      //   setRecipes({  });
      console.log("What is repsonse????", response.data.meals);
      setRecipes(response.data.meals);
    };

    search();
  }, []);

  return (
    <div className="container">
      <h1>Breakfast</h1>
      {recipes.map(function (recipe) {
        console.log("what is??", recipe);
        return (
          <Card
            title={recipe.strMeal}
            photo={recipe.strMealThumb}
            mealId={recipe.idMeal}
          />
        );
      })}
    </div>
  );
};

export default Breakfast;

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast
