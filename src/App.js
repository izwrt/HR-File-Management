import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/auth/Login";
import Dashboard from "./components/auth/Dashboard";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Dashboard />);
