import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useAppSelector } from "../../store/hooks";

const PieChart = () => {
  const { naira, dollar, euro } = useAppSelector(
    (state) => state.totalExpenses
  );
  const convertedNaira = naira / 300;
  const series = [convertedNaira, dollar, euro];

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

    colors: ["#1dcc70", "#ff396f", "#ffb400"],

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            show: true,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 40,
      height: 230,
      show: true,
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <ReactApexChart
        options={options as any}
        series={series}
        type="donut"
        width={300}
      />
    </Box>
  );
};

export default PieChart;
