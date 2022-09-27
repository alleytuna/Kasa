import { useState } from "react";
import "../styles/collapsible.css";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowUp from "../assets/ArrowUp.svg";

export const Collapsible = ({ title, content, className }) => {
  // create a state to indicate if the collapse bar is opened so the arrow can change from down to up
  const [open, setOPen] = useState(false);
  const toggleToOpenOrClose = () => {
    setOPen(!open);
  };

  return (
    // props className indicates either to use Short or LargeBar style
    <section className={`${className}CollapseBar`}>
      {/* clicking on the bar set the state of open to true or false */}
      <button
        onClick={toggleToOpenOrClose}
        className={`${className}CollapseButton`}
      >
        <h3 className="CollapseButtonTitle">{title}</h3>
        {open === false ? (
          <img src={ArrowDown} alt="Arrow icon to collapse down" />
        ) : (
          <img src={ArrowUp} alt="Arrow icon to collapse down" />
        )}
      </button>
      {/* if open is set to true, it displays the text inside the collapse bar */}
      {open && (
        // if content isn't a string, it displays the text as list
        <div className={`${className}CollapseText`}>
          {typeof content === "string" ? (
            content
          ) : (
            <ul className="ListOfItems">
              {content.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          )}{" "}
        </div>
      )}
    </section>
  );
};
