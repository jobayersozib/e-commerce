import React from "react";
import "./Custom-button.style.scss";

const CustomButton = ({ children, ...otherprops }) => {
  return (
    <button className="custom-button" {...otherprops}>
      {children}
    </button>
  );
};

export { CustomButton };
