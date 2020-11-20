import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

import Header from "../../components/header";
import { LoginContainer } from "./loginStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Login = ({ callback }) => {
  const history = useHistory();
  const [error, setError] = useState({ status: false, message: "" });
  const classes = useStyles();

  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  //refatorar a handleForm
  const handleForm = (data) => {
    const url = "https://ka-users-api.herokuapp.com/authenticate";
    Axios.post(url, data)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
        history.push("/users");
      })
      .catch((error) => {
        if (error.response) {
          setError({
            status: true,
            message: "Usuário ou senha incorretos",
          });
        }
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <LoginContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            margin="normal"
            variant="outlined"
            name="user"
            label="Usuário"
            error={!!errors.user}
            helperText={errors.user?.message}
            size="small"
            inputRef={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            variant="outlined"
            name="password"
            label="Senha"
            error={!!errors.password}
            helperText={errors.password?.message}
            size="small"
            inputRef={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          {error.status && <span>{error.message}</span>}
          <Button
            type="submit"
            variant="contained"
            size="small"
            className={classes.margin}
          >
            Entrar
          </Button>
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
