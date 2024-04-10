// import React from "react";
import "./UserDetails.css"; // Import the CSS file

const UserDetails = ({ user }) => {
  // Check if user object is null or undefined
  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="user-details-container">User details not available</div>
    );
  }

  return (
    <div className="user-details-container">
      <div className="user-details-row">
        <span className="user-details-label">ID:</span> {user.id}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">Name:</span> {user.name}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">Mobile:</span> {user.mobile}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">Email:</span> {user.email}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">Address:</span> {user.address}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">State:</span> {user.state}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">District:</span> {user.district}
      </div>
      <div className="user-details-row">
        <span className="user-details-label">Pincode:</span> {user.pincode}
      </div>
      <div className="user-details-row">
        <button className="user-details-button">Edit</button>
        <button className="user-details-button">Delete</button>
      </div>
    </div>
  );
};

export default UserDetails;

// import React, { useState, useEffect } from "react";
// import "./UserDetails.css"; // Import the CSS file

// const UserDetails = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/users");
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="user-details-container">
//       {users.length === 0 ? (
//         <div>No users available</div>
//       ) : (
//         users.map((user) => (
//           <div key={user.id} className="user-details-row">
//             <span className="user-details-label">ID:</span> {user.id}
//             <span className="user-details-label">Name:</span> {user.name}
//             <span className="user-details-label">Mobile:</span> {user.mobile}
//             <span className="user-details-label">Email:</span> {user.email}
//             <span className="user-details-label">Address:</span> {user.address}
//             <span className="user-details-label">State:</span> {user.state}
//             <span className="user-details-label">District:</span>{" "}
//             {user.district}
//             <span className="user-details-label">Pincode:</span> {user.pincode}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default UserDetails;
