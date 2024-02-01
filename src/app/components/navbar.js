"use client";
import React from "react";
import styles from "./styles/navbar.module.css";
import img1 from "../images/anpic3.jpeg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaAtom,
  FaBars,
  FaBookmark,
  FaChessQueen,
  FaCode,
  FaCog,
  FaEllipsisH,
  FaImage,
  FaKeyboard,
  FaMicrosoft,
  FaNodeJs,
  FaPlay,
  FaReact,
  FaSignOutAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={styles.drawer_div}>
        <div className={styles.name}>
          <FaChessQueen className={styles.logo_name} />
          <p className={styles.logo_title}>ErrorNF</p>
        </div>
        <FaBars
          className={styles.drawer}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div className={isOpen ? styles.outer_div : styles.outer_div1}>
        <div className={styles.title}>
          <FaChessQueen className={styles.title_logo} />
          <p className={styles.title_p}>ErrorNF</p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.div1}>
          <div
            className={index == 0 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(0);
              router.push("/dashboard");
            }}
          >
            <div className={styles.links_div}>
              <FaMicrosoft className={styles.logo} />
              <Link href="" className={styles.link}>
                Dashboard
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
          <div
            className={index == 9 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(9);
              router.push("/");
            }}
          >
            <div className={styles.links_div}>
              <FaKeyboard className={styles.logo} />
              <Link href="" className={styles.link}>
                Data Structures
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
          <div
            className={index == 1 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(1);
            }}
          >
            <div className={styles.links_div}>
              <FaCode className={styles.logo} />
              <Link href="/profiles" className={styles.link}>
                Flutter
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
          <div
            className={index == 2 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(2);
            }}
          >
            <div className={styles.links_div}>
              <FaAtom className={styles.logo} />
              <Link href="" className={styles.link}>
                Next JS
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
          <div
            className={index == 3 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(3);
            }}
          >
            <div className={styles.links_div}>
              <FaReact className={styles.logo} />
              <Link href="" className={styles.link}>
                React Js
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
          <div
            className={index == 4 ? styles.links2 : styles.links}
            onClick={() => {
              setIndex(4);
            }}
          >
            <div className={styles.links_div}>
              <FaNodeJs className={styles.logo} />
              <Link href="" className={styles.link}>
                Node Js
              </Link>
            </div>
            <FaEllipsisH className={styles.logo1} />
          </div>
        </div>
        <div className={styles.divider}></div>

        <div className={styles.div2}>
          <div
            className={index == 5 ? styles.history2 : styles.history}
            onClick={() => {
              setIndex(5);
            }}
          >
            <FaPlay className={styles.history_logo} />
            <Link href="" className={styles.history_link}>
              Video History
            </Link>
          </div>
          <div
            className={index == 6 ? styles.history2 : styles.history}
            onClick={() => {
              setIndex(6);
            }}
          >
            <FaImage className={styles.history_logo} />
            <Link href="" className={styles.history_link}>
              Posts History
            </Link>
          </div>
          <div
            className={index == 7 ? styles.history2 : styles.history}
            onClick={() => {
              setIndex(7);
            }}
          >
            <FaBookmark className={styles.history_logo} />
            <Link href="" className={styles.history_link}>
              Saved Content
            </Link>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.div3}>
          <div
            className={index == 8 ? styles.settings2 : styles.settings}
            onClick={() => {
              setIndex(8);
            }}
          >
            <FaCog className={styles.settings_logo} />
            <Link href="" className={styles.settings_link}>
              settings
            </Link>
          </div>
          <div className={styles.settings}>
            <FaSignOutAlt className={styles.settings_logo} />
            <Link href="" className={styles.settings_link}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
