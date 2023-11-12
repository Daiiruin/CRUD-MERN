import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./users.scss";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        {
          console.log(res);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="usersBackground">
      <div className="tableContainer">
        <Link to="/createUser" className="addButton">
          Add +
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td className="showEmail">{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/updateUser/${user._id}`} className="editButton">
                    <AiFillEdit color={"#ffd700"} size={18} />
                  </Link>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="deleteButton"
                  >
                    <AiFillDelete color={"white"} size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
