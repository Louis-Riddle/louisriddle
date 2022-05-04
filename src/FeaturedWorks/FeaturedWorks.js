import React from "react";
import SectionTitle from "../UI/SectionTitle";
import ImageGallery from "../UI/ImageGallery";
import project1 from "../Assets/ImageGallery/project1.png";
import project2 from "../Assets/ImageGallery/project2.png";
import project3 from "../Assets/ImageGallery/project3.png";

import styles from "./FeaturedWorks.module.css";

const FeaturedWorks = (props) => {
  return (
    <div className={styles.container}>
      <SectionTitle subHeading="My Works" heading="Featured Works" />
      <ImageGallery src1={project1} src2={project2} src3={project3} />
    </div>
  );
};

export default FeaturedWorks;
