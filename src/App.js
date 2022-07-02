import { Link, Routes, Route } from "react-router-dom";
import styled, { css } from "styled-components";
// import logo from "./logo.svg";
// import "./App.css";

const Header = styled.header`
  border: 1px solid #c2bebe;
  width: 1000px;
  height: 70px;
`;
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
const AddTodoInput = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid red;
`;
const CountTodoList = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid blue;
`;
const TodoList = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid green;
`;
const Pagination = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid black;
`;

function App() {
  return (
    <>
      <Header>
        <h1>
          <Link to="/">Todo-List Title</Link>
        </h1>
      </Header>
      <Body>
        <SideBar></SideBar>
        <Container>
          <DateComponent></DateComponent>
          <TodoComponent>
            <AddTodoInput></AddTodoInput>
            <CountTodoList></CountTodoList>
            <TodoList></TodoList>
          </TodoComponent>

          <Pagination></Pagination>
        </Container>
      </Body>
    </>
  );
}

export default App;
