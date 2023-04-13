import React, { useState } from "react";
import styles from "components/TodoList/Button/Button.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "@component/context/DarkModeContext";
export default function Button({ setCategory, category, filters }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.todoButton} onClick={toggleDarkMode}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
      <div>
        <button
          className={`${styles.todoButton} ${
            category === filters[0] ? styles.selected : ""
          }`}
          onClick={() => {
            setCategory(filters[0]);
          }}
        >
          {filters[0]}
        </button>
        <button
          className={`${styles.todoButton} ${
            category === filters[1] ? styles.selected : ""
          }`}
          onClick={() => {
            setCategory(filters[1]);
          }}
        >
          {filters[1]}
        </button>
        <button
          className={`${styles.todoButton} ${
            category === filters[2] ? styles.selected : ""
          }`}
          onClick={() => {
            setCategory(filters[2]);
          }}
        >
          {filters[2]}
        </button>
      </div>
    </div>
  );
}
