import React, { useState } from "react";
import styles from "components/TodoList/Button/Button.module.css";
export default function Button({ setCategory, category, filters }) {
  return (
    <div className={styles.container}>
      <div>
        <button className={styles.todoButton}>다크모드</button>
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
