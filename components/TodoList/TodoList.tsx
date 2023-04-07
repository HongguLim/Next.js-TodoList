import React, { useState } from "react";
import { uuid } from "uuidv4";
import styles from "components/TodoList/TodoList.module.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Button from "./Button";

export default function TodoList() {
  const [TodoList, setTodoList] = useState(initialState);
  const filters = ["all", "active", "completed"];
  const [category, setCategory] = useState(filters[0]);

  return (
    <div>
      <div className={styles.todoContainer}>
        <Button setCategory={setCategory} filters={filters} />
        <Todo
          TodoList={TodoList}
          setTodoList={setTodoList}
          category={category}
        />
        <AddTodo TodoList={TodoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

const initialState = [
  {
    contents: "공부하기",
    isActive: true,
    id: uuid(),
  },
  {
    contents: "밥먹기",
    isActive: true,
    id: uuid(),
  },
  {
    contents: "강의보기",
    isActive: true,
    id: uuid(),
  },
  {
    contents: "카페가기",
    isActive: true,
    id: uuid(),
  },
  {
    contents: "청소하기",
    isActive: false,
    id: uuid(),
  },
];
