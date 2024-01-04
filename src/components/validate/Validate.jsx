import React, { useState } from "react";

const Validate = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (/\S+@\S\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "password should be atleast 6 character or more";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password not matched";
    } else {
      validationErrors.confirmPassword = "cdd";
    }
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        {error.username && <span>{error.username}</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {error.email && <span>{error.email}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {error.password && <span>{error.password}</span>}
        <input
          type="password"
          name="password"
          placeholder="confirm password"
          onChange={handleChange}
        />
        {error.confirmPassword && <span>{error.confirmPassword}</span>}
        <button className="fbtn">Submit</button>
      </form>
    </div>
  );
};

export default Validate;
