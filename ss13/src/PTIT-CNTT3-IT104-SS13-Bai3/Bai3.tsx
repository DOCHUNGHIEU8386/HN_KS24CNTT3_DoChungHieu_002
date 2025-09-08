import React, { useState } from "react";

const Bai3 = () => {
  const [users] = useState([
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Mary", age: 25 },
    { id: 3, name: "Jane", age: 20 },
  ]);

  return (
    <div>
      <h2>Danh sách Users</h2>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bai3;
