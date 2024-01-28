"use client";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import JSONPretty from "react-json-pretty";
import styles from "./styles/postContent.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { FaArrowRight, FaBookmark, FaHeart } from "react-icons/fa";
import Skeleton from "@mui/material/Skeleton";
import { CurrentUser } from "./currentUser";

export default function PostContent({ url, title, description, id, comments }) {
  const [isPosting, setIsPosting] = useState(true);
  const [isCommentShowing, setIsCommentShowing] = useState(false);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    comment: "",
  });

  const handleSubmit = () => async (event) => {
    event.preventDefault();
    setIsPosting(false);
    const response = await fetch(
      `https://errornf.onrender.com/api/v1/comments/ContentPostComment/${id}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    setIsPosting(true);
    const data = await response.json();
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
        <form onSubmit={handleSubmit()}>
          {isPosting ? (
            <div className={styles.comment_box}>
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Post your comments here .."
                // value={formData.comment}
                onChange={handleInputChange}
                className={styles.comment_field}
              ></input>
              <button className={styles.button1} type="submit">
                <FaArrowRight className={styles.logo2} />
              </button>
            </div>
          ) : (
            <div className={styles.skelton_div}>
              <Skeleton
                sx={{ bgcolor: "blue.100" }}
                height={27}
                animation="wave"
                variant="rectangular"
                className={styles.skelton}
              />
            </div>
          )}
        </form>
        <FaBookmark className={styles.logo1} />
      </div>
      <p
        className={styles.view_comment}
        onClick={() => {
          setIsCommentShowing(!isCommentShowing);
        }}
      >
        View all 45 comments
      </p>
      <div
        className={isCommentShowing ? styles.comment_div : styles.comment_div1}
      >
        {comments &&
          comments.map((comment) => <p key={comment._id}>{comment.comment}</p>)}
      </div>
    </div>
  );
}
