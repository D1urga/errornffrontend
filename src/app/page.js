"use client";
import styles from "./page.module.css";
import PostContent from "./components/postContent.js";
import { useState, useEffect } from "react";
import { FaChessQueen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import Indicator from "./components/indicator";

export default function Home() {
  const [isRegistering, setisRegistering] = useState(true);
  const router = useRouter();
  const [user, setUser] = useState();
  const [data, setData] = useState(null);
  const [currentValue, setCurrentValue] = useState(true);
  const [currentValue1, setCurrentValue1] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
    fullName: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setcoverImage] = useState(null);

  const handleAvatarchange = (e) => {
    setAvatar(e.target.files[0]);
  };
  const handleCoverchange = (e) => {
    setcoverImage(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChangeRegister = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    setCurrentValue1(false);
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("coverImage", coverImage);
    formData.append("email", registerData.email);
    formData.append("username", registerData.username);
    formData.append("password", registerData.password);
    formData.append("fullName", registerData.fullName);
    try {
      const response = await axios({
        method: "post",
        url: "https://errornf.onrender.com/api/v1/users/register",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
    setCurrentValue1(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCurrentValue(false);
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
    setCurrentValue(true);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.stringify(loggedInUser);
      setUser(foundUser);
      // router.push("/dashboard");
    }
  }, [data]);
  return (
    <div className={styles.outmost_div}>
      <div className={styles.options}>
        <p
          className={isRegistering ? styles.option1 : styles.option11}
          onClick={() => {
            setisRegistering(true);
          }}
        >
          login
        </p>
        <p
          className={!isRegistering ? styles.option2 : styles.option21}
          onClick={() => {
            setisRegistering(false);
          }}
        >
          signin
        </p>
      </div>
      {isRegistering ? (
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
            <div className={styles.intro}>
              <FaChessQueen className={styles.logo} />
              <p className={styles.login1}>Credentials</p>
            </div>
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
                  {currentValue ? (
                    <button className={styles.btn} type="submit">
                      login
                    </button>
                  ) : (
                    <Indicator />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.outer_div}>
          <div className={styles.left_div1}>
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
          <div className={styles.right_div1}>
            <div className={styles.intro}>
              <FaChessQueen className={styles.logo} />
              <p className={styles.login1}>Credentials</p>
            </div>
            <form onSubmit={handleSubmitRegister}>
              <div className={styles.inputs1}>
                <input
                  className={styles.input1}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={registerData.username}
                  onChange={handleInputChangeRegister}
                  autoComplete="true"
                ></input>

                <input
                  className={styles.input1}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={registerData.email}
                  onChange={handleInputChangeRegister}
                  autoComplete="true"
                ></input>
                <input
                  className={styles.input1}
                  type="text"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={registerData.password}
                  onChange={handleInputChangeRegister}
                  autoComplete="true"
                ></input>

                <input
                  className={styles.input1}
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="fullName"
                  value={registerData.fullName}
                  onChange={handleInputChangeRegister}
                  autoComplete="true"
                ></input>
                <div className={styles.file_div1}>
                  <p>avatar</p>
                  <input
                    className={styles.input2}
                    type="file"
                    name="avatar"
                    id="avatar"
                    placeholder="avatar"
                    // value={registerData.avatar}
                    onChange={handleAvatarchange}
                    autoComplete="true"
                  ></input>
                </div>
                <div className={styles.file_div1}>
                  <p>coverImage</p>
                  <input
                    className={styles.input2}
                    type="file"
                    name="coverImage"
                    id="coverImage"
                    placeholder="coverImage"
                    // value={registerData.coverImage}
                    onChange={handleCoverchange}
                    autoComplete="true"
                  ></input>
                </div>
                <div className={styles.btn_div}>
                  {currentValue1 ? (
                    <button className={styles.btn} type="submit">
                      signIn
                    </button>
                  ) : (
                    <Indicator />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
