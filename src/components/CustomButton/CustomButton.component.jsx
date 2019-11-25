import React from "react";

import "./Custom-button.style.scss";

const CustomButton = props => {
  console.log(props);
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  );
};

export { CustomButton };
