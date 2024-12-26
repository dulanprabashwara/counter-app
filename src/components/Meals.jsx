import "../meals.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data, Meals);
        setItems(res.data.Meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="items-container">
      <h1>{itemslist}</h1>
    </div>
  );
};
export default Meals;
