import React, { useState } from "react";
import { uuid } from "uuidv4";

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
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={textInput}
        onChange={(event) => {
          setTextInput(event.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </form>
  );
}
