import React from "react";
import ReactDom from "react-dom/client";
import SetPassword from "./components/auth/SetPassword";
import Login from "./components/auth/Login";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Login />);
