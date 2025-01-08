import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";

const RealTimeChart = () => {
  // Data stored directly in the file
  const chartData = {
    categories: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
      "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    waterLevels: [
      0.5, 1.2, 0.0, 0.8, 0.0, 2.5, 3.0, 1.7, 0.0, 0.3, 
      1.5, 2.0, 0.4, 0.0, 1.8, 2.1, 0.7, 0.0, 3.4, 2.8, 
      1.1, 0.0, 0.9, 0.2
    ]
  };

  const [categories, setCategories] = useState(chartData.categories);
  const [series, setSeries] = useState([
    { name: "Water Level", data: chartData.waterLevels }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWaterLevel = Math.random() * 5; // Generate random water level
      const updatedWaterLevels = [...series[0].data.slice(1), newWaterLevel];
      setSeries([{ name: "Water Level", data: updatedWaterLevels }]);
      setCategories([...categories.slice(1), getNextHour(categories.at(-1))]);
    }, 3000);

    return () => clearInterval(interval);
  }, [categories, series]);

  const getNextHour = (lastHour) => {
    const [hour, minute] = lastHour.split(":").map(Number);
    const nextHour = (hour + 1) % 24;
    return `${String(nextHour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  };

  useEffect(() => {
    Highcharts.chart("container", {
      chart: { type: "line" },
      title: { text: "Hourly Water Levels" },
      xAxis: { categories },
      yAxis: {
        title: { text: "Water Level (m)" },
        plotLines: [{
          color: "red",
          value: 1,
          width: 2,
          dashStyle: "Dash",
          label: { text: "Threshold (1 m)" }
        }]
      },
      series
    });
  }, [categories, series]);

  return <div id="container" style={{ width: "100%", height: "400px", margin:"20px auto" }}></div>;
};

export default RealTimeChart;
