import React from "react";
import styles from "./ImageGallery.module.css";
import Image from "./Image";

const ImageGallery = (props) => {
  return (
    <div className={styles.container}>
      <Image
        src={props.src1}
        alt="Project One Done By Louis Riddle"
        classStyles={styles.img}
      />
      <Image
        src={props.src2}
        alt="Project Two Done By Louis Riddle"
        classStyles={styles.img}
      />
      <Image
        src={props.src3}
        alt="Project Three Done By Louis Riddle"
        classStyles={styles.img}
      />
    </div>
  );
};

export default ImageGallery;
