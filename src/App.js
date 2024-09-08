import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider ,Navigate, useNavigate, useParams, useLocation} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import SetPassword from "./components/auth/SetPassword";
import MainDashboardCard from "./components/common/MainDashboardCard";
import Authontications from "./Authontication";
import axios from "../api/axios";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";
import Header from "./components/common/Header";

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


const AppLoyout = () => {
  const location = useLocation();
  const hidePath = ['/login','/setpassword']
  const hideHeader = hidePath.includes(location.pathname);

  return(
    <div>
      {!hideHeader && <Header/>}
      <Outlet/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLoyout/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/setpassword",
        element: <SetPassword />,
      },
      {
        path: "/",
        element: <Home/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);
