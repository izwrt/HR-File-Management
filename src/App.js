import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import HomeLogo from "./assets/images/HomeLogo";
import Logo from "./assets/images/logo";
import Login from "./components/auth/Login";
import SetPassword from "./components/auth/SetPassword";
import Header from "./components/common/Header";
import BusinessUnit from "./components/pages/BusinessUnit";
import Home from "./components/pages/Home";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";
import DashboardHeader from "./components/common/DashboardHeader";
import CustomOutlate from "./components/common/CustomOutlate";

import ComboHeader from "./components/common/ComboHeader";
import ChangePassword from "./components/auth/ChangePassword";
import PasswordRecovery from "./components/auth/PasswordRecovery";
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
    <div className="flex w-screen">
      <CustomOutlate/>
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
        path: "/changepassword",
        element: <ChangePassword />,
      },
      {
        path: "/addrecovery",
        element: <PasswordRecovery />,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/businessunit",
        element: <BusinessUnit/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);
