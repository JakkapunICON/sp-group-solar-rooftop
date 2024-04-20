import ReactApexChart from "react-apexcharts";

// data
import {
  NavigateAreaApexOpts,
  areaApexOpts,
  areaNullValueOpts,
  dateTimeAreaApexOpts,
  dateTimeAreaApexOpts2,
  irregularTimeSeriesOpts,
  spilineAreaApexOpts,
  stackedAreaOpts,
} from "./data";
import { ComponentContainerCard, PageBreadcrumb } from "@src/components";
import { Box, Button, Grid } from "@mui/material";
import { ApexOptions } from "apexcharts";
import TopSellingProducts from "./ecommerce/components/TopSellingProducts";

// components
//GroupedBar
const groupBarOpts: ApexOptions = {
  chart: {
    height: 380,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff"],
    },
  },
  colors: ["#2eb384", "#4a2db5"],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  series: [
    {
      name: "Series 1",
      data: [
        44,

        // 55, 41, 64, 22, 43, 21
      ],
    },
    {
      name: "Series 2",
      data: [
        53,
        // 32, 33, 52, 13, 44, 32
      ],
    },
  ],
  xaxis: {
    categories: [
      2001,
      // 2002, 2003, 2004, 2005, 2006, 2007
    ],
  },
  legend: {
    offsetY: 5,
  },
  // states: {
  //     hover: {
  //         filter: 'none'
  //     }
  // },
  grid: {
    borderColor: "#f1f3fa",
    padding: {
      bottom: 5,
    },
  },
};

const SitePrimeBox = () => {
  return (
    <>
      <PageBreadcrumb title="Solar Rooftop - Prime Box ( 634.5 kWp )" subName="Prime Box" />
      <Grid container spacing={3}>
        <Grid item xl={6} xs={12}>
          <ComponentContainerCard title="Grid vs Self Consumption">
            <Box width={"100%"}>
              <ReactApexChart
                className="apex-charts"
                options={dateTimeAreaApexOpts}
                height={350}
                series={dateTimeAreaApexOpts.series}
                type="area"
              />
            </Box>
          </ComponentContainerCard>
        </Grid>
        <Grid item xl={6} xs={12}>
          <ComponentContainerCard title="Power Production">
            <Box width={"100%"}>
              <ReactApexChart
                className="apex-charts"
                options={dateTimeAreaApexOpts2}
                height={350}
                series={dateTimeAreaApexOpts2.series}
                type="area"
              />
            </Box>
          </ComponentContainerCard>
        </Grid>
        <Grid item xl={6} xs={12}>
          <ComponentContainerCard title="Energy Summary">
            <Box width={"100%"}>
              <ReactApexChart
                className="apex-charts"
                options={groupBarOpts}
                height={380}
                series={groupBarOpts.series}
                type="bar"
              />
            </Box>
          </ComponentContainerCard>
        </Grid>
        <Grid item lg={6} xs={12}>
          <TopSellingProducts />
        </Grid>
      </Grid>
    </>
  );
};

export default SitePrimeBox;
