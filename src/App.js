import "./App.css";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link className="links" to="/register">
          Novo usuário
        </Link>
        <Link className="links" to="/">
          Login
        </Link>
      </header>
      <div>
        <Switch>
          <Route path="/register">
            <UserForm />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
