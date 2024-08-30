import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/auth/Login";
import Dashboard from "./components/auth/Dashboard";
import SetPassword from "./components/auth/SetPassword";
import Dashboard from "./components/auth/Dashboard";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/setpassword",
    element: <SetPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);
