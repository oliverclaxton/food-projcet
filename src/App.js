import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import BeInspired from "./components/BeInspired";
import HomePage from "./components/HomePage";
import Breakfast from "./components/Breakfast";
import RecipePage from "./components/RecipePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/recipe/:mealId" component={RecipePage} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/beinspired" component={BeInspired} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
