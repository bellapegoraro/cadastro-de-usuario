import styled from "styled-components";

export const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: #eaeaea;
  justify-content: space-evenly;
  height: 60vh;
  margin: 30% auto;
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
    height: 60vh;
  }

    input {
      width: 30vw;
    }

    button {
      background-color: #00d1cd;
      color: #444444;
      font-weight: bolder;
      text-transform: uppercase;
    }

    button:hover {
      background-color: #00deda;
      color: #222222;
    }

    @media (min-width: 767px) {
      margin: 15% auto;
      width: 50vw;
      height: 70vh;
    }

    @media(min-width: 1024px){
       margin: 7% auto;
       width: 30vw;

       form{
           width: 30vw;
       }
       
       input{
           width: 15vw;
       }
    }
  }
`;
