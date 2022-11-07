import React from "react";
import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
