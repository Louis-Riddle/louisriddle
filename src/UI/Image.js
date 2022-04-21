import React from "react";

const Image = (props) => {
  return <img src={props.src} alt={props.alt} className={props.classStyles} />;
};

export default Image;
