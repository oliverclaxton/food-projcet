import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/beinspired">
        <h1>LETS eat </h1>
      </Link>
    </div>
  );
};

export default HomePage;
