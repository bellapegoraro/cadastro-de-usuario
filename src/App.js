import "./App.css";
import { useState, useEffect } from "react";
import UserForm from "./pages/UserForm";
import Login from "./pages/Login";
import { Switch, Link, Route, useHistory, useLocation } from "react-router-dom";
import Axios from "axios";
import Users from "./pages/Users";
import UserFeedbacks from "./pages/UserFeedbacks";
import FeedbackForm from "./pages/FeedbackForm";

const App = () => {
  const history = useHistory();
  const [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();

  const validation = () => {
    const { pathname } = location;
    const token = window.localStorage.getItem("authToken");

    if (pathname !== "/register" && pathname !== "/") {
      if (!token) {
        setAuthenticate(false);
        history.push("/");
        return;
      }
    }

    setAuthenticate(true);
    history.push(pathname);
  };

  useEffect(() => {
    validation();
  }, [location.pathname]);

  return (
    <div>
      <Switch>
        <Route path="/register">
          <UserForm />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/users">
          <Users auth={authenticate} />
        </Route>
        <Route exact path="/user-feedbacks/:id">
          <UserFeedbacks />
        </Route>
        <Route exact path="/new-feedback/:id">
          <FeedbackForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
