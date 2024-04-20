import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ComponentContainerCard, PageBreadcrumb } from "@src/components";
import Statistics from "./components/Statistics";
import RevenueChart from "./components/RevenueChart";
import TotalSalesChart from "./components/TotalSalesChart";
import TopSellingProducts from "./components/TopSellingProducts";
import RevenueByLocation from "./components/RevenueByLocation";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { LuArrowUp } from "react-icons/lu";
import ReactApexCharts from "react-apexcharts";

const Ecommerce = () => {
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

  const userApexOpts: ApexOptions = {
    chart: {
      height: 60,
      type: "bar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: ["#16a7e9"],
    series: [
      {
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
      },
    ],
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  return (
    <>
      <PageBreadcrumb title="Dashboard" />
      {/* <hr style={{ marginTop: "-10px" }} /> */}
      {/* <br /> */}

      <Statistics />
      <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item lg={4} xs={12} md={6}>
          <Card>
            <CardContent sx={{ padding: "24px" }}>
              <Box display={"flex"} alignItems={"center"}>
                <Box width={"50%"}>
                  <Typography
                    variant="body1"
                    component={"h5"}
                    sx={{ marginTop: 0, fontWeight: 500, color: "grey.700", textTransform: "uppercase" }}>
                    Active Users
                  </Typography>
                  <Typography
                    variant="h2"
                    color={"secondary"}
                    sx={{ fontSize: "28px", color: "grey.700", my: "12px", py: "2px" }}
                    id="active-users-count">
                    825
                  </Typography>
                  <Typography display={"flex"} flex={"wrap"} component={"p"} overflow={"hidden"}>
                    <Typography variant="body2" marginRight={"7px"} color={"success.main"}>
                      <LuArrowUp /> 3.27%
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      Since previous week
                    </Typography>
                  </Typography>
                </Box>
                <Box width={"50%"} textAlign={"end"}>
                  <ReactApexCharts
                    className="apex-charts"
                    options={userApexOpts}
                    series={userApexOpts.series}
                    type="bar"
                    height={60}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 0 }}>
        {/* <Grid item lg={8} xs={12}>
          <RevenueChart />
        </Grid> */}
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
        {/* <Grid item lg={4} xs={12}>
          <TotalSalesChart />
        </Grid> */}
        <Grid item lg={6} xs={12}>
          <TopSellingProducts />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} sx={{ mt: 0 }}>
        <Grid item lg={5} xs={12}>
          <TopSellingProducts />
        </Grid>
        <Grid item lg={7} xs={12}>
          <RevenueByLocation />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Ecommerce;
