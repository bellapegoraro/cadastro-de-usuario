import "./App.css";
import { useState, useEffect } from "react";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import Axios from "axios";
import Users from "./pages/Users";
import UserFeedbacks from "./pages/UserFeedbacks";

const App = () => {
  const history = useHistory();
  const [authenticate, setAuthenticate] = useState(false);
  const token = window.localStorage.getItem("authToken");

  const CheckingLoggedIn = () => {
    Axios.get("https://ka-users-api.herokuapp.com/users", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status !== 400) {
          setAuthenticate(true);
          history.push("/users");
        }
      })
      .catch((error) => {
        history.push("/");
      });
  };

  useEffect(() => {}, []);

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
            <Users auth={authenticate} />
          </Route>
          <Route exact path="/user-feedback/:id">
            <UserFeedbacks token={token} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
