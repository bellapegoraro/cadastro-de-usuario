import { Link } from "react-router-dom";
import { HeaderStyle } from "./headerStyle";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/register">
        <span>Novo usuário</span>
      </Link>
      <Link to="/">
        <span>Login</span>
      </Link>
    </HeaderStyle>
  );
};

export default Header;
