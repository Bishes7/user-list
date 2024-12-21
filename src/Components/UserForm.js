import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  // first we need to make a state
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="w-50 p-5 m-auto rounded-3 shadow-lg mt-5">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row gap-2">
          <div className="col-md-3">
            <select
              onChange={handleOnChange}
              name="gender"
              id="inputState"
              class="form-select"
              defaultValue={""}
            >
              <option value={""}>Choose...</option>
              <option value={"M"}>Mr</option>
              <option value={"F"}>Mrs</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              onChange={handleOnChange}
              name="name"
              required
              type="text"
              className="form-control"
              placeholder="Add name"
              aria-label="Add name"
            />
          </div>
          <div className="col d-grid">
            <button className="btn btn-primary">Add Users</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
