import { DataGrid } from "@material-ui/data-grid";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "email", headerName: "E-mail", width: 250 },
];

const Users = ({ auth }) => {
  const history = useHistory();
  const [userList, setUserList] = useState([]);

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
  }, []);

  return (
    <DataGrid
      autoHeight
      pagination
      columns={columns}
      loading={userList.length === 0 ? true : false}
      rows={userList}
      pageSize={10}
      rowsPerPageOptions={[10, 50, 100]}
      onRowClick={(param) => {
        console.log(param);
        const id = param.data.id;
        Axios.get(`https://ka-users-api.herokuapp.com/users/${id}`).then(
          (res) => {
            if (res.status === 200) {
              history.push("/user-feedback");
            }
          }
        );
      }}
    />
  );
};

export default Users;
