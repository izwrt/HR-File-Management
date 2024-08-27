import LoginTextBox from "../common/LoginTextBox";
import LoginButton from "../common/LoginButton";
import { useReducer, useState } from "react";

const Login = () => {
  const [isTrue, setIsTrue] = useState(true);

  const intialValue = { email: null, password: null };
  const [state, dispatch] = useReducer(reducer, intialValue);

  function useReducer(state, action) {}

  return (
    <div className="  w-screen h-screen flex justify-center">
      <form className=" w-2/5 h-auto flex items-center flex-col p-10 px-20">
        <h1 className="custom-font text-6xl font-bold m-[16%]">Login</h1>
        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox isTrue={isTrue} placeholder={"Email"} type={"text"} />
          <LoginTextBox
            isTrue={isTrue}
            placeholder={"Password"}
            type={"password"}
          />
        </div>
        <div className="mt-8 p-4 w-full flex justify-center items-center flex-col gap-12">
          <LoginButton>Login</LoginButton>
          <a className="text-customBlue font-semibold text-xl" href="">
            Forgot Password ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
