import React, { useState } from "react";
import "./UserForm.css";
import userFormImage from "./userform.png";
import axios from "axios";

// Object containing all states of India
const states = {
  "Andhra Pradesh": "Andhra Pradesh",
  "Arunachal Pradesh": "Arunachal Pradesh",
  Assam: "Assam",
  Bihar: "Bihar",
  Chhattisgarh: "Chhattisgarh",
  Goa: "Goa",
  Gujarat: "Gujarat",
  Haryana: "Haryana",
  "Himachal Pradesh": "Himachal Pradesh",
  Jharkhand: "Jharkhand",
  Karnataka: "Karnataka",
  Kerala: "Kerala",
  "Madhya Pradesh": "Madhya Pradesh",
  Maharashtra: "Maharashtra",
  Manipur: "Manipur",
  Meghalaya: "Meghalaya",
  Mizoram: "Mizoram",
  Nagaland: "Nagaland",
  Odisha: "Odisha",
  Punjab: "Punjab",
  Rajasthan: "Rajasthan",
  Sikkim: "Sikkim",
  "Tamil Nadu": "Tamil Nadu",
  Telangana: "Telangana",
  Tripura: "Tripura",
  "Uttar Pradesh": "Uttar Pradesh",
  Uttarakhand: "Uttarakhand",
  "West Bengal": "West Bengal",
  "Andaman and Nicobar Islands": "Andaman and Nicobar Islands",
  Chandigarh: "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu":
    "Dadra and Nagar Haveli and Daman and Diu",
  Delhi: "Delhi",
  Lakshadweep: "Lakshadweep",
  Puducherry: "Puducherry",
};

// Object containing castes
const castes = {
  Brahmin: "Brahmin",
  Kshatriya: "Kshatriya",
  Shudra: "Shudra",
  Vaishya: "Vaishya",
};

const UserForm = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [caste, setCaste] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleCasteChange = (e) => setCaste(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, state, caste };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/add",
        newUser
      );
      alert(`User added: ${response.data}`);
    } catch (error) {
      console.error("There was an error adding the user!", error);
    }

    setName("");
    setState("");
    setCaste("");
  };

  return (
    <div className="userform-container">
      <div className="userform">
        <div className="userform-image">
          <img src={userFormImage} alt="User Form" />
        </div>
        <div className="userform-content">
          <h2>Personal Details</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <select
                id="state"
                value={state}
                onChange={handleStateChange}
                required
              >
                <option value="">Select State</option>
                {Object.entries(states).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="caste">Caste:</label>
              <select id="caste" value={caste} onChange={handleCasteChange}>
                <option value="">Select Caste</option>
                {Object.entries(castes).map(([key, value]) => (
                  <option key={key} value={value}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
