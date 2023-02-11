import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter, Header, Main, MealsList, Sidebar } from "./components";
import { About, HomePage } from "./pages";
import MealsProvider from "./providers/MealsProvider";

const App = () => {
  const date = new Date();
  return (
    <div>
      <Header />
      <div>
        <Link to="/home"> Homepage</Link>
        <Link to="/about"> About</Link>
        <Main userName="Ellis" num={5} />
        <Sidebar message={date.toLocaleTimeString()} />
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
