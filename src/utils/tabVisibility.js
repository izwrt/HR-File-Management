import { useCallback, useContext, useEffect, useState } from "react";
import CustomReducerContext from "./useContext/CustomReducerContext";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const tabVisibility = () => {
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [timer, setTimer] = useState(null);
  const { state, dispatch } = useContext(CustomReducerContext);
  const navigate = useNavigate();

  const callLogoutApi = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/user/logout-user",
      {},
      { withCredentials: true }
    );

    if (response.status === 200) {
      dispatch({ type: "token", payload: false });
      navigate("/login");
    }
  };

  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState === "visible") {
      if (timer) {
        clearTimeout(timer);
      }
      setIsTabVisible(true);
    } else {
      setIsTabVisible(false);
      console.log(isTabVisible);
      const newTimer = setTimeout(() => {
        callLogoutApi();
      }, 5 * 60 * 1000);
      setTimer(newTimer);
    }
  }, [timer]);

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [handleVisibilityChange, timer]);

  return isTabVisible;
};

export default tabVisibility;
