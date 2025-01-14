import { useContext, useEffect, useRef } from "react";
import CustomReducerContext from "./useContext/CustomReducerContext";
import { Navigate } from "react-router-dom";
import axios from "../../api/axios";

const ProtectedRoute = ({ children }) => {
  const { state, dispatch } = useContext(CustomReducerContext);
  const tokenExpiryRef = useRef(state.tokenExpiry);

  const refreshApi = async () => {
    const response = await axios.post(
      "/api/v1/user/refresh-token",
      {},
      { withCredentials: true }
    );
    if (response.status === 200) {
      dispatch({ type: "tokenExpiry", payload: Date.now() + 14 * 60 * 1000 });
    }
  };

  useEffect(() => {
    tokenExpiryRef.current = state.tokenExpiry;
  }, [state.tokenExpiry]);

  useEffect(() => {
    const sixtySecondInterval = setInterval(() => {
      if (tokenExpiryRef.current <= Date.now()) {
        console.log("Token is expired");
        refreshApi();
      } else {
        console.log("Token is not expired");
      }
    }, 60000);

    return () => clearInterval(sixtySecondInterval);
  }, []);

  if (!state.token) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
