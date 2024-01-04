import React, { useState } from "react";

const FormValidate = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passerror, setPassError] = useState(false);

  const handleSubmit = (e) => {
    if (user < 3 || password < 3) {
      alert("Enter Correct Values");
    } else {
      alert("Ok");
    }
    e.preventDefault();
  };

  const userHandler = (e) => {
    const item = e.target.value;
    if (item.length < 3) {
      setError(true);
      console.log("invalid");
    } else {
      setError(false);
    }
    setUser(item);
  };

  const passwordHandler = (e) => {
    const item = e.target.value;
    if (item.length < 3) {
      setPassError(true);
      console.log("invalid");
    } else {
      setPassError(false);
    }
    setPassword(item);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" placeholder="username" onChange={userHandler} />
          {error ? <span>user not valid</span> : ""}
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            onChange={passwordHandler}
          />
          {passerror ? <span>password not valid</span> : ""}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidate;
