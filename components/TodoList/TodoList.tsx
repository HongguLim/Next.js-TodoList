import React, { useState } from "react";
import { uuid } from "uuidv4";
import styles from "components/TodoList/TodoList.module.css";

export default function TodoList() {
  const [TodoList, setTodoList] = useState(initialState);
  const [textInput, setTextInput] = useState("");
  const [category, setCategory] = useState({
    switchAll: true,
    switchActive: false,
    switchCompleted: false,
  });
  const addTodo = function () {
    if (textInput) {
      const newTodoList = [
        ...TodoList,
        {
          contents: textInput,
          isActive: true,
          id: uuid(),
        },
      ];
      setTodoList(newTodoList);
      setTextInput("");
    }
  };

  return (
    <div>
      {" "}
      <div className={styles.todoContainer}>
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
        <div>
          <div className={styles.todoCardContainer}>
            {TodoList.map(function (card) {
              return (
                <div className={styles.todoCard} key={card.id}>
                  <div className={styles.todoCardLeft}>
                    <input type="radio" />
                    <p>{card.contents}</p>
                  </div>
                  <div>
                    <button>휴지통</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <input
              type="text"
              value={textInput}
              onChange={(event) => {
                setTextInput(event.target.value);
              }}
            />
            <button onClick={addTodo}>Add</button>
          </div>
        </div>
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
