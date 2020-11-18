import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: #eaeaea;
  justify-content: space-evenly;
  height: 45vh;
  margin: 40% auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.6);

  h2 {
    margin-bottom: 0;
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
    width: 45vw;
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

  button:hover {
    background-color: #00deda;
    color: #222222;
  }

  button {
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 14px 0px rgba(169, 150, 150, 0.6);
  }

  @media (min-width: 767px) {
    margin: 15% auto;
    width: 50vw;
    height: 55vh;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
    }

    form {
      width: 50vw;
      height: 25vh;
    }

    input {
      width: 30vw;
    }

    button {
      height: 5vh;
      width: 30vw;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 0.8em;
    }

    button:hover {
      background-color: #00deda;
      color: #222222;
    }
  }

  @media (min-width: 1024px) {
    margin: 7% auto;
    width: 25vw;
    height: 50vh;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      color: #444444;
    }

    form {
      margin-top: 0;
      width: 25vw;
    }

    input {
      width: 18vw;
    }

    button {
      margin-top: 5%;
      width: 15vw;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 0.8em;
      height: 7vh;
    }

    button:hover {
      background-color: #00deda;
      color: #222222;
    }
  }
`;
