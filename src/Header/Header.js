import React from "react";
import Image from "../UI/Image";
import Button from "../UI/Button";
import HamburgerMenu from "../UI/HamburgerMenu";

import logo from "../Assets/logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <Image src={logo} alt="Logo of Louis' Site" className={styles.logo} />
      <HamburgerMenu />
    </div>
  );
};

export default Header;
