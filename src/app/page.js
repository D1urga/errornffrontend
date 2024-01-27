"use client";
import styles from "./page.module.css";
import PostContent from "./components/postContent.js";
import { useState, useEffect } from "react";
import { FaChessQueen } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState();
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://errornf.onrender.com/api/v1/users/login",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    setData(data.data);
    localStorage.setItem("user", data.data);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
      router.push("/dashboard");
    }
  }, [data]);
  return (
    <div className={styles.outer_div}>
      <div className={styles.left_div}>
        <div className={styles.heading}>
          <FaChessQueen className={styles.logo} />
          <p className={styles.title}>ErrorNF</p>
        </div>
        <p className={styles.welcome}>
          Community for Professionals and Students
        </p>
        <p className={styles.content}>
          Coding communities are the best place to connect with like-minded
          people and also express any doubts you might have regarding
          programming
        </p>
      </div>
      <div className={styles.right_div}>
        <p className={styles.login}>Credentials</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={formData.username}
              onChange={handleInputChange}
              autoComplete="true"
            ></input>
            <input
              className={styles.input}
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="true"
            ></input>
            <input
              className={styles.input}
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="true"
            ></input>
            <div className={styles.btn_div}>
              <button className={styles.btn} type="submit">
                login
              </button>
            </div>
          </div>
        </form>
      </div>
      <p className={styles.developer}>
        Design and Developed by anoop kumar chaudhary
      </p>
    </div>
  );
}
