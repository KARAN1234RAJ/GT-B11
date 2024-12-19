import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const { userId } = useParams();
  console.log("userId", userId);
  let URL = "https://dummyjson.com/users/";
  useEffect(() => {
    fetch(`${URL}/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }
  console.log(user);

  return (
    <div
      style={{
        marginLeft: "10px",
        marginTop: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: "90vh",
      }}
    >
      <h2>{user.id}</h2>
      <img src={user.image} height={250} width={250} />
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user?.address?.street}</p>
    </div>
  );
};

export default User;
