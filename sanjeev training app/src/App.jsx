import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });


  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
          

    console.log("Form submitted");
    console.log(formData);
    
  }

  return (
    <div>
      <h1>Welcome to the Sanjeev Training App</h1>
      <h2>Enter your details</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          id="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={formData.age}
          id="age"
          onChange={handleChange}
        />
        <input
          type="email"
          value={formData.email}
          id="email"
          onChange={handleChange}
        />
        <input
          type="number"
          value={formData.phone}
          id="phone"
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
