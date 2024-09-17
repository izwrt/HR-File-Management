import { useContext } from "react";
import { loginApi } from "../../../api/loginApi";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import LoginTextBox from "../common/LoginTextBox";

const Login = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, data } = await loginApi(state.email, state.password);
    dispatch({ type: "isAuthoticated", payload: success });
  };

  return (
    <div className="w-screen h-screen flex justify-center ">
      <form className="flex bg-red-100 flex-col justify-center items-center w-[600px]" onSubmit={handleSubmit}>
        <h1 className="custom-font text-5xl font-bold my-12">Login</h1>

          <div className="bg-red-500 flex flex-col h-[200px] w-[90%] gap-10">
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

          {/* <LoginButton>Login</LoginButton>
          <a className="text-customBlue font-semibold text-lg" href="https://puginarug.com/">
            Forgot Password ?
          </a> */}
      </form>
    </div>
  );
};

export default Login;
