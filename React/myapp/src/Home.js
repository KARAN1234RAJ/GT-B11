import React, { useState } from "react";

const Home = (props) => {
  const [data, setData] = useState(props.data);
  console.log(data);
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <div>
        {data.map((data) => (
          <h1 key={data.id}>{data.first_name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
