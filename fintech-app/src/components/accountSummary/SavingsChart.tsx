import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const data = [
  { name: "Naira", value: 400 },
  { name: "Dollar", value: 300 },
  { name: "Euro", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

export default function App() {
  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="100vh"
        sx={{
          background: "#6236ff",
          width: "100%",
        }}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <text
            x={200}
            y={200}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
          >
            Expenses
          </text>
        </PieChart>
      </Box>
    </>
  );
}
