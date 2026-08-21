import React, { useEffect, useState } from "react";
import { database } from "../src/signup page/configration/configer";
import { onValue, ref } from "firebase/database";

function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userRef = ref(database, "users");

    const unsubcribe = onValue(userRef, (snapshoot) => {
      const data = snapshoot.val();
      console.log(data);

      if (data) {
        const useraray = Object.entries(data).map(([id, users]) => ({
          id,
          ...users,
        }));
        setUsers(useraray);
        console.log(useraray);
      }else {
        setUsers([]);
      }
    });
return () => unsubcribe();

  }, []);

  return <div>

<table>
  <thead>
    <tr>


      <th>name</th>
      <th>email</th>
      <th>password</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
}

export default Userlist
