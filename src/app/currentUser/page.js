"use client";
import React from "react";
import styles from "./currentUser.module.css";
import { useState, useEffect } from "react";
import { FaCut, FaPlus, FaTimes, FaUpload } from "react-icons/fa";
import axios from "axios";
import Indicator from "../components/indicator.js";

export default function Currentuser() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isposting, setIsPosting] = useState(false);
  const [isUploading, setIsuploading] = useState(true);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [content, setContent] = useState(null);
  const handleContentchange = (e) => {
    setContent(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    // setCurrentValue1(false);
    setIsuploading(false);
    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", formData.title);
    formData.append("description", formData.description);

    const response = await axios({
      method: "post",
      url: `https://errornf.onrender.com/api/v1/posts/postPicturePost/${localStorage.getItem(
        "currentUser"
      )}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        alert(response.length);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsuploading(true);
    // setCurrentValue1(true);
  };

  const [reqdata, setRedata] = useState([]);

  const approveRequest = (id) => async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://errornf.onrender.com/api/v1/users/approveFollower/${id}`,
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
      `https://errornf.onrender.com/api/v1/users/currentUser/${localStorage.getItem(
        "currentUser"
      )}`,
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data[0]);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.outer_div}>
      <img src={data.avatar} className={styles.dp}></img>
      <p className={styles.username}>{data.fullName}</p>
      <div className={styles.buttons}>
        <button className={styles.btn}>Edit profile</button>

        <button
          className={styles.btn}
          onClick={() => {
            setIsRequestOpen(!isRequestOpen);
          }}
        >
          Requests
        </button>
      </div>
      <div className={styles.data}>
        <p>
          <span className={styles.span}>{data.totalPost}</span> posts
        </p>
        <p>
          <span className={styles.span}>{data.totalFollowers}</span> followers
        </p>
        <p>
          <span className={styles.span}>{data.totalFollowing}</span> following
        </p>
      </div>
      <p className={styles.desc}>
        Elon Reeve Musk is a businessman and investor. He is the founder,
        chairman, CEO, and CTO of SpaceX; angel investor, CEO, product
        architect, and former
      </p>
      <div className={styles.posts}>
        <div className={styles.upload_div}>
          <FaPlus className={styles.logo} />
          <p className={styles.postName}>Content Post</p>
        </div>
        <div
          className={styles.upload_div}
          onClick={() => {
            setIsPosting(!isposting);
          }}
        >
          <FaPlus className={styles.logo} />
          <p className={styles.postName}>Post Error</p>
        </div>
      </div>

      <div className={isRequestOpen ? styles.requests : styles.requests1}>
        <div className={styles.message_div}>
          {data.requests && data.requests.length === 0 ? (
            <div className={styles.message_opt}>
              <p className={styles.message}>no follow requests</p>
              <FaTimes
                onClick={() => {
                  setIsRequestOpen(!isRequestOpen);
                }}
              />
            </div>
          ) : null}
        </div>
        <div className={styles.followRequests}>
          {data.requests &&
            data.requests.map((post) => (
              <div className={styles.request_outer_div}>
                <p>anoop chaudhary</p>
                <div className={styles.option}>
                  <form onSubmit={approveRequest(post._id)}>
                    <button className={styles.btn1} type="submit">
                      accept
                    </button>
                  </form>
                  <button className={styles.btn1}>decline</button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={isposting ? styles.form_div : styles.form_div1}>
        <form className={styles.form} onSubmit={handleSubmitRegister}>
          <div className={styles.form_inner}>
            <p>Post Here</p>
            <input
              className={styles.input}
              type="text"
              name="title"
              id="title"
              placeholder="title .."
              value={formData.title}
              onChange={handleInputChange}
            ></input>
            <input
              className={styles.input}
              type="text"
              name="description"
              id="description"
              placeholder="description .."
              value={formData.description}
              onChange={handleInputChange}
            ></input>
            <p>choose your image</p>
            <div className={styles.input1_div}>
              <input
                className={styles.input1}
                type="file"
                name="content"
                id="content"
                placeholder="content"
                onChange={handleContentchange}
              ></input>
            </div>
          </div>
          <div className={styles.btn_div}>
            <button className={styles.btn2} type="submit">
              {isUploading ? "post" : <Indicator />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
