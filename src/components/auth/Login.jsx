import { useReducer, useContext, useEffect } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import { loginApi } from "../../../api/loginApi";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import Cookies from "js-cookie";

CHECK_URL = "/api/v1/user/get-me";

const Login = () => {
  // const [isTrue, setIsTrue] = useState(true);
  const { state, dispatch } = useContext(CustomReducerContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Define the async function to check authentication
    const checkAuth = async () => {
      try {
        const response = await axios.get(CHECK_URL, {
          // Timeout after 5000 ms
          withCredentials: true, // Include credentials (e.g., cookies) with the request
        });
        navigate("/home");
      } catch (err) {
        navigate("/login");
      }
    };

    checkAuth(); // Call the async function
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, data } = await loginApi(state.email, state.password);
    dispatch({ type: "isAuthoticated", payload: success });
    if (success === true) {
      navigate("/home");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <form
        className="w-[40%] 2xl:w-[30%] h-auto flex items-center flex-col p-10 px-20"
        onSubmit={handleSubmit}
      >
        <h1 className="custom-font text-5xl font-bold m-[20%]">Login</h1>

        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Email"}
            type={"text"}
            name={"email"}
            dispatch={dispatch}
            value={state.email || ""}
          />

          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            dispatch={dispatch}
            value={state.password || ""}
          />
        </div>

        <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
          <LoginButton>Login</LoginButton>
          <a
            className="text-customBlue font-semibold text-lg"
            href="https://puginarug.com/"
          >
            Forgot Password ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
