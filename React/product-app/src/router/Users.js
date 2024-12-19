import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Users = () => {
  let URL = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(URL).then((response) => {
      //  console.log(response.data.users);
      setUsers(response.data.users);
    });
  }, []);
  console.log(users);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {users.map((user) => {
        return (  
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              width: "250px",
              height: "250px",
            }}
          >
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <NavLink to={`${user.id}`}>
              <img src={user.image} />
            </NavLink>
            <p>Age: {user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
