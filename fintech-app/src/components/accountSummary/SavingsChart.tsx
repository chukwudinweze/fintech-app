import { Box, Stack } from "@mui/system";
import { ResponsivePie } from "@nivo/pie";
import Typography from "@mui/material/Typography";

type dataProps = {
  id: string;
  label: string;
  value: number;
  //   color: string;
};

const data: dataProps[] = [
  {
    id: "Naira",
    label: "Naira",
    value: 290,
    // color: "#1dcc70",
  },
  {
    id: "Dollar",
    label: "Dollar",
    value: 303,
    // color: "#ff396f",
  },
  {
    id: "Euro",
    label: "Euro",
    value: 553,
    // color: "#6236ff",
  },
];
const SavingsChart = () => (
  <Box minHeight="100vh" sx={{ background: "#fff" }}>
    <Stack spacing={2}>
      <Box height="50vh" width="100vw">
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          //   arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              //   color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              //   color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              //   itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    // itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </Box>
      <Box padding="15px" marginBottom="30px">
        <Typography variant="body1">
          Dear valued customer, This month, we would like to inform you that you
          have experienced an increase in dollar transactions compared to other
          currencies. Specifically, on 28th of this month, you received an
          impressive sum of 238 dollars, which is a record high for your monthly
          payments. We hope this information is helpful in providing insight
          into your recent transaction activity.
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default SavingsChart;
