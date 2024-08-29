import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/auth/Login";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={appRouter} />
  </CustomReducerProvider>
);
