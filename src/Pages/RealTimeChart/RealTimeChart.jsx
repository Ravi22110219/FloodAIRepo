import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const RealTimeChart = () => {
  const chartData = {
    categories: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
      "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
    ],
    waterLevels: [
      0.5, 1.2, 0.0, 0.8, 0.0, 2.5, 3.0, 1.7, 0.0, 0.3,
      1.5, 2.0, 0.4, 0.0, 1.8, 2.1, 0.7, 0.0, 3.4, 2.8,
      1.1, 0.0, 0.9, 0.2,
    ],
  };

  const [categories, setCategories] = useState(chartData.categories);
  const [series, setSeries] = useState([
    { name: "Water Level", data: chartData.waterLevels },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWaterLevel = parseFloat((Math.random() * 5).toFixed(1)); // Generate random water level with one decimal place
      const updatedWaterLevels = [...series[0].data.slice(1), newWaterLevel];
      setSeries([{ name: "Water Level", data: updatedWaterLevels }]);
      setCategories([...categories.slice(1), getNextHour(categories.at(-1))]);
    }, 3000);

    return () => clearInterval(interval);
  }, [categories, series]);

  const getNextHour = (lastHour) => {
    const [hour, minute] = lastHour.split(":" ).map(Number);
    const nextHour = (hour + 1) % 24;
    return `${String(nextHour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  };

  const options = {
    chart: {
      id: "realtime",
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 10,
        },
      },
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Hourly Water Levels",
      align: "center",
    },
    xaxis: {
      categories,
      range: 12, 
    },
    yaxis: {
      title: {
        text: "Water Level (m)",
      },
      decimalsInFloat: 1, 
      min: 0, 
    },
    stroke: {
      curve: "straight",
      width: 2, 
    },
    markers: {
      size: 5,
      shape: "circle",
    },
    annotations: {
      yaxis: [
        {
          y: 1,
          borderColor: "#FF0000",
          label: {
            text: "Threshold (1 m)",
            style: {
              color: "#FF0000",
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: "100%", height: "400px", margin: "20px auto",backgroundColor:"#f4f4f4",border:"1px solid black"  }}>
      <Chart options={options} series={series} type="line" height={400} />
    </div>
  );
};

export default RealTimeChart;
