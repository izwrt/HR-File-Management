import { useContext, useEffect, useState } from "react";
import { loginApi } from "../../../api/loginApi";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import LoginTextBox from "../common/LoginTextBox";
import LoginButton from "../common/LoginButton";
import { NavLink, useNavigate } from "react-router-dom";
import HelperLogin from "../../utils/HelperLogin";

const Login = () => {
  const { state, dispatch } = useContext(CustomReducerContext);
  const navigate = useNavigate();
  const getMe = HelperLogin();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    if (state.token) {
      navigate("/", { replace: true });
    } else {
      setLoading(false);
    }
  }, [state.token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, data } = await loginApi(state.email, state.password);
    setSuccess(success);
    dispatch({ type: "isAuthoticated", payload: success });
    dispatch({ type: "tokenData", payload: data });

    if (success) {
      await getMe();
      dispatch({ type: "email", payload: "" });
      dispatch({ type: "password", payload: "" });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen flex justify-center p-20">
      <form
        className="flex  flex-col items-center gap-2 w-[500px]"
        onSubmit={handleSubmit}
      >
        <h1 className="custom-font text-5xl font-bold my-12">Login</h1>

        <div className=" flex flex-col h-[120px] w-[90%] gap-8 ">
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

        {!success && (
          <div className="text-red-500 h-0">Incorrect Email or Password</div>
        )}

        <div className=" flex flex-col items-center h-[120px] w-[90%] gap-8  mt-6">
          <LoginButton>Login</LoginButton>
          <NavLink
            className="text-customBlue font-semibold text-lg"
            to="https://account.live.com/ResetPassword.aspx"
          >
            Forgot Password ?
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
