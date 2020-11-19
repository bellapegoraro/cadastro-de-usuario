import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const UserFeedbacks = ({ token }) => {
  const [responseState, setResponse] = useState([]);
  const { id } = useParams();
  const history = useHistory;
  const getFeedbacks = async () => {
    const response = await Axios.get(
      `https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setResponse([...responseState, ...response.data]);
  };
  useEffect(() => {
    getFeedbacks();
  }, []);
  console.log(responseState);
  return <div>IAI GALERAAAAAAAAAAAAAAAAAAAAAAAAAA</div>;
};

export default UserFeedbacks;
