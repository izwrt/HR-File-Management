import react, {useContext,useCallback} from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import CustomReducerContext from "./useContext/CustomReducerContext";
import { useCallback, useContext } from "react";


function HelperLogin () {
      const { state, dispatch } = useContext(CustomReducerContext);
    
      const navigate = useNavigate();
    
      const CHECK_URL = "/api/v1/user/get-me";
    
      const getMe = useCallback(async () => {
        try {
          const response = await axios.get(CHECK_URL, {
            withCredentials: true,
          });
          dispatch({ type: "token", payload: response.data });
          navigate("/", { replace: true });
        } catch (err) {
          console.error("Error:", err);
          navigate("/login");
        }
      }, [dispatch, navigate]); 

      return getMe;
}

export default HelperLogin;