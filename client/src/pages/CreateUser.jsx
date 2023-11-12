import axios from "axios";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import "./createUser.scss";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createUserBackground">
      <div className="formContainer">
        <form onSubmit={Submit}>
          <div className="buttonTitle">
            <Link to="/" className="backButton">
              <IoIosArrowBack size={18} color={"white"} />
            </Link>
            <h2>Create User</h2>
          </div>
          <div className="labelInput">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter a name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="labelInput">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter an email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="labelInput">
            <label>Age</label>
            <input
              type="text"
              placeholder="Enter an age..."
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};
