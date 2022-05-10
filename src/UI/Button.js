import React from "react";

const Button = (props) => {
  return <button className={props.classStyles}>{props.text}</button>;
};

export default Button;
