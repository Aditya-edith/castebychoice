import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./Header.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Header = () => {
  const [chartData, setChartData] = useState({
    labels: ["Brahmin", "Kshatriya", "Shudra", "Vaishya"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        const users = response.data;
        
        const casteCounts = { Brahmin: 0, Kshatriya: 0, Shudra: 0, Vaishya: 0 };
        users.forEach(user => {
          if (casteCounts[user.caste] !== undefined) {
            casteCounts[user.caste]++;
          }
        });

        setChartData({
          labels: Object.keys(casteCounts),
          datasets: [
            {
              data: Object.values(casteCounts),
              backgroundColor: ["#ff6388", "#36a2eb", "#cc65fe", "#ffce56"],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="header">
      <div className="sec-1">
        <h2>Peoples Inborn Caste</h2>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Header;
