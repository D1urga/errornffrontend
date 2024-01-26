"use client";
import styles from "./dashboard.module.css";
import PostContent from "../components/postContent.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://errornf.onrender.com/api/v1/posts/getContentPost",
      { credentials: "include" }
    );
    const d = await res.json();
    return setData(d.data);
  };

  useEffect(() => {
    fetchInfo();
  }, [data]);
  return (
    <div className={styles.outer_div}>
      {data.map((post) => (
        <PostContent
          url={post.content}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
