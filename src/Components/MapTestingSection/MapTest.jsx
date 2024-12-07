// import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import L from "leaflet";
// import $ from "jquery";

// const MapComponent = () => {
//   useEffect(() => {
//     // Initialize the map
//     const map = L.map("map", {
//       center: [0, 0], // Replace with desired coordinates
//       zoom: 2,
//     });

//     // Example marker
//     L.marker([0, 0], {
//       icon: L.AwesomeMarkers.icon({
//         icon: "info",
//         markerColor: "blue",
//         prefix: "fa",
//       }),
//     }).addTo(map);

//     // Add tile layer
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: "&copy; OpenStreetMap contributors",
//     }).addTo(map);

//     // Example JavaScript logic (replace with your actual logic)
//     const times = ["2018-08-14T00:00:00.000000000", /* Add more times */];
//     console.log("Times Array:", times);
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       {/* Map Container */}
//       <div id="map" style={{ width: "100%", height: "100%" }}></div>

//       {/* Fixed Legend */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: "100px",
//           left: "50px",
//           width: "300px",
//           height: "auto",
//           border: "2px solid grey",
//           zIndex: 9999,
//           fontSize: "14px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           padding: "10px",
//         }}
//       >
//         <b>Water Level (m)</b>
//         <br />
//         <div
//           style={{
//             width: "100%",
//             height: "20px",
//             background:
//               "linear-gradient(to right, rgba(0,0,0,0), rgba(245,249,254,1.0), rgba(105,172,213,1.0), rgba(8,50,110,1.0))",
//           }}
//         ></div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginTop: "5px",
//           }}
//         >
//           <span>0.00</span>
//           <span>2.15</span>
//           <span>4.29</span>
//           <span>6.44</span>
//           <span>8.58</span>
//           <span>10.73</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;
