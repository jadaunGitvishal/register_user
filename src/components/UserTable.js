// src/components/UserTable.js
import React from "react";
import UserDetails from "./UserDetails";

const UserTable = ({ users }) => {
  return (
    <div>
      {/* <h2>User Details</h2> */}
      {users.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserTable;
