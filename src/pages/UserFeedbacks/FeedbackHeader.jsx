import { HeaderStyle } from "../../components/header/headerStyle";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FeedbackHeader = ({ id }) => {
  const history = useHistory();
  return (
    <HeaderStyle>
      <Button onClick={() => history.push(`/users`)}>Voltar</Button>
      <Button onClick={() => history.push(`/new-feedback/${id}`)}>
        Novo Feedback
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

export default FeedbackHeader;
