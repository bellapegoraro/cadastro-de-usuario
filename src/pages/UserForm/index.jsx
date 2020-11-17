import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserForm = () => {
  const schema = yup.object().shape({
    user: yup
      .string()
      .min(6, "Nome de usuário deve conter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    name: yup
      .string()
      .matches(
        /^[a-zA-Z]+$/,
        "Nome não deve conter caracteres especiais ou números"
      )
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
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
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input name="user" placeholder="Usuário" ref={register} />
      <p style={{ color: "red" }}>{errors.user?.message}</p>
      <input name="name" placeholder="Nome e Sobrenome" ref={register} />
      <p style={{ color: "red" }}>{errors.name?.message}</p>
      <input name="email" placeholder="Email" ref={register} />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <input name="password" placeholder="Senha" ref={register} />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
      <input
        name="confirmPassword"
        placeholder="Confirme sua senha"
        ref={register}
      />
      <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;
