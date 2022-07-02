import styled from "styled-components";

const DateComponentStyled = styled.div`
  width: 800px;
  height: 100px;
  border: 1px solid black;
`;

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// let day = new Date(2022, 6, 2);
let day = new Date(); // 오늘 날짜

function DateComponent() {
  return (
    <DateComponentStyled>
      <h3>{`${dayNames[day.getDay()]}`}</h3>
      <p>{`${
        monthNames[day.getMonth()]
      } ${day.getDate()}, ${day.getFullYear()}`}</p>
    </DateComponentStyled>
  );
}
export default DateComponent;
