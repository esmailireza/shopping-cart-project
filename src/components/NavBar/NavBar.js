import React from "react";
import styles from "./navbar.module.css";

const NavBar = ({ totalItems }) => {
  return (
    <header className={styles.navbar}>
      <h2>shopping cart</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default NavBar;
