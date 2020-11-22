import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { UserStyled, StyledDataGrid } from "./userStyle";
import UsersHeader from "./UsersHeader";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "email", headerName: "E-mail", width: 550 },
  {
    field: "feedback",
    headerName: "Feedback",
    width: 200,
    valueGetter: () => "Novo Feedback",
  },
];

const Users = ({ auth }) => {
  const history = useHistory();
  const [userList, setUserList] = useState([]);
  const [token, setToken] = useState("");

  const loadData = async () => {
    const token = window.localStorage.getItem("authToken");
    const response = await Axios.get(
      "https://ka-users-api.herokuapp.com/users",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setUserList([...userList, ...response.data]);
  };

  useEffect(() => {
    if (!auth || auth === undefined) {
      history.push("/");
      return;
    }
    loadData();
    setToken(window.localStorage.getItem("authToken"));
  }, []);

  return (
    <div>
      <UsersHeader />
      <StyledDataGrid
        autoHeight
        pagination
        columns={columns}
        loading={userList.length === 0 ? true : false}
        rows={userList}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        onRowClick={(param) => {
          const id = param.data.id;
          history.push(`/user-feedbacks/${id}`);
        }}
      />
    </div>
  );
};

export default Users;
