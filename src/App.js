import React from "react";
import ReactDom from "react-dom/client";
import Login from "./components/auth/Login";
import {CustomReducerProvider} from "./components/utils/useContext/CustomReducerContext.js";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./components/auth/Login";
import SetPassword from "./components/auth/SetPassword.jsx"

const appRouter = createBrowserRouter(
    [
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/setpassword",
            element: <SetPassword/>
        }
    ]
)

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<CustomReducerProvider>
    <RouterProvider router={appRouter} />
  </CustomReducerProvider>);
