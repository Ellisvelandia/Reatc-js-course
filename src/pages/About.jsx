import React from "react";
import react from "../assets/download.png";
const About = () => {
  const randomImageUrl = "https://picsum.photos/400/265";
  return (
    <div>
      <img src={react} alt="react/img" height={200} width={200} />
      <img src={randomImageUrl} alt="random img picsum" />
      <h2>Reac Player example</h2>
    </div>
  );
};

export default About;
