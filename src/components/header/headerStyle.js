import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.div`
  height: 3vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0 5px 0;
  background-color: #00d1cd;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.7);

  span {
    text-decoration: none;
    color: #444444;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 0.9em;
  }

  span:hover {
    color: white;
    cursor: pointer;
    bottom: 4px;
    border-bottom: 1px solid white;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
