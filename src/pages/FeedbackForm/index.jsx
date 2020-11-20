import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FeedbackDiv } from "./feedbackStyle";
import FaceIcon from "@material-ui/icons/Face";
import InputAdornment from "@material-ui/core/InputAdornment";
import GradeIcon from "@material-ui/icons/Grade";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FeedbackForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    grade: yup
      .number()
      .typeError("Campo deve ser um número")
      .positive("Deve ser um número positivo")
      .integer("Deve ser um número positivo")
      .required("Campo obrigatório"),
    comment: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const newFeedback = { feedback: data };
    const token = window.localStorage.getItem("authToken");
    Axios.post(
      `https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
      newFeedback,
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((res) => {
      if (res.status === 201) {
        history.push(`/user-feedbacks/${id}`);
      }
    });
  };
  return (
    <FeedbackDiv>
      <h2>Novo feedback:</h2>
      <form onSubmit={handleSubmit(handleForm)}>
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
          inputRef={register}
          name="grade"
          margin="normal"
          variant="outlined"
          label="Nota"
          size="small"
          error={!!errors.grade}
          helperText={errors.grade?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <GradeIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          inputRef={register}
          name="comment"
          id="outlined-multiline-static"
          label="Comentário"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          variant="contained"
          size="small"
          className={classes.margin}
          type="submit"
        >
          enviar
        </Button>
      </form>
    </FeedbackDiv>
  );
};

export default FeedbackForm;
