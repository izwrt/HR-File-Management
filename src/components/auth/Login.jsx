import LoginTextBox from "../common/LoginTextBox";
import LoginButton from "../common/LoginButton";
import { useReducer, useState } from "react";

const Login = () => {
  // const [isTrue, setIsTrue] = useState(true);


  function reducer(state, action) {
    switch (action.type) {
      case 'email':
        return {
          ...state,
          email: action.payload,
        };

      case 'password':
        return{
          ...state,
          password: action.payload
        }

      case 'isAuthoticated':
        return{
          ...state,
          isTrue: action.payload
        }

      default:
        return state; 
    }
  }
  
  const initialValue = { email: null, password: null ,isTrue:true };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="  w-screen h-screen flex justify-center">
      <form className=" w-2/5 h-auto flex items-center flex-col p-10 px-20">
        <h1 className="custom-font text-5xl font-bold m-[20%]">Login</h1>

        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue} 
            placeholder={"Email"} 
            type={"text"}
            name={"email"} 
            dispatch={dispatch} 
            value={state.email || ""}/>

          <LoginTextBox 
            isTrue={state.isTrue} 
            placeholder={"Password"} 
            type={"password"}
            name={"password"}
            dispatch={dispatch}  
            value={state.password || ""}/>
        </div>

        <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
          <LoginButton dispatch={dispatch}>Login</LoginButton>
          <a className="text-customBlue font-semibold text-lg" href="">
            Forgot Password ?
          </a>
        </div>

      </form>
    </div>
  );
};

export default Login;
