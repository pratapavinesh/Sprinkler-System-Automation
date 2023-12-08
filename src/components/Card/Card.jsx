import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ person }) => {
  return (
    <div className={styles.card}>
      <img src={person.image} alt={person.name} className={styles.avatar} />
      <div className={styles.bio}>
        <h4 className={styles.name}>{person.name}</h4>
        <h5 className={styles.work}>{person.work}</h5>
        <p className={styles.about}>{person.about}</p>
      </div>
      <div className={styles.contact}>
        <Link to={`mailto:${person.email}`} className={styles.email}>
          <BiLogoGmail />
        </Link>
        <Link to={`tel:${person.mobile}`} className={styles.phone}>
          <AiFillPhone />
        </Link>
        <Link
          to={`https://google.com/maps?q=${person.address}`}
          className={styles.address}
          target="_blank"
        >
          <FaMapMarkerAlt />
        </Link>
      </div>
    </div>
  );
};

export default Card;
