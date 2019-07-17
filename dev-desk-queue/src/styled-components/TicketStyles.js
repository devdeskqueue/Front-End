import styled from "styled-components";
import { Link } from "react-router-dom";
import { flex, color, fontSizing, device } from "./theme";

export const Container = styled(Link)`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 20% 10% 15% 15% 15% 10% 10%;

  width: 100%;

  border: 1px solid black;

  margin: 0 0 5px 0;
  padding: 5px 15px;

  color: ${color.secondaryTextColor};
  font-size: ${fontSizing.s};
  text-decoration: none;

  cursor: pointer;

  background-color: ${color.ticketColor};

  &:hover {
    background-color: ${color.ticketColorHover};
  }

  &:nth-child(odd) {
    background-color: ${color.ticketColor_2};
  }

  &:nth-child(odd):hover {
    background-color: ${color.ticketColorHover};
  }

  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 10px rgba (0, 0, 0, 0.5);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  button {
    cursor: pointer;
    background-color: #e4e3a0;

    border: 1px solid black;

    height: 25px;

    -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 4px 4px 10px rgba (0, 0, 0, 0.5);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }

  div:nth-child(odd) {
    font-weight: bold;
  }

  @media (max-width: 800px) {
    grid-template-columns: 8% 27% 15% 20% 15% 15%;
    div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 8% 27% 15% 20% 15% 15%;
    /* grid-template-rows: auto auto; */

    button {
      /* grid-column-start: 2;
      grid-column-end: 6; */
      margin: 5px;
      width: 25px;
      height: 30px;
    }
  }
`;

export const Status = styled.div`
  ${flex("row", "center", "center")}
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;

  border: 1px solid black;
  border-radius: 3px;

  background-color: ${props =>
    props.closed ? color.ticketOpen : color.ticketClosed};
`;
