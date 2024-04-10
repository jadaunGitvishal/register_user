// src/components/Form.js
import React, { useState } from "react";
import "./Form.css"; // Import the CSS file

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      mobile: "",
      email: "",
      address: "",
      state: "",
      district: "",
      pincode: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add
        </button>
        <button type="button" className="form-button">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;

// import React, { useState } from "react";
// import "./Form.css"; // Import the CSS file
// import UserDetails from "./UserDetails";

// const Form = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     address: "",
//     state: "",
//     district: "",
//     pincode: "",
//   });

//   const [user, setUser] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add user");
//       }

//       const data = await response.json();
//       const userId = data.userId;

//       // Reset form data after successful submission

//       setFormData({
//         name: "",
//         mobile: "",
//         email: "",
//         address: "",
//         state: "",
//         district: "",
//         pincode: "",
//       });

//       // Fetch the newly added user from the server
//       const userResponse = await fetch(
//         `http://localhost:5000/api/users/${userId}`
//       );
//       const userData = await userResponse.json();
//       setUser(userData.user);

//       // Notify parent component that user has been added
//       onSubmit();
//     } catch (error) {
//       console.error("Error adding user:", error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="district"
//           placeholder="District"
//           value={formData.district}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <input
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           value={formData.pincode}
//           onChange={handleChange}
//           className="form-input"
//         />
//         <button type="submit" className="form-button">
//           Add
//         </button>
//         <button
//           type="button"
//           className="form-button"
//           onClick={() =>
//             setFormData({
//               name: "",
//               mobile: "",
//               email: "",
//               address: "",
//               state: "",
//               district: "",
//               pincode: "",
//             })
//           }
//         >
//           Clear
//         </button>
//       </form>
//       {/* Display user details if user state is not null */}
//       {user && <UserDetails user={user} />}
//     </div>
//   );
// };

// export default Form;
