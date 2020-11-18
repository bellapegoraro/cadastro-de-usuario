import styled from "styled-components";

export const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  background-color: #eaeaea;
  justify-content: center;
  height: 70vh;
  margin: 25% auto;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.6);

  h2 {
    margin-top: 0;
    text-align: center;
    color: #444444;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    color: #555555;
  }

  input {
    width: 50vw;
  }

  button {
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 14px 0px rgba(169, 150, 150, 0.6);
  }

  button {
    width: 45vw;
    height: 5vh;
    background-color: #00d1cd;
    color: #444444;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  p {
    text-align: center;
    line-height: 0.7em;
    font-size: 0.6em;
    color: red;
  }

  @media (min-width: 767px) {
    margin: 17% auto;
    width: 45vw;
    height: 80vh;

    h2 {
      margin-top: 0;
    }
    form {
      height: 60vh;
    }

    button {
      width: 20vw;
      height: 5vh;
    }

    button:hover {
      color: #222222;
      background-color: #00deda;
    }
  }

  @media (min-width: 1024px) {
    margin: 7% auto;
    width: 25vw;
    height: 75vh;

    button {
      width: 10vw;
      height: 5vh;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
      font-size: 0.8em;
    }

    input {
      width: 15vw;
    }

    button:hover {
      color: #222222;
      background-color: #00deda;
    }
  }
`;
