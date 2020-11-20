import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import FeedbackHeader from "./FeedbackHeader";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "comment", headerName: "Comment", width: 250 },
  { field: "grade", headerName: "Grade", width: 250 },
];

const UserFeedbacks = () => {
  const [responseState, setResponse] = useState([]);
  const { id } = useParams();

  const getFeedbacks = async () => {
    const response = await Axios.get(
      `https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
      {
        headers: {
          Authorization: window.localStorage.getItem("authToken"),
        },
      }
    );
    setResponse([...responseState, ...response.data]);
  };
  useEffect(() => {
    getFeedbacks();
  }, []);
  return (
    <>
      <FeedbackHeader id={id} />
      <DataGrid
        autoHeight
        pagination
        columns={columns}
        loading={responseState.length === 0 ? true : false}
        rows={responseState}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 100]}
      />
    </>
  );
};

export default UserFeedbacks;
