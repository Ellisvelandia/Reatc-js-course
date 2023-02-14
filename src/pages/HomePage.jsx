import React from "react";
import { Counter, MealsList } from "../components";
import MealsProvider from "../providers/MealsProvider";

const HomePage = () => {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
};

export default HomePage;
