import React from "react";

const Button = ({ type, classes, onClick, children }) => {
  return (
    <button
      className={`btn ${classes}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
