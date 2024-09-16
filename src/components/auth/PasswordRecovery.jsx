import React, { useState, useContext } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";

const PasswordRecovery = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleNextClick = (e) => {
    e.preventDefault();
    setIsNextClicked(true);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="custom-font text-5xl font-bold m-10">Add Recovery</h1>
      <form className="min-w-[600px] h-auto flex items-center flex-col p-10 px-20">
        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Enter Email"}
            type={"text"}
            name={"email"}
            dispatch={dispatch}
            value={state.email || ""}
          />

          {!isNextClicked && (
            <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
              <button
                className="customColorBlue w-full text-xl p-2 homeUnitsFont font-semibold  rounded-2xl"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          )}
          {isNextClicked && (
            <>
             
              <LoginTextBox
                isTrue={state.isTrue}
                placeholder={"Enter Code"}
                type={"text"}
                name={"code"}
                dispatch={dispatch}
                value={state.code || ""}
              />
              <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
                <LoginButton>Submit</LoginButton>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
export default PasswordRecovery;