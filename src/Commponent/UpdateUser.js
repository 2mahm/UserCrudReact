import React, { useEffect, useState } from "react";

export default function UpdateUser({ user, updateUser }) {
  const [name, setname] = useState("");
  useEffect(() => {
    setname(user.name);
  }, []);
  const handelname = (e) => {
    setname(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    updateUser(name);
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
      <button className="btn btn-info" type="submit">
        Update User
      </button>
    </form>
  );
}
