import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChandniChowkBins = () => {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(45);
  const [bins, setBins] = useState([
    { binId: "Bin 1", location: "Main Bazaar", fillLevel: 60 },
    { binId: "Bin 2", location: "Fatehpuri", fillLevel: 45 }, // Dynamic bin
    { binId: "Bin 3", location: "Red Fort Road", fillLevel: 70 },
    { binId: "Bin 4", location: "HauzKhas", fillLevel: 30 },
  ]);

  const fetchDistance = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/data");
      const data = await response.json();
      
      // Extract numeric distance from "5.3 | Location: ..." format
      let distanceValue = 0;
      if (typeof data.distance === 'string') {
        const match = data.distance.match(/[\d.]+/);
        distanceValue = match ? parseFloat(match[0]) : 0;
      } else {
        distanceValue = parseFloat(data.distance) || 0;
      }
      
      setDistance(distanceValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDistance();
    const interval = setInterval(fetchDistance, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let fatehpuriFillLevel = Math.max(0, ((20 - distance) / 20) * 100);
    if (distance < 10) fatehpuriFillLevel += 14;

    setBins((prevBins) =>
      prevBins.map((bin) =>
        bin.location === "Fatehpuri"
          ? { ...bin, fillLevel: fatehpuriFillLevel }
          : bin
      )
    );
  }, [distance]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Chandni Chowk - Individual Bin Details
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Bin ID</th>
              <th className="border border-gray-300 p-2">Location</th>
              <th className="border border-gray-300 p-2">Fill Level</th>
            </tr>
          </thead>
          <tbody>
            {bins.map((bin) => (
              <tr key={bin.binId} className="text-center">
                <td className="border border-gray-300 p-2">{bin.binId}</td>
                <td className="border border-gray-300 p-2">{bin.location}</td>
                <td className="border border-gray-300 p-2">{bin.fillLevel}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-center mb-4">
          Bin Fill Levels
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bins}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="binId" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="fillLevel" fill="#00C49F" name="Fill Level (%)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ChandniChowkBins;
