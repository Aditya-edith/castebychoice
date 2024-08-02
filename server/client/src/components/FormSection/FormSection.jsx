import React, { useState } from "react";
import "./FormSection.css";
import formSectionImage from "./form-section-image.png";

const professionData = {
  "IT Engineer": {
    Brahmin: "50%",
    Kshatriya: "20%",
    Shudra: "10%",
    Vaishya: "20%",
  },
  "Marketing Manager": {
    Brahmin: "30%",
    Kshatriya: "25%",
    Shudra: "20%",
    Vaishya: "25%",
  },
  Teacher: {
    Brahmin: "60%",
    Kshatriya: "10%",
    Shudra: "10%",
    Vaishya: "20%",
  },
  "Founder (Entrepreneur)": {
    Brahmin: "30%",
    Kshatriya: "40%",
    Shudra: "20%",
    Vaishya: "10%",
  },
  Journalist: {
    Brahmin: "40%",
    Kshatriya: "20%",
    Shudra: "20%",
    Vaishya: "20%",
  },
  Politician: {
    Brahmin: "20%",
    Kshatriya: "50%",
    Shudra: "10%",
    Vaishya: "20%",
  },
  Sportsperson: {
    Brahmin: "10%",
    Kshatriya: "60%",
    Shudra: "20%",
    Vaishya: "10%",
  },
  "Restaurant Chef": {
    Brahmin: "20%",
    Kshatriya: "10%",
    Shudra: "50%",
    Vaishya: "20%",
  },
  Doctor: {
    Brahmin: "50%",
    Kshatriya: "20%",
    Shudra: "20%",
    Vaishya: "10%",
  },
  "Artist (e.g., Painter, Musician)": {
    Brahmin: "40%",
    Kshatriya: "10%",
    Shudra: "30%",
    Vaishya: "20%",
  },
};

const FormSection = () => {
  const [selectedProfession, setSelectedProfession] = useState("");

  const handleChange = (event) => {
    setSelectedProfession(event.target.value);
  };

  return (
    <div className="form-section">
      <form>
        <label htmlFor="profession">
          <h2>
            <span>Hey! </span> Select your Profession:
          </h2>
        </label>
        <select id="profession" name="profession" onChange={handleChange}>
          <option value="">Select a profession</option>
          {Object.keys(professionData).map((profession, index) => (
            <option key={index} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </form>
      {selectedProfession && (
        <div className="profession-data">
          <h2>{selectedProfession}</h2>
          <ul>
            {Object.entries(professionData[selectedProfession]).map(
              ([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
            )}
          </ul>
        </div>
      )}
      <div className="image-container">
        <img src={formSectionImage} alt="Form Section Image" />
      </div>
    </div>
  );
};

export default FormSection;
