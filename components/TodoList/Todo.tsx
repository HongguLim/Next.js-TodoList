import React, { useEffect, useState } from "react";
import styles from "components/TodoList/TodoList.module.css";
import { FiTrash2 } from "react-icons/fi";

export default function Todo({ TodoList, setTodoList, category }) {
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  const deleteTodo = (id) => {
    setTodoList(TodoList.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodoList(
      TodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isActive: !todo.isActive,
          };
        }
        return todo;
      })
    );
  };
  useEffect(() => {
    if (category === "all") {
      setFilteredTodoList(TodoList);
    } else if (category === "active") {
      setFilteredTodoList(TodoList.filter((todo) => todo.isActive));
    } else if (category === "completed") {
      setFilteredTodoList(TodoList.filter((todo) => !todo.isActive));
    }
  }, [TodoList, category]);
  return (
    <div className={styles.todoCardContainer}>
      {filteredTodoList.map(function (card) {
        return (
          <div className={styles.todoCard} key={card.id}>
            <form className={styles.todoCardLeft}>
              <input
                type="checkbox"
                id={`checkbox-${card.id}`}
                checked={!card.isActive}
                onChange={() => updateTodo(card.id)}
              />
              <label
                htmlFor={`checkbox-${card.id}`}
                className={card.isActive ? null : styles.completed}
              >
                {card.contents}
              </label>
            </form>
            <div>
              <button onClick={() => deleteTodo(card.id)}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
