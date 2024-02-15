"use client";
import React from "react";
import Image from "next/image";
import styles from "./profile.module.css";
import { FaEllipsisH, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Profile({ params }) {
  const [data, setData] = useState([]);
  const [reqdata, setRedata] = useState([]);

  const submitRequest = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://errornf.onrender.com/api/v1/users/follow/${decodeURIComponent(
        params.profile[14]
      )}/${localStorage.getItem("currentUser")}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqdata),
      }
    );
    // const data = await response.json();
  };
  const fetchInfo = async () => {
    const res = await fetch(
      "https://errornf.onrender.com/api/v1/users/current-user",
      { credentials: "include" }
    );
    const d = await res.json();
    return setData(d.data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
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

            {params.profile[11] === "true" ? (
              <button className={styles.btn}>requested</button>
            ) : params.profile[13] === "true" ? (
              <button className={styles.btn}>following</button>
            ) : (
              <form onSubmit={submitRequest}>
                <button className={styles.btn} type="submit">
                  follow
                </button>
              </form>
            )}

            <FaEllipsisH className={styles.logo} />
          </div>
          <div className={styles.details}>
            <p>
              <span className={styles.data}>
                {decodeURIComponent(params.profile[12])}
              </span>
              posts
            </p>
            <p>
              <span className={styles.data}>
                {decodeURIComponent(params.profile[9])}
              </span>
              followers
            </p>
            <p>
              <span className={styles.data}>
                {decodeURIComponent(params.profile[10])}
              </span>
              following
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
        )} to see their content`}</p>
      </div>
    </div>
  );
}
