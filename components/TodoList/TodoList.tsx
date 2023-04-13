import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import styles from "components/TodoList/TodoList.module.css";
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";
import Button from "./Button/Button";

export default function TodoList() {
  const [TodoList, setTodoList] = useState(() => initialState());
  const filters = ["all", "active", "completed"];
  const [category, setCategory] = useState(filters[0]);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
  }, [TodoList]);
  return (
    <div>
      <div className={styles.todoContainer}>
        <Button
          setCategory={setCategory}
          filters={filters}
          category={category}
        />
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

const isBrowser = typeof window !== "undefined";

const initialState = () => {
  const todos = isBrowser ? localStorage.getItem("TodoList") : null;
  return todos ? JSON.parse(todos) : [];
};
