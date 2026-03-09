import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <App />
  </React.StrictMode>
);