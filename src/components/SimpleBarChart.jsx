import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
//creamos el arreglo de objetos para el grafico con las siguientes propiedades
const data = [
  {
    name: "Genaro",
    age: 22,
    weight: 78,
  },
  {
    name: "Valentina",
    age: 21,
    weight: 80,
  },
  {
    name: "Facundo",
    age: 33,
    weight: 90,
  },
];
const SimpleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart data={data} width={500} height={300}>
        <CartesianGrid strokeDasharray="6 4 2 4 " />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={"weight"} fill="#8884d8" />
        <Bar dataKey={"age"} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
