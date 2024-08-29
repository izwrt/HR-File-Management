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