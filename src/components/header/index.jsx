import { Link } from "react-router-dom";
import { HeaderStyle, StyledLink } from "./headerStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <StyledLink to="/register">
        <span>Novo usuário</span>
      </StyledLink>
      <StyledLink to="/">
        <span>Login</span>
      </StyledLink>
    </HeaderStyle>
  );
};

export default Header;
