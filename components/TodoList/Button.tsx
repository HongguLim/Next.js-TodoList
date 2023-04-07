import React from "react";
import styles from "components/TodoList/TodoList.module.css";
export default function Button() {
  return (
    <div className={styles.todoButton}>
      <div>
        <button>다크모드</button>
      </div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
