"use client";
import Link from "next/link";
import React from "react";
import styles from "../components/styles/profiles.module.css";
import { useState, useEffect } from "react";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";

export default function Profiles() {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://errornf.onrender.com/api/v1/users/allUsers",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };
  const filterdData = data.filter((el) => {
    if (inputText == "") {
      return null;
    } else {
      return el.username.toLowerCase().includes(inputText);
    }
  });

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.outer_div}>
      <div>
        <input
          className={styles.search_bar}
          type="text"
          onChange={inputHandler}
          placeholder="ex .. nixx_1"
        ></input>
      </div>
      <div className={styles.users_div}>
        {filterdData &&
          filterdData.map((user) => (
            <div className={styles.profile_div} key={user._id}>
              <div className={styles.username}>
                <img src={user.avatar} className={styles.dp}></img>
                <div className={styles.name_div}>
                  <p>{user.username}</p>
                  <p>{user.fullName}</p>
                </div>
              </div>
              <FaEllipsisV className={styles.logo} />
            </div>
          ))}
      </div>
    </div>
  );
}
