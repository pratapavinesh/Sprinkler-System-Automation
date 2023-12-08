import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import avineshImage from "../../assets/images/avinesh.jpeg";
import brijeshImage from "../../assets/images/brijesh.jpg";
import styles from "./Contact.module.css";

const Contact = () => {
  const people = [
    {
      image: avineshImage,
      name: "Avinesh Pratap Singh",
      email: "pratapavinesh2003@gmail.com",
      mobile: "6307978382",
      address: "Lucknow UP-India-271903",
      work: "Student",
      about:
        "I am a student of B.Tech 4th year in Computer Science and Engineering at IIT ISM Dhanbad.",
    },
    {
      image: brijeshImage,
      name: "Brijesh Kumar",
      email: "bk167465@gmail.com",
      mobile: "9508733101",
      address: "Delhi India-110041",
      work: "Student",
      about:
        "I am a student of B.Tech 4th year in Computer Science and Engineering at IIT ISM Dhanbad.",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.contact_page}>
        <h1>Contacts</h1>
        <div className={styles.cards}>
          {people.map((person) => (
            <Card key={person.name} person={person} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Contact;
