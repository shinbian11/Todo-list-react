import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTodoStyled = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid red;
`;

function UpdateTodo({ onUpdate }) {
  const params = useParams();
  const id = Number(params.id);

  const navigate = useNavigate();

  const [todo, setTodo] = useState("");
  const [tag, setTag] = useState("");

  async function refreshItem() {
    const resp = await fetch("http://localhost:3333/todolist/" + id);
    const data = await resp.json();
    setTodo(data.todo);
    setTag(data.tag);
  }

  useEffect(() => {
    refreshItem();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();

    onUpdate(id, todo, tag);

    navigate("/");
    // setTodo("");
    // setTag("");
  }

  return (
    <UpdateTodoStyled>
      <article>
        <h1>Update</h1>
        <form onSubmit={submitHandler}>
          <p>
            <input
              type="text"
              name="todo"
              value={todo}
              placeholder="오늘 할 일 수정"
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
              placeholder="태그 수정"
              onChange={(e) => {
                setTag(e.target.value);
              }}
            ></input>
          </p>
          <p>
            <input type="submit" value="Update"></input>
          </p>
        </form>
      </article>
    </UpdateTodoStyled>
  );
}

export default UpdateTodo;
