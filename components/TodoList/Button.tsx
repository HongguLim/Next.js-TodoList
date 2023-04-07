import React, { useState } from "react";
import styles from "components/TodoList/TodoList.module.css";
export default function Button({ setCategory, filters }) {
  return (
    <div className={styles.todoButton}>
      <div>
        <button>다크모드</button>
      </div>
      <div>
        <button
          onClick={() => {
            setCategory(filters[0]);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setCategory(filters[1]);
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            setCategory(filters[2]);
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
