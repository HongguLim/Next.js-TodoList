import React, { useState } from "react";
import { uuid } from "uuidv4";
import styles from "./AddTodo.module.css";

export default function AddTodo({ TodoList, setTodoList }: any) {
  const [textInput, setTextInput] = useState("");

  const addTodo = function (event: any) {
    event.preventDefault();
    if (textInput.trim().length !== 0) {
      setTodoList([
        ...TodoList,
        {
          contents: textInput,
          isActive: true,
          id: uuid(),
        },
      ]);
      setTextInput("");
    }
  };

  return (
    <form className={styles.form} onSubmit={addTodo}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={textInput}
        onChange={(event) => {
          setTextInput(event.target.value);
        }}
      />
      <button className={styles.button} onClick={addTodo}>
        Add
      </button>
    </form>
  );
}
