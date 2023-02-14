import React from "react";
import react from "../assets/download.png";
import ReactPlayer from "react-player";

const About = () => {
  const randomImageUrl = "https://picsum.photos/400/265";
  const vidUrl = "https://fb.watch/iCBqfLtGBt/";
  console.log("object");
  
  return (
    <div>
      <img src={react} alt="react/img" height={200} width={200} />
      <img src={randomImageUrl} alt="random img picsum" />
      <h2>Reac Player example</h2>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />
    </div>
  );
};

export default About;
