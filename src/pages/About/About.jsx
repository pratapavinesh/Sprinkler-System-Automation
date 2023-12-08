import React from "react";
import Header from "../../components/Header/Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Header />
      <main className={styles.about_page}>
        <h1>About</h1>
        <p>This is the documentation of the project.</p>
        {/* Add more content here */}
      </main>
    </>
  );
};

export default About;
