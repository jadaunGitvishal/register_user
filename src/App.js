// src/App.js
import React, { useState } from "react";
import BarChart from "./components/BarChart";
import Form from "./components/Form";
import UserTable from "./components/UserTable";
import Last7DaysChart from "./components/Last7DaysChart";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
  });

  const handleSubmit = (formData) => {
    const newUser = {
      id: Math.random(),
      ...formData,
    };
    setUsers([...users, newUser]);
  };

  const last7DaysCount = [10, 20, 30, 40, 50, 60, 70]; // Example data, replace with your actual data

  return (
    <div>
      <div>
        <Last7DaysChart last7DaysCount={last7DaysCount} />
        <BarChart data={[10, 20, 30, 40, 50, 60, 70]} />
      </div>
      <div>
        <Form onSubmit={handleSubmit} />

        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
