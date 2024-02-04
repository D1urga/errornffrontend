import React from "react";
import Image from "next/image";
import styles from "./profile.module.css";
import { FaEllipsisH, FaInstagram } from "react-icons/fa";

export default function Profile({ params }) {
  console.log(decodeURIComponent(params.profile[2]));
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div>
          <img
            className={styles.img}
            src={`${decodeURIComponent(
              params.profile[2]
            )}//${decodeURIComponent(params.profile[3])}/${decodeURIComponent(
              params.profile[4]
            )}/${decodeURIComponent(params.profile[5])}/${decodeURIComponent(
              params.profile[6]
            )}/${decodeURIComponent(params.profile[7])}/${decodeURIComponent(
              params.profile[8]
            )}`}
          ></img>
        </div>
        <div className={styles.right_div}>
          <div className={styles.name}>
            <p className={styles.title}>
              {decodeURIComponent(params.profile[0])}
            </p>
            <button className={styles.btn}>follow</button>
            <FaEllipsisH className={styles.logo} />
          </div>
          <div className={styles.details}>
            <p>
              <span className={styles.data}>20</span> posts
            </p>
            <p>
              <span className={styles.data}>11</span> followers
            </p>
            <p>
              <span className={styles.data}>13</span> following
            </p>
          </div>
          <div className={styles.desc}>
            <p>{decodeURIComponent(params.profile[1])}</p>
          </div>
          <div className={styles.bio}>
            <p>
              IIEC National hackathon Winner HachDays National hackathon Winner
            </p>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <hr className={styles.divider} />
      </div>
      <div className={styles.status}>
        <p>This account is private</p>
        <p>{`Follow ${decodeURIComponent(
          params.profile[0]
        )} to see their posts and other content`}</p>
      </div>
    </div>
  );
}
