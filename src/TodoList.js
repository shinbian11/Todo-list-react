import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const TodoListStyled = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid green;
`;

function TodoList({ todoList, onDelete, onUpdate }) {
  const deleteBtn = (id, todo) => {
    if (window.confirm(`Todo list : ${todo}를 삭제하겠습니까?`)) {
      onDelete(id);
    }
  };

  return (
    <TodoListStyled>
      {todoList.map((item) => (
        <div key={`${item.todo}-${item.tag}-${item.id}`}>
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
