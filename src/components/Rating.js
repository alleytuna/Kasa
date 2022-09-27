import React from "react";
import "../styles/houseDetails.css";

import { ReactComponent as Star } from "../assets/Star.svg";

export default function Rating({ rating }) {
  let allStars = [1, 2, 3, 4, 5];
  // fill the array allStars with the component Stars
  return (
    <section className="Stars">
      {allStars.map((star, index) => {
        // fill with colored stars until the array position becomes under or equal to the house's rating
        let color = star <= rating ? "#FF6060" : "#E3E3E3";
        return (
          <Star
            className="SingleStar"
            fill={color}
            key={index}
            alt="One of five stars rating"
          />
        );
      })}
    </section>
  );
}
