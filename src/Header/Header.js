import React, { useState } from "react";
import Image from "../UI/Image";
import HamburgerMenu from "../UI/HamburgerMenu";
import MobileMenu from "../UI/MobileMenu";

import logo from "../Assets/logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <Image src={logo} alt="Logo of Louis' Site" classStyles={styles.logo} />
      <HamburgerMenu displayState={displayMenu} setDisplay={setDisplayMenu} />

      <MobileMenu displayState={displayMenu} setDisplay={setDisplayMenu} />
    </div>
  );
};

export default Header;
