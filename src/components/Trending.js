import React, { useState, useEffect } from "react";

import axios from "axios";
import RandomCard from "./RandomCard";

const Trending = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      //   setRecipes({  });
      console.log("What is repsonse????", response.data.meals);
      setRecipes(response.data.meals);
    };

    search();
  }, []);
  return (
    <div className="container">
      {recipes.map(function (recipe) {
        console.log("what is??", recipe);
        return (
          <RandomCard title={recipe.strMeal} photo={recipe.strMealThumb} />
        );
      })}
    </div>
  );
};

export default Trending;
