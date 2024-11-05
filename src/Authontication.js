import { useEffect, useState, useContext } from "react";
import axios from "../api/axios";
import CustomReducerContext from "./utils/useContext/CustomReducerContext";

const Authontications = () => {
  const { state, dispatch } = useContext(CustomReducerContext);
  CHECK_URL = "/api/v1/user/get-me";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(CHECK_URL, {
          withCredentials: true,
        });
        dispatch({
          type: "tokenAuth",
          payload: true,
        });
      } catch (err) {
        dispatch({
          type: "tokenAuth",
          payload: false,
        });
      }
    };
    checkAuth();
  }, []);
};

export default Authontications;
