import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/custom-bootstrap.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UserProvider } from "./services/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
