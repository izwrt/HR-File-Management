import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import SetPassword from "./components/auth/SetPassword";
import MainDashboardCard from "./components/common/MainDashboardCard";
import Authontications from "./Authontication";
import axios from "../api/axios";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";
import ChangePassword from "./components/auth/ChangePassword";
import AddRecovery from "./components/auth/AddRecovery";

// const AppLoyout = () => {

//   const navigate = useNavigate();

//   const CHECK_URL = "/api/v1/user/get-me";

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.get(CHECK_URL, {
//           withCredentials: true,
//         });
//          navigate('/');

//       } catch (err) {
//          navigate('/login');
//       }
//     };

//     checkAuth();
//   }, []);

//   return(
//         <div className="app">
//           <CustomReducerProvider>
//              <Outlet/>
//           </CustomReducerProvider>
//          </div>
// )

// }

//   const appRouter = createBrowserRouter([
//     {
//       path: '/',
//       element: <AppLoyout/>,
//       children: [
//         {
//           path: 'login',
//           element: <Login />,
//         },
//         {
//           path: '/',
//           element: <Home />,
//         },
//         {
//           path: 'setpassword',
//           element: <SetPassword />,
//         },
//         {
//           path: 'box',
//           element: <MainDashboardCard />,
//         },
//         {
//           path: 'auth',
//           element: <Authontications />,
//         },
//       ],
//     },
//   ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<RouterProvider router={appRouter}/>);

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/changepassword",
    element: <ChangePassword />,
  },
  {
    path: "/addrecovery",
    element: <AddRecovery />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);
