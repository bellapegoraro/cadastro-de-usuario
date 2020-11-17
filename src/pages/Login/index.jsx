import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    user: yup
      .string()
      .min(6, "Nome de usuário deve conter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      )
      .required("Campo obrigatório"),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input name="user" placeholder="Usuário" ref={register} />
      <input name="password" placeholder="Senha" ref={register} />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
