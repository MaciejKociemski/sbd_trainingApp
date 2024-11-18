import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Chart = ({ data }) => {
  if (!data || data.length < 2) return <p>Brak danych do wykresu.</p>;

  const headers = data[0];
  const chartData = data.slice(1).map((row) => {
    let obj = {};
    row.forEach((cell, index) => {
      obj[headers[index]] = cell;
    });
    return obj;
  });

  return (
    <BarChart width={600} height={300} data={chartData}>
      <XAxis dataKey={headers[0]} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={headers[1]} fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
