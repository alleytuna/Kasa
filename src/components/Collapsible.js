import React, { useState } from "react";
import "../styles/collapsible.css";
import ArrowDown from "../assets/ArrowDown.svg";
import ArrowUp from "../assets/ArrowUp.svg";

//creer size md lg xs

export const Collapsible = ({ title, content, className }) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button onClick={toggle} className={`${className}CollapseButton`}>
        <h3 className="CollapseButtonTitle">{title}</h3>
        {open === false ? (
          <img src={ArrowDown} alt="flèche vers le bas" />
        ) : (
          <img src={ArrowUp} alt="flèche vers le haut" />
        )}
      </button>
      {open && <h4 className={`${className}CollapseText`}>{content}</h4>}
    </div>
  );
};
