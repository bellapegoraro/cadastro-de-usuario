import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: #eaeaea;
  justify-content: space-evenly;
  height: 40vh;
  margin: 40% auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.6);

  h2 {
    text-align: center;
    color: #444444;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 30vh;
  }

  input {
    width: 55vw;
    height: 4.5vh;
  }

  button {
    width: 45vw;
    height: 4.5vh;
    background-color: #00d1cd;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 0.8em;
    color: #444444;
  }

  input,
  button {
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 14px 0px rgba(169, 150, 150, 0.6);
  }

  @media (min-width: 767px) {
    margin: 25% auto;
    width: 50vw;
    height: 40vh;

    h2 {
      margin-bottom: 0;
    }

    form {
      width: 50vw;
      height: 25vh;
    }
    input {
      height: 5vh;
      width: 35vw;
    }
    button {
      height: 5vh;
      width: 30vw;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 0.8em;
    }
  }

  @media (min-width: 1024px) {
    margin: 13% auto;
    width: 28vw;
    height: 40vh;

    h2 {
      margin-bottom: 0;
      text-align: center;
      color: #444444;
    }

    form {
      margin-top: 0;
      width: 28vw;
    }

    input {
      width: 20vw;
    }

    button {
      width: 15vw;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 0.8em;
    }
  }
`;
