import styled from "styled-components";

const CountTodoListStyled = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid blue;
`;

function CountTodoList({ todoListLength }) {
  return (
    <CountTodoListStyled>
      Todo 개수 : {todoListLength.toLocaleString()} 개
    </CountTodoListStyled>
  );
}
export default CountTodoList;
