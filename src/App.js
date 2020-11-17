import "./App.css";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/novo-usuário">Novo usuário</Link>
      <Link to="/">Login</Link>

      <Switch>
        <Route path="/novo-usuário">
          <UserForm />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
