import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const TodoListStyled = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid green;
`;

function TodoList({ todoList, onDelete, setTodoList }) {
  const deleteBtn = (id, todo) => {
    if (window.confirm(`Todo list : ${todo}를 삭제하겠습니까?`)) {
      onDelete(id);
    }
  };
  const onChangeCheckbox = (id) => {
    // console.log(todoList.map((item) => ({ ...item, completed: true })));
    const newTodoList = todoList.map((item) => ({
      ...item,
      completed: item.id === id ? !item.completed : item.completed,
    }));
    // console.log("newTodoList  :", newTodoList);
    setTodoList(newTodoList);
  };

  return (
    <TodoListStyled>
      {todoList.map((item) => (
        <div key={`${item.todo}-${item.tag}-${item.id}`}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => {
              onChangeCheckbox(item.id);
            }}
          />
          <p>
            {item.todo}, {item.tag}, {item.id}
          </p>
          <Link to={`/update/${item.id}`}>
            <button>Update</button>
          </Link>
          <button
            onClick={() => {
              deleteBtn(item.id, item.todo);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </TodoListStyled>
  );
}

export default TodoList;
