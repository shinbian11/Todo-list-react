import styled from "styled-components";
import { useState } from "react";

const AddTodoStyled = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid red;
`;

function AddTodo({ onCreate }) {
  const [todo, setTodo] = useState("");
  const [tag, setTag] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    onCreate(todo, tag);

    setTodo("");
    setTag("");
  }

  return (
    <AddTodoStyled>
      <article>
        <h1>Add</h1>
        <form onSubmit={submitHandler}>
          <p>
            <input
              type="text"
              name="todo"
              value={todo}
              placeholder="오늘 할 일 추가"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            ></input>
          </p>
          <p>
            <input
              type="text"
              name="tag"
              value={tag}
              placeholder="태그 입력"
              onChange={(e) => {
                setTag(e.target.value);
              }}
            ></input>
          </p>
          <p>
            <input type="submit" value="Add"></input>
          </p>
        </form>
      </article>
    </AddTodoStyled>
  );
}

export default AddTodo;
