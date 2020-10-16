import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./Card.scss";

const Card = (props) => {
  const params = useParams();

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <img className="recipeImage" src={props.photo} alt="" /> <br />
          <Link to={`/recipe/${props.mealId}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
