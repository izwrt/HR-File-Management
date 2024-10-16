import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Navigate
} from "react-router-dom";
import ChangePassword from "./components/auth/ChangePassword";
import Login from "./components/auth/Login";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import SetPassword from "./components/auth/SetPassword";
import CustomOutlate from "./components/common/CustomOutlate";
import DummyOne from "./components/common/DummyOne";
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
import Dummy from "./components/pages/Dummy";
import Home from "./components/pages/Home";
import ViewEmployeeDetails from "./components/pages/ViewEmployeeDetails";
import { CustomReducerProvider } from "./utils/useContext/CustomReducerContext";
import PopContent from "./components/common/ViewEmpSubPages/PopContent.jsx";
import NavContext,{NavContextProvide} from "./utils/useContext/NavContext"



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
  const hidePath = ["/login", "/setpassword"];
  const hideHeader = hidePath.includes(location.pathname);

  return (
    <div className="flex w-screen">
      <CustomOutlate />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLoyout />,
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
        element: <Home />,
      },
      {
        path: "/businessunit",
        element: <BusinessUnit />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/addEmployee",
        element: <AddEmployee />,
      },
      {
        path: "/viewemployee/:id",
        element: <ViewEmployeeDetails />,
        children: [
          {
            index: true,
            element: <Navigate to="about"/>
          },
          {
            path: "about",
            element: <About/>
          },
          {
            path: "interview",
            element: <Interview/>
          },
          {
            path: "salaryslip",
            element: (<NavContextProvide><SalarySlip/></NavContextProvide>),
            children:[
              {
                index:true,
                element: <Navigate to="Month One"/>
              },
              {
                path:"Month One",
                element: <PopContent/>
              },
              {
                path:"Month Two",
                element: <PopContent/>
              }
            ]
          },
          {
            path: "salarydiscussion",
            element: <SalaryDiscussion/>
          },
          {
            path: "offerconfirmation",
            element:<OfferConfirmation/>
          },
          {
            path: "offerletter",
            element:<OfferLetter/>
          },
          {
            path: "onboarding",
            element:<OnBoarding/>
          },
          {
            path: "verifybackground",
            element:<VerifyBackground/>
          },
          {
            path: "performanceappraisal",
            element:<PerformanceAppraisal/>
          },
          {
            path: "certification",
            element:<Certification/>
          },
          {
            path: "hrscreening",
            element:<HrScreening/>
          },
          ,
          {
            path: "exitformalities",
            element:<ExitFormalities/>
          },
          {
            path: "clienthistory",
            element:<ClientHistory/>
          }
        ]
      },
      {
        path: "/dummy",
        element: <Dummy />,
        children: [
          {
            path: "dummyone",
            element: <DummyOne />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomReducerProvider>
    <RouterProvider router={router} />
  </CustomReducerProvider>
);
