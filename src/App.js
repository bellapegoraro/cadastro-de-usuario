import "./App.css";
import { useState, useEffect } from "react";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import Axios from "axios";
import Users from "./pages/Users";
import UserFeedbacks from "./pages/UserFeedbacks";
import FeedbackForm from "./pages/FeedbackForm";

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
        <Route exact path="/user-feedbacks/:id">
          <UserFeedbacks token={token} />
        </Route>
        <Route exact path="/new-feedback/:id">
          <FeedbackForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
