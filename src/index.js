import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import './index.css'; // Add any global styles here

// Add Font Awesome icons to the library
library.add(fas, fab);

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById("root")); // Updated method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
