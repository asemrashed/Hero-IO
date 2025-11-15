import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ app }) => {
  const data = [...app.ratings].reverse();
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-lg md:text-2xl font-bold">Ratings</h1>
      <ResponsiveContainer height={300} className='w-full mx-auto'>
        <BarChart data={data} layout="vertical">
          <YAxis type="category" dataKey="name" stroke="#627382" width={50} />
          <XAxis type="number" dataKey="count" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
