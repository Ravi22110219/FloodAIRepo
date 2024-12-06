import React, { useEffect, useState } from "react";
import "./MapTest.module.css"; // Include custom CSS for styling if needed

const MapComponent = () => {
  const times = [
    "2018-08-14T00:00:00.000000000",
    "2018-08-14T01:00:00.000000000",
    "2018-08-14T02:00:00.000000000",
    "2018-08-14T03:00:00.000000000",
    "2018-08-14T04:00:00.000000000",
    "2018-08-14T05:00:00.000000000",
    "2018-08-14T06:00:00.000000000",
    "2018-08-14T07:00:00.000000000",
    "2018-08-14T08:00:00.000000000",
    "2018-08-14T09:00:00.000000000",
    "2018-08-14T10:00:00.000000000",
    "2018-08-14T11:00:00.000000000",
    "2018-08-14T12:00:00.000000000",
    "2018-08-14T13:00:00.000000000",
    "2018-08-14T14:00:00.000000000",
    "2018-08-14T15:00:00.000000000",
    "2018-08-14T16:00:00.000000000",
    "2018-08-14T17:00:00.000000000",
    "2018-08-14T18:00:00.000000000",
    "2018-08-14T19:00:00.000000000",
    "2018-08-14T20:00:00.000000000",
    "2018-08-14T21:00:00.000000000",
    "2018-08-14T22:00:00.000000000",
    "2018-08-14T23:00:00.000000000",
    "2018-08-15T00:00:00.000000000",
    // Add more times as needed
  ];
  const layers = 73;

  const [currentLayer, setCurrentLayer] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState(times[0]);

  useEffect(() => {
    const updateLayerVisibility = () => {
      const layers = document.querySelectorAll("img.leaflet-image-layer");
      layers.forEach((layer, index) => {
        layer.style.opacity = index === currentLayer ? 0.6 : 0;
      });
    };

    updateLayerVisibility();
  }, [currentLayer]);

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value, 10);
    setCurrentLayer(index);
    setTimeDisplay(times[index]);
  };

  return (
    <div>
      {/* Time Display */}
      <div
        id="time-display"
        style={{
          position: "fixed",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          fontSize: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "5px",
          border: "1px solid grey",
        }}
      >
        Time: {timeDisplay}
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={layers - 1}
        step="1"
        value={currentLayer}
        onChange={handleSliderChange}
        style={{
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          width: "80%",
        }}
      />

      {/* Map Container */}
      <div
        className="folium-map"
        id="map_be05d0152f2510ba0500cf62736c63e2"
        style={{ position: "relative", height: "500px", width: "100%" }}
      >
        {/* Add Leaflet map initialization here */}
      </div>
    </div>
  );
};

export default MapComponent;
