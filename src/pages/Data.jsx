import React from "react";
import { data } from "../data/data";

const Data = () => {
  return (
    <div className="data-grid">
      {data.map((list) => {
        const {description , image , title , price} = list
        const itemtext = `${title} - ${price}`;
        return (
          <ul key={list.id} className="content-list">
            <li>{itemtext}</li> 
            <img src={image} alt="image" />
            <p>{description}</p>
          </ul>
        );
      })}
    </div>
  );
};

export default Data;
