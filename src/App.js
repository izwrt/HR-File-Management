import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";

import SetPassword from "./components/auth/SetPassword";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainDashboardCard from "./components/common/MainDashboardCard";
import EmployeeCard from "./components/common/EmployeeCard";

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
    path: "/box",
    element: <MainDashboardCard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);