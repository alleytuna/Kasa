import React from "react";
import "../styles/houseDetails.css";

import { ReactComponent as Star } from "../assets/Star.svg";

export default function Rating({ rating }) {
  let allStars = [1, 2, 3, 4, 5];

  return (
    <div className="Stars">
      {allStars.map((star) => {
        let color = star <= rating ? "#FF6060" : "#E3E3E3";
        return <Star className="SingleStar" fill={color} key={star} alt="star icon" />;
      })}
    </div>
  );
}
