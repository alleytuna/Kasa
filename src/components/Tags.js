import React from "react";
import "../styles/houseDetails.css";

export default function Tags({ tags }) {
  return (
    <div >
      {tags.map((tag) => {
        return <span className="Tag">{tag}</span>;
      })}
    </div>
  );
}
