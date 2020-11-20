import { HeaderStyle } from "../../components/header/headerStyle";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const UsersHeader = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Logout
      </button>
    </HeaderStyle>
  );
};

// const Button = styled.button`
//   border: none;
//   background-color: #00d1cd;
//   text-transform: uppercase;
//   font-weight: bolder;
//   color: #444444;

//   Button:hover {
//     color: white;
//     cursor: pointer;
//     bottom: 4px;
//     border-bottom: 1px solid white;
//   }

export default UsersHeader;
