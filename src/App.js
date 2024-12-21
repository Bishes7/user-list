import logo from "./logo.svg";
import "./App.css";
import UserForm from "./Components/UserForm";
import UserTable from "./Components/UserTable";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    console.log(userObj);
    setUserList([...userList, userObj]);
  };

  return (
    <div className="container pt-4 text-center">
      <h2>User List</h2>
      <UserForm addUser={addUser} />

      <UserTable userList={userList} />
    </div>
  );
}

export default App;
