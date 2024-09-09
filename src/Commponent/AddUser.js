import React, { useState } from "react";

export default function AddUser({ handleAddUser }) {
  const [name, setname] = useState("");
  const handelname = (e) => {
    setname(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let user = {
      id: parseInt(Math.random() * 50000),
      name: name,
    };
    handleAddUser(user);
    setname("");
  };
  return (
    <form className="form border p-3 mb-3" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label className="mb-3">Type User Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handelname}
          className="form-control"
        />
      </div>
      <button className="btn btn-success" type="submit">
        Add User
      </button>
    </form>
  );
}
