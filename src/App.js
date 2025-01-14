import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import ChangePassword from "./components/auth/ChangePassword";
import Login from "./components/auth/Login";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import SetPassword from "./components/auth/SetPassword";
import CustomOutlate from "./components/common/CustomOutlate";
import About from "./components/common/ViewEmpSubPages/About";
import Certification from "./components/common/ViewEmpSubPages/Certifiaction.jsx";
import ClientHistory from "./components/common/ViewEmpSubPages/ClientHistory.jsx";
import ExitFormalities from "./components/common/ViewEmpSubPages/ExitFormalities.jsx";
import HrScreening from "./components/common/ViewEmpSubPages/HrScreening.jsx";
import Interview from "./components/common/ViewEmpSubPages/Interview";
import OfferConfirmation from "./components/common/ViewEmpSubPages/OfferConfirmation.jsx";
import OfferLetter from "./components/common/ViewEmpSubPages/OfferLetter.jsx";
import OnBoarding from "./components/common/ViewEmpSubPages/OnBoarding.jsx";
import PerformanceAppraisal from "./components/common/ViewEmpSubPages/PerformanceAppraisal.jsx";
import SalaryDiscussion from "./components/common/ViewEmpSubPages/SalaryDiscussion.jsx";
import SalarySlip from "./components/common/ViewEmpSubPages/SalarySlip";
import VerifyBackground from "./components/common/ViewEmpSubPages/VerifyBackground.jsx";
import AddEmployee from "./components/pages/AddEmployee";
import BusinessUnit from "./components/pages/BusinessUnit";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import ViewEmployeeDetails from "./components/pages/ViewEmployeeDetails";
import CustomReducerContext, {
  CustomReducerProvider,
} from "./utils/useContext/CustomReducerContext";
import { NavContextProvide } from "./utils/useContext/NavContext";
import Notifications from "./components/pages/Notifications.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import HelperLogin from "./utils/HelperLogin.jsx";
import tabVisibility from "./utils/tabVisibility.js";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const AppLoyout = () => {
  const getMe = HelperLogin();
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const { state, dispatch } = useContext(CustomReducerContext);
  const tabVisible = tabVisibility();

  // const tokenExpiryRef = useRef(state.tokenExpiry);

  useEffect(() => {
    const fetchData = async () => {
      await getMe();
      setLoading(false);
    };
    fetchData();
  }, [getMe]);

  // const refreshApi = async () => {
  //   const response = await axios.post(
  //     "/api/v1/user/refresh-token",
  //     {},
  //     { withCredentials: true }
  //   );
  //   if (response.status === 200) {
  //     dispatch({ type: "tokenExpiry", payload: Date.now() + 14 * 60 * 1000 });
  //   }
  // };

  // useEffect(() => {
  //   tokenExpiryRef.current = state.tokenExpiry;
  // }, [state.tokenExpiry]);

  // useEffect(() => {
  //   const sixtySecondInterval = setInterval(() => {
  //     if (tokenExpiryRef.current <= Date.now()) {
  //       console.log("Token is expired");
  //       refreshApi();
  //     } else {
  //       console.log("Token is not expired");
  //     }
  //   }, 60000);

  //   return () => clearInterval(sixtySecondInterval);
  // }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="app flex w-screen">
      <CustomOutlate />
    </div>
  );
};

// const ProtectedRoute = ({ children }) => {
//   const { state, dispatch } = useContext(CustomReducerContext);
//   if (!state.token) {
//     return <Navigate to="/login" replace />;
//   } else {
//     return children;
//   }
// };

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLoyout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/setpassword/:employeeId",
        element: <SetPassword />,
      },
      {
        path: "/changepassword",
        element: (
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addrecovery",
        element: <PasswordRecovery />,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/businessunit",
        element: (
          <ProtectedRoute>
            <BusinessUnit />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addemployee",
        element: (
          <ProtectedRoute>
            <AddEmployee />
          </ProtectedRoute>
        ),
      },
      {
        path: "/notifications",
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        ),
      },
      {
        path: "/viewemployee/:id",
        element: (
          <NavContextProvide>
            <ProtectedRoute>
              <ViewEmployeeDetails />
            </ProtectedRoute>
          </NavContextProvide>
        ),
        children: [
          // {
          //   index: true,
          //   element: <Navigate to="about"/>
          // },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "interview",
            element: <Interview />,
          },
          {
            path: "salaryslip",
            element: <SalarySlip />,
          },
          {
            path: "salarydiscussion",
            element: <SalarySlip />,
          },
          {
            path: "salarydiscussion",
            element: <SalaryDiscussion />,
          },
          {
            path: "offerconfirmation",
            element: <OfferConfirmation />,
          },
          {
            path: "offerletter",
            element: <OfferLetter />,
          },
          {
            path: "onboarding",
            element: <OnBoarding />,
          },
          {
            path: "verifybackground",
            element: <VerifyBackground />,
          },
          {
            path: "performanceappraisal",
            element: <PerformanceAppraisal />,
          },
          {
            path: "certification",
            element: <Certification />,
          },
          {
            path: "hrscreening",
            element: <HrScreening />,
          },
          ,
          {
            path: "exitformalities",
            element: <ExitFormalities />,
          },
          {
            path: "clienthistory",
            element: <ClientHistory />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CustomReducerProvider>
    <RouterProvider router={appRouter} />
  </CustomReducerProvider>
);

// --------------------------------------------------------------------------------

// const AppLoyout = () => {
//   const location = useLocation();
//   const hidePath = ["/login", "/setpassword"];
//   const hideHeader = hidePath.includes(location.pathname);

//   return (
//     <div className="flex w-screen">
//       <CustomOutlate />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLoyout />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/setpassword",
//         element: <SetPassword />,
//       },
//       {
//         path: "/changepassword",
//         element: <ChangePassword />,
//       },
//       {
//         path: "/addrecovery",
//         element: <PasswordRecovery />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/businessunit",
//         element: <BusinessUnit />,
//       },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/addEmployee",
//         element: <AddEmployee />,
//       },
//       {
//         path: "/notifications",
//         element: <Notifications />,
//       },
//       {
//         path: "/viewemployee/:id",
//         element: (
//           <NavContextProvide>
//             <ViewEmployeeDetails />
//           </NavContextProvide>
//         ),
//         children: [
//           // {
//           //   index: true,
//           //   element: <Navigate to="about"/>
//           // },
//           {
//             path: "about",
//             element: <About />,
//           },
//           {
//             path: "interview",
//             element: <Interview />,
//           },
//           {
//             path: "salaryslip",
//             element: <SalarySlip />,

//           },
//           {
//             path: "salarydiscussion",
//             element: <SalarySlip />,
//           },
//           {
//             path: "salarydiscussion",
//             element: <SalaryDiscussion />,
//           },
//           {
//             path: "offerconfirmation",
//             element: <OfferConfirmation />,
//           },
//           {
//             path: "offerletter",
//             element: <OfferLetter />,
//           },
//           {
//             path: "onboarding",
//             element: <OnBoarding />,
//           },
//           {
//             path: "verifybackground",
//             element: <VerifyBackground />,
//           },
//           {
//             path: "performanceappraisal",
//             element: <PerformanceAppraisal />,
//           },
//           {
//             path: "certification",
//             element: <Certification />,
//           },
//           {
//             path: "hrscreening",
//             element: <HrScreening />,
//           },
//           ,
//           {
//             path: "exitformalities",
//             element: <ExitFormalities />,
//           },
//           {
//             path: "clienthistory",
//             element: <ClientHistory />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ApiProvider>
//     <CustomReducerProvider>
//       <RouterProvider router={router} />
//     </CustomReducerProvider>
//   </ApiProvider>
// );
