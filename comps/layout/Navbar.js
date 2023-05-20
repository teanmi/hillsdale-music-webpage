"use client";

import styles from "./Navbar.module.css";
import MenuIcon from "./menuIcon";
import ExitIcon from "./exitIcon";
import React from "react";

const Navbar = () => {
  const [mobileMenuDisplay, setMobileMenuDisplay] = React.useState(false);

  return (
    <nav id={styles.nav}>
      <div className={styles.nav__container}>
        <h3 className={styles.nav__logo}>HHS Music</h3>
        <ul className={styles.nav__links}>
          <li className={`${styles.nav__link} ${styles["nav__link--hover"]}`}>
            Home
          </li>
          <li className={`${styles.nav__link} ${styles["nav__link--hover"]}`}>
            Home
          </li>
          <li className={`${styles.nav__link} ${styles["nav__link--hover"]}`}>
            Home
          </li>
        </ul>
        <div
          className={styles["nav__mobileMenu--button"]}
          onClick={() => {
            setMobileMenuDisplay(true);
          }}
        >
          <MenuIcon />
        </div>
      </div>
      {mobileMenuDisplay && (
        <div className={styles.nav__mobileMenu}>
          <div className={styles.mobileMenu__container}>
            <ul className={styles.mobileMenu__links}>
              <li
                className={`${styles.mobileMenu__link} ${styles["nav__link--hover"]}`}
              >
                Home
              </li>
              <li
                className={`${styles.mobileMenu__link} ${styles["nav__link--hover"]}`}
              >
                Home
              </li>
              <li
                className={`${styles.mobileMenu__link} ${styles["nav__link--hover"]}`}
              >
                Home
              </li>
            </ul>
          </div>
          <div
            className={styles["mobileMenu__exit--button"]}
            onClick={() => {
              setMobileMenuDisplay(false);
            }}
          >
            <ExitIcon />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
