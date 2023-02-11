import React, { useState } from "react";

const Header = () => {

  const [word, setWord] = useState("eat")
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode is On </h1>;
  const lightMode = <h1> Light Mo de is on </h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark mode is on");
    } else {
      console.log("Light mode is on");
    }
  }

function handleClicks() {
  setWord("Drinks")
}

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click me</button>
      <h1>{word + " at little Lemon"}</h1>
      <button onClick={handleClicks}>
       Click here
      </button>
    </div>
  );
};

export default Header;
