import { useState } from "react";
import "./App.css";
import AddUser from "./Commponent/AddUser";
import PageTitle from "./Commponent/PageTitle";
import User from "./Commponent/User";
import UpdateUser from "./Commponent/UpdateUser";

function App() {
  const [users, setuser] = useState([
    { id: 1, name: "mahmoud" },
    { id: 2, name: "Mena" },
    { id: 3, name: "Aya" },
  ]);
  const [state, setState] = useState(false);
  const [user, setUser] = useState({});
  const handleAddUser = (newUser) => {
    setuser([...users, newUser]);
  };
  const deleateuser = (id) => {
    setuser(users.filter((user) => user.id !== id));
  };
  const editUser = (id) => {
    let user = users.find((item) => item.id == id);
    setState(true);
    setUser(user);
  };
  const updateUser = (name) => {
    // setuser(users.map((item)=>item.id===newUser.id?newUser:item))
    let updateUser = users.map((item) => {
      if (item.id == user.id) {
        user.name = name;
        return user;
      }
      return item;
    });
    setState(false);
    setuser(updateUser);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <PageTitle title="ALL USERS" />
          {!state ? (
            <AddUser handleAddUser={handleAddUser} />
          ) : (
            <UpdateUser user={user} updateUser={updateUser} />
          )}
          {/* <AddUser handleAddUser={handleAddUser}/> */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <User
                    id={item.id}
                    name={item.name}
                    key={item.id}
                    deleateuser={deleateuser}
                    editUser={editUser}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
