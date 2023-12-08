import React from "react";
import { Link } from "react-router-dom";
import texminLogo from "../../assets/images/texmin.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={texminLogo} alt="Logo" className={styles.logo} />
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
