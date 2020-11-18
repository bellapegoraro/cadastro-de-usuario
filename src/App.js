import "./App.css";
import { useState } from "react";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import Axios from "axios";

const App = () => {
  const history = useHistory();
  const [userList, setUserList] = useState([]);
  const [authenticate, setAuthenticate] = useState(undefined);

  const CheckingLoggedIn = () => {
    const token = window.localStorage.getItem("authToken");

    Axios.get("https://ka-users-api.herokuapp.com/users", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 400) {
          setUserList(res.data);
          history.push("/users");
        }
      })
      .catch((error) => {
        history.push("/");
      });
  };

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
            <Login callback={CheckingLoggedIn} />
          </Route>
          <Route exact path="/users">
            <div>Você está no user</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
