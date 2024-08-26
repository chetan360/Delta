import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handelFormChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handelFormDefault = (event) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handelFormDefault}>
      <label htmlFor="fullname">Full Name: </label>
      <input
        type="text"
        placeholder="enter full name"
        value={formData.fullName}
        onChange={handelFormChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="enter username"
        value={formData.username}
        onChange={handelFormChange}
        id="username"
        name="username"
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password}
        onChange={handelFormChange}
        id="password"
        name="password"
      />
      <br />

      <button>Submit</button>
    </form>
  );
}
