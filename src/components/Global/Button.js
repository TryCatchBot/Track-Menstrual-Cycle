import React from "react";
import "../styles/button.css";

const Button = ({ title, style, onClick }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <button className="button-submit" style={style} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
