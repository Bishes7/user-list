import React from "react";
import { FeMaleAvatar, MaleAvatar } from "./Avatars";

const UserTable = ({ userList }) => {
  return (
    <div className=" shadow-lg p-2 mt-5 rounded-3">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>
                  {item.gender === "M" ? <MaleAvatar /> : <FeMaleAvatar />}
                </td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
