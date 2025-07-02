import React, { useState, useEffect } from "react";
import { IUsers } from "../models/IUsers";
import UsersService from "../services/UsersService";
import {Link} from 'react-router-dom'

interface IState {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [],
    errorMsg: "",
  });

  useEffect(() => {
    console.log("Fetching users...");
    setState({ ...state, loading: true });
    UsersService.getAllUsers()
      .then((res) => {
        console.log("Users fetched:", res.data);
        setState({ ...state, loading: false, users: res.data });
      })
      .catch((err) => {
        console.error("Error fetching users:", err.message);
        setState({ ...state, loading: false, errorMsg: err.message });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, users, errorMsg } = state;

  console.log("Users:", users);

  return (
    <>
      <div className="container">
        <h1>Data from APIs</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>

                    <Link to ={`Users/${user.id}`} 
                    className="text-decoration-none">
                      {user.name}
                    </Link>
                    </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;





