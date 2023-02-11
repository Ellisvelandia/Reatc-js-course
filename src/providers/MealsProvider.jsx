import React, { createContext, useContext, useState } from "react";

const MealsContext = createContext();

  const todayMeals = ["Baked Beans", "Baked Sweet Potatoe", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todayMeals);
  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);
export default MealsProvider;
