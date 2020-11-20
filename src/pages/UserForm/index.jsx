import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserFormContainer } from "./userFormStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const UserForm = () => {
  const [error, setError] = useState({ valid: false });
  const history = useHistory();
  const classes = useStyles();
  const schema = yup.object().shape({
    user: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não batem")
      .required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const url = "https://ka-users-api.herokuapp.com/users";
    const newUser = { user: data };
    Axios.post(url, newUser)
      .then((res) => {
        if (res.status === 201) {
          history.push("/");
        }
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };
  return (
    <>
      <Header></Header>
      <UserFormContainer className="divUserForm">
        <h2>Novo usuário: </h2>
        <form className="userForm" onSubmit={handleSubmit(handleForm)}>
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
          {/* {error && <span>Usuário já utilizado</span>} */}
          <TextField
            margin="normal"
            variant="outlined"
            name="name"
            label="Nome"
            error={!!errors.name}
            helperText={errors.name?.message}
            size="small"
            inputRef={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaceIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            variant="outlined"
            name="email"
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            size="small"
            inputRef={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
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
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            variant="outlined"
            name="confirmPassword"
            label="Confirmar senha"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
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
          <Button
            type="submit"
            variant="contained"
            size="small"
            className={classes.margin}
          >
            Cadastrar
          </Button>
        </form>
      </UserFormContainer>
    </>
  );
};

export default UserForm;
