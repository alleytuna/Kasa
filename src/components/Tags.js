import React from "react";
import "../styles/houseDetails.css";

export default function Tags({ tags }) {
  return (
    // dissociate all tags to style them individualy and display flex
    <section className="AllTags">
      {tags.map((tag, index) => {
        return (
          <section key={index} className="Tag">
            {tag}
          </section>
        );
      })}
    </section>
  );
}
