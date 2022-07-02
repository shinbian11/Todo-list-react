import styled from "styled-components";
import { Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
const HeaderStyled = styled.header`
  border: 1px solid #c2bebe;
  width: 1000px;
  height: 70px;
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        <Link to="/">Todo-List Title</Link>
      </h1>
    </HeaderStyled>
  );
}

export default Header;
