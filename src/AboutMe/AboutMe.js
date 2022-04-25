import React from "react";
import Image from "../UI/Image";
import styles from "./AboutMe.module.css";
import thinkingMan from "../Assets/thinkingMan.png";
import Button from "../UI/Button";

const AboutMe = (props) => {
  return (
    <div className={styles.container}>
      <Image
        src={thinkingMan}
        alt="Louis thinking about coding"
        classStyles={styles.image}
      />
      <h2 className={styles.aboutMe}>
        <span className={styles.whoIAm}>WHO I AM</span>
        <br />
        About Me
      </h2>
      <p className={styles.paragraph}>
        Hi! I am Louis Riddle, and I am a developer who has a passion for
        building clean web applications with intuitive functionality. I enjoy
        the process of turning ideas into reality using creative solutions. I am
        always curious about learning new skills, tools, and concepts. In
        addition to working on various solo front end projects, I have worked
        with creative teams, which involves daily communications, source
        control, and project management.
      </p>
      <Button text="Hire Me" />
    </div>
  );
};

export default AboutMe;