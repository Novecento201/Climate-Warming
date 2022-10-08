import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import styled from "styled-components";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const ChartStyle = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LineChart = ({ chartData, api, isLoading }) => {
  const [data, setData] = useState([]);

  function checkData() {
    isLoading(false);
    if (api === "https://global-warming.org/api/temperature-api") {
      return setData({
        labels: chartData.result?.map((item) => item.time),
        datasets: [
          {
            label: "temperature",
            data: chartData.result?.map((item) => item.station),
            backgroundColor: "transparent",
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "lightblue",
            pointBackgroundColor: "#fff",
          },
        ],
      });
    } else if (api === "https://global-warming.org/api/co2-api") {
      return setData({
        labels: chartData.co2?.map((item) => item.year),
        datasets: [
          {
            label: "Carbon Dioxide",
            data: chartData.co2?.map((item) => item.cycle),
            backgroundColor: "transparent",
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "lightblue",
            pointBackgroundColor: "#fff",
          },
        ],
      });
    } else if (api === "https://global-warming.org/api/methane-api") {
      chartData.methane?.shift();
      return setData({
        labels: chartData.methane?.map((item) => item.date),
        datasets: [
          {
            label: "methane",
            data: chartData.methane?.map((item) => item.trend),
            backgroundColor: "transparent",
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "lightblue",
            pointBackgroundColor: "#fff",
          },
        ],
      });
    } else if (api === "https://global-warming.org/api/nitrous-oxide-api") {
      chartData.nitrous?.shift();
      return setData({
        labels: chartData.nitrous?.map((item) => item.date),
        datasets: [
          {
            label: "Nitrous",
            data: chartData.nitrous?.map((item) => item.trend),
            backgroundColor: "transparent",
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "lightblue",
            pointBackgroundColor: "#fff",
          },
        ],
      });
    } else if (api === "https://global-warming.org/api/arctic-api") {
      return setData({
        labels: chartData.arcticData?.map((item) => item.year),
        datasets: [
          {
            label: "extent",
            data: chartData.arcticData?.map((item) => item.extent),
            backgroundColor: "transparent",
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "lightblue",
            pointBackgroundColor: "#fff",
          },
        ],
      });
      isLoading(false);
    }
  }

  useEffect(() => {
    checkData();
  }, [chartData]);

  return (
    <ChartStyle>
      {data?.labels?.length > 0 && <Line data={data}></Line>}
    </ChartStyle>
  );
};

export default LineChart;
