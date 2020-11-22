import { HeaderStyle } from "../../components/header/headerStyle";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const UsersHeader = () => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <Button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Logout
      </Button>
    </HeaderStyle>
  );
};

const Button = styled.button`
  border: none;
  background-color: #00d1cd;
  text-transform: uppercase;
  font-weight: bolder;
  color: #444444;

  :hover {
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
`;

export default UsersHeader;
