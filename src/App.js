import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";
import CountTodoList from "./CountTodoList";

// 디자인은 나중에
// 일단 Todo List 부터 만들기
// npx json-server --watch -p 3333 db.json 명령어를 이용하여 json-server로 mock 데이터를 일단 보관하여 사용 중

const Body = styled.div`
  display: flex;
  width: 1000px;
  height: 800px;
`;
const SideBar = styled.div`
  width: 200px;
  height: 800px;
  border: 1px solid red;
`;
const Container = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid #faf1f0;
`;
const DateComponent = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid black;
`;
const TodoComponent = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;
const Pagination = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid black;
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoListLength, setTodoListLength] = useState(0);

  const navigate = useNavigate();

  // READ
  async function refresh() {
    const resp = await fetch("http://localhost:3333/todolist");
    const data = await resp.json();
    setTodoList(data);
    setTodoListLength(data.length);
  }

  useEffect(() => {
    refresh();
  }, []);

  // CREATE
  async function createHandler(todo, tag) {
    const resp = await fetch("http://localhost:3333/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, tag, complete: false }),
    });

    const data = await resp.json();
    // console.log("added data : ", data);

    refresh();
    navigate("/");
  }

  // UPDATE
  async function updateHandler(id, todo, tag) {
    const resp = await fetch("http://localhost:3333/todolist/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo, tag }),
    });

    const data = await resp.json();
    // console.log("updated data : ", data);

    refresh();
    navigate("/");
  }

  // DELETE
  async function deleteHandler(id) {
    const resp = await fetch("http://localhost:3333/todolist/" + id, {
      method: "DELETE",
    });

    const data = await resp.json();
    // console.log("deleted data : ", data);

    refresh();
    navigate("/");
  }

  return (
    <>
      <Header></Header>
      <Body>
        <SideBar></SideBar>
        <Container>
          <DateComponent></DateComponent>
          <TodoComponent>
            <AddTodo onCreate={createHandler}></AddTodo>

            <CountTodoList todoListLength={todoListLength}></CountTodoList>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <TodoList
                    todoList={todoList}
                    onDelete={deleteHandler}
                    setTodoList={setTodoList}
                  ></TodoList>
                }
              ></Route>
              <Route
                path="/update/:id"
                element={<UpdateTodo onUpdate={updateHandler}></UpdateTodo>}
              ></Route>
            </Routes>
          </TodoComponent>

          <Pagination></Pagination>
        </Container>
      </Body>
    </>
  );
}

export default App;
