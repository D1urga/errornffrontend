"use client";
import styles from "./dashboard.module.css";
import PostContent from "../components/postContent.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "http://localhost:3000/api/v1/posts/getContentPost",
      { credentials: "include" }
    );
    const d = await res.json();
    return setData(d.data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.outer_div}>
      <div className={styles.main_div}>
        {data.map((post) => (
          <PostContent
            id={post._id}
            key={post._id}
            url={post.content}
            title={post.title}
            comments={post.comments}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}
