import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const series = [55, 13, 33];

const options = {
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    donut: {
      donut: {
        size: "85%",
        colors: {
          borderWidth: 0,
        },
      },
    },
  },

  labels: ["Naira", "Dollar", "Euro"],
  dataLabels: {
    enabled: true,
  },

  // colors: ["#1A73E8", "#B32824", "#7024b3"],

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 80,
    height: 230,
  },
};

const AreaChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      <ReactApexChart
        options={options as any}
        series={series}
        type="donut"
        width={380}
        // height={350}
      />
    </Box>
  );
};

export default AreaChart;
