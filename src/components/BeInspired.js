import React from "react";
import Navbar from "./Navbar";
import Trending from "./Trending";
import "./Beinspired.scss";
import "../../src/style/global.scss";

const BeInspired = () => {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      <h1>Be inspired</h1>

      <img
        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        alt=""
      />

      <div>
        <Trending />
      </div>
    </div>
  );
};

export default BeInspired;
