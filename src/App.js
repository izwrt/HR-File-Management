import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Authontications from "./Authontication";
import Login from "./components/auth/Login";
import SetPassword from "./components/auth/SetPassword";
import MainDashboardCard from "./components/common/MainDashboardCard";
import Home from "./components/pages/Home";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";

const AppLoyout = () => {
  const [token, setToken] = useState(false);

  const navigate = useNavigate();

  console.log(token)
  const CHECK_URL = "/api/v1/user/get-me";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(CHECK_URL, {
          withCredentials: true,
        });
        await setToken(true); 
        // navigate('/login');

      } catch (err) {
        await setToken(false)
        // navigate('/login');
      }
    };

    checkAuth(); 
  }, []); 


  return(
        <div className="app">
          <CustomReducerProvider>
             <Outlet/>
          </CustomReducerProvider>
         </div>
)

}

const loginRo = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  }
])

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLoyout/>,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'setpassword',
          element: <SetPassword />,
        },
        {
          path: 'box',
          element: <MainDashboardCard />,
        },
        {
          path: 'auth',
          element: <Authontications />,
        },
        // Add more child routes here as needed
      ],
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById('root'));
if(token === true){
  root.render(<RouterProvider router={appRouter}/>);
}
else{
  root.render(<RouterProvider router={loginRo}/>);
}

