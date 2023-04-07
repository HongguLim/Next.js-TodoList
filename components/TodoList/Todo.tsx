import React from "react";
import styles from "components/TodoList/TodoList.module.css";
import { FiTrash2 } from "react-icons/fi";

export default function Todo({ TodoList, setTodoList }) {
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

  return (
    <div className={styles.todoCardContainer}>
      {TodoList.map(function (card) {
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
                className={!card.isActive && styles.completed}
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
