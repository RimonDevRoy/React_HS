import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Vite projects are lightweight because it does not include react-scripts, testing scripts etc. that make project made without bundlers bulky.
*/
