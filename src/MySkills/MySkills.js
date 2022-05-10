import React from "react";
import SectionTitle from "../UI/SectionTitle";
import LogoGrid from "./LogoGrid";
import Button from "../UI/Button";

import styles from "./MySkills.module.css";

const MySkills = (props) => {
  return (
    <div className={styles.container}>
      <SectionTitle
        subHeading="MY SKILLS"
        heading="What My Programming Skills Include?"
      />
      <LogoGrid />
      <p className={styles.p}>
        I develop simple, intuitive and responsive user interface that helps
        users get things done with less effort and time with those technologies.
      </p>
      <Button text="Hire Me" classStyles={styles.button} />
    </div>
  );
};

export default MySkills;
