import React from "react";
import { useReducer, useContext } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";

const ChangePassword = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  const initialValue = {
    currentPassword: null,
    changePassword: null,
    confirmPassword: null,
    isTrue: true,
  };
  return (
    <div className="  w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="custom-font text-5xl font-bold m-10">Change Password</h1>
      <form className="min-w-[600px] h-auto flex items-center flex-col p-10 px-20">
        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Current Password"}
            type={"password"}
            name={"currentPassword"}
            dispatch={dispatch}
            value={state.currentPassword || ""}
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
          <LoginButton dispatch={dispatch}>Update Password</LoginButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
