import { useReducer, useContext, useEffect } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import { loginApi } from "../../../api/loginApi";

const Login = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, data } = await loginApi(state.email, state.password);
    dispatch({ type: "isAuthoticated", payload: success });
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
