import React from "react";
import { useReducer, useContext } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";

const SetPassword = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  const initialValue = {
    employeeId: null,
    changePassword: null,
    confirmPassword: null,
    isTrue: true,
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <form className="flex items-center flex-col p-10 px-20 md:w-[70%] lg:w-[40%] 2xl:w-[30%] h-auto">
        <h1 className="custom-font text-5xl font-bold m-10">Set Password</h1>
        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Employee ID"}
            type={"text"}
            name={"employeeId"}
            dispatch={dispatch}
            value={state.employeeId || ""}
          />

          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Change Password"}
            type={"password"}
            name={"changePassword"}
            dispatch={dispatch}
            value={state.changePassword || ""}
          />
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Confirm Password"}
            type={"password"}
            name={"confirmPassword"}
            dispatch={dispatch}
            value={state.confirmPassword || ""}
          />
        </div>
        <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
          <LoginButton dispatch={dispatch}>Confirm</LoginButton>
        </div>
      </form>
    </div>
  );
};
export default SetPassword;
