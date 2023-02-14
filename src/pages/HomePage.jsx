import React, { useState } from "react";
import { Counter, MealsList } from "../components";
import MealsProvider from "../providers/MealsProvider";

const HomePage = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert(
        "Please provider a comment explaining why the experience was poor."
      );
      return;
    }
    console.log("Form submitted!");
    setComment("");
    setScore("10");
  };
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback form</h2>
            <div className="field">
              <label htmlFor="">Score: {score}✨</label>
              <input
                type="range"
                min="0"
                max="10"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="">Comment:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
