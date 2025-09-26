import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useNavigate } from "react-router-dom";

const WasteAnalyticsDashboard = () => {
  const [distance, setDistance] = useState(45);
  const navigate = useNavigate(); // For navigation

  const staticBinData = [
    { locality: "New Delhi", bins: 35, fillPercentage: 65, wastePercentage: 20, avgTimeToFull: 12 },
    { locality: "South Delhi", bins: 60, fillPercentage: 82, wastePercentage: 25, avgTimeToFull: 10 },
    { locality: "West Delhi", bins: 50, fillPercentage: 71, wastePercentage: 30, avgTimeToFull: 15 },
    { locality: "East Delhi", bins: 40, fillPercentage: 88, wastePercentage: 25, avgTimeToFull: 8 },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/data");
      const data = await response.json();
      setDistance(parseInt(data.distance, 10) || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 200);
    return () => clearInterval(interval);
  }, []);

  let chandniChowkFillPercentage = Math.max(0, ((20 - distance) / 20*4) * 10);
  if(distance>21) chandniChowkFillPercentage=0
  let chandniChowkWastePercentage = Math.max(0, ((20 - distance) / (20)) * 10);
  const chandniChowkAvgTimeToFull = 5 + Math.max(0, ((20 - distance) / 20) * 5);

  const binData = [
    { locality: "Chandni Chowk", bins: 4, fillPercentage: chandniChowkFillPercentage+40, wastePercentage: chandniChowkWastePercentage, avgTimeToFull: chandniChowkAvgTimeToFull },
    ...staticBinData,
  ];

  const pieData = [
    { name: "Recyclable Waste", value: 60 },
    { name: "Non-Recyclable Waste", value: 40 },
  ];

  const lineData = [
    { time: "6 AM", efficiency: 80 },
    { time: "9 AM", efficiency: 70 },
    { time: "12 PM", efficiency: 60 },
    { time: "3 PM", efficiency: 75 },
    { time: "6 PM", efficiency: 85 },
    { time: "9 PM", efficiency: 90 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  // Handle click event for "Current Fill %" bar (only for Chandni Chowk)
  const handleBarClick = (data) => {
    if (data.locality === "Chandni Chowk") {
      navigate("/bins/chandni-chowk");
    }
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">Total Bins</h2>
          <div className="text-3xl font-bold text-blue-600">{binData.reduce((acc, curr) => acc + curr.bins, 0)}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">Average Fill Level</h2>
          <div className="text-3xl font-bold text-green-600">
            {Math.round(binData.reduce((acc, curr) => acc + curr.fillPercentage, 0) / binData.length)}%
          </div>
        </div>
      </div>

      {/* Map Image + Bins by Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-center">
          <img src="../Screenshot_2025-02-09_055212-removebg-preview.png" alt="Map" className="w-[350px] h-[350px] rounded-md" />
          <h1 className="text-center font-mono text-xl">Delhi</h1>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-2 text-center">Bins by Location</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={binData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="locality" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="bins" fill="#0088FE" name="Total Bins" />
              <Bar
                dataKey="fillPercentage"
                fill="#00C49F"
                name="Current Fill %"
                onClick={(_, index) => handleBarClick(binData[index])} // Click event for Chandni Chowk
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Other Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-2 text-center">Waste Contribution by Area</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={binData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="locality" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="wastePercentage" fill="#FFBB28" name="Waste Contribution (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-2 text-center">Average Time to Full Capacity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={binData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="locality" />
              <YAxis domain={[0, 24]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgTimeToFull" fill="#FF8042" name="Avg Time to Full (hours)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart & Line Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-2 text-center">Recyclable vs. Non-Recyclable Waste</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={70} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-2 text-center">Waste Collection Efficiency Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[50, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="efficiency" stroke="#FF8042" strokeWidth={2} name="Collection Efficiency (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WasteAnalyticsDashboard;
