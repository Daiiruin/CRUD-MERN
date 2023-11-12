import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./updateUser.scss";

export const UpdateUser = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const UpdateUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createUserBackground">
      <div className="formContainer">
        <form onSubmit={UpdateUser}>
          <div className="buttonTitle">
            <Link to="/" className="backButton">
              <IoIosArrowBack size={18} color={"white"} />
            </Link>
            <h2>Update User</h2>
          </div>

          <div className="labelInput">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter a name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="labelInput">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter an email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="labelInput">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter an age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="submitButton">Update</button>
        </form>
      </div>
    </div>
  );
};
