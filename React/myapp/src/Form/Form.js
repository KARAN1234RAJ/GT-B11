import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", name);
//     setName("");
  };
  return (
    <div style={{ margin: "5%" }}>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <p>Entered name: {name}</p>
    </div>
  );
};

export default Form;
