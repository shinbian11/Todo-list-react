import styled from "styled-components";

const TodoListStyled = styled.div`
  width: 800px;
  height: 300px;
  border: 1px solid green;
`;

function TodoList({ todoList }) {
  console.log(todoList);
  return (
    <TodoListStyled>
      {todoList.map((item) => (
        <div key={`${item.todo}-${item.tag}-${item.id}`}>
          {item.todo}, {item.tag}, {item.id}
        </div>
      ))}
    </TodoListStyled>
  );
}

export default TodoList;
