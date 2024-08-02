import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';
import "./CasteDivSection.css";

const CasteDivSection = () => {
  const [formData, setFormData] = useState({
    Brahmin: "",
    Kshatriya: "",
    Shudra: "",
    Vaishya: "",
  });

  const [chartData, setChartData] = useState({
    labels: ["Brahmin", "Kshatriya", "Shudra", "Vaishya"],
    datasets: [
      {
        label: "% Division",
        data: [0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const total =
      parseInt(formData.Brahmin) +
      parseInt(formData.Kshatriya) +
      parseInt(formData.Shudra) +
      parseInt(formData.Vaishya);

    if (total !== 100) {
      alert("The total percentage should be equal to 100%");
      return;
    }

    const data = {
      Brahmin: parseInt(formData.Brahmin),
      Kshatriya: parseInt(formData.Kshatriya),
      Shudra: parseInt(formData.Shudra),
      Vaishya: parseInt(formData.Vaishya),
    };

    try {
      await axios.post('http://localhost:5000/api/castes/add', data);
      alert('Data saved successfully');
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }

    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [data.Brahmin, data.Kshatriya, data.Shudra, data.Vaishya],
        },
      ],
    });
  };

  return (
    <div className="caste-div-section">
      <h2>
        Write % <span> Division </span> You Think You Are?
      </h2>
      <div className="form-chart-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="brahmin">Brahmin:</label>
            <input
              type="number"
              id="brahmin"
              name="Brahmin"
              value={formData.Brahmin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="kshatriya">Kshatriya:</label>
            <input
              type="number"
              id="kshatriya"
              name="Kshatriya"
              value={formData.Kshatriya}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shudra">Shudra:</label>
            <input
              type="number"
              id="shudra"
              name="Shudra"
              value={formData.Shudra}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vaishya">Vaishya:</label>
            <input
              type="number"
              id="vaishya"
              name="Vaishya"
              value={formData.Vaishya}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
        <div className="chart">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default CasteDivSection;
