"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";
import styles from "./styles/postContent.module.css";
// import icns from "font-awesome-icons";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaBookmark,
  FaComment,
  FaCommentAlt,
  FaCommentDollar,
  FaCommentDots,
  FaCommentMedical,
  FaCommentSlash,
  FaComments,
  FaDiscourse,
  FaFacebook,
  FaForward,
  FaHeart,
  FaHeartBroken,
  FaStickyNote,
} from "react-icons/fa";

export default function PostContent({ url, title, description }) {
  const [data, setData] = useState(null);

  const fun = async () => {
    let resp = await axios.get(url);
    let final = await resp.data;
    setData(final);
  };

  useEffect(() => {
    fun();
  });
  return (
    <div className={styles.outer_div}>
      <p className={styles.title}>Title : {title}</p>
      <div className={styles.post}>
        <JSONPretty
          id="json-pretty"
          data={data}
          className={styles.dataa}
        ></JSONPretty>
      </div>

      <p className={styles.description}>Description : {description}</p>
      <div className={styles.operations}>
        <FaHeart className={styles.logo1} />
        <div className={styles.comment_box}>
          <input type="text" className={styles.comment_field}></input>
          <FaArrowRight className={styles.logo2} />
        </div>
        <FaBookmark className={styles.logo1} />
      </div>
      <p className={styles.view_comment}>View all 45 comments</p>
    </div>
  );
}
