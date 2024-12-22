import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import CustomReducerContext from "./useContext/CustomReducerContext";

const ProtectedRoute = () => {
  const { state } = useContext(CustomReducerContext);

  return state.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
