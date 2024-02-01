import React from "react";
import Image from "next/image";
import styles from "./profile.module.css";
import { FaEllipsisH, FaInstagram } from "react-icons/fa";

export default function Profile({ params }) {
  console.log(params);
  return (
    <div className={styles.outer_div}>
      <div>
        <img
          className={styles.img}
          src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7bQPmsLocXE/v1/-1x-1.jpg"
        ></img>
      </div>
      <div className={styles.right_div}>
        <div className={styles.name}>
          <p className={styles.title}>{params.profile[1]}</p>
          <button className={styles.btn}>follow</button>
          <FaEllipsisH className={styles.logo} />
        </div>
        <div className={styles.details}>
          <p>20 posts</p>
          <p>11 followers</p>
          <p>13 following</p>
        </div>
        <div className={styles.desc}>
          <p>anoop kumar chaudhary </p>
        </div>
      </div>
    </div>
  );
}
