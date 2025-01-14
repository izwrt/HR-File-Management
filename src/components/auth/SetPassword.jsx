import React from "react";
import { useReducer, useContext } from "react";
import LoginButton from "../common/LoginButton";
import LoginTextBox from "../common/LoginTextBox";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { decryptEmployeeId } from "../../utils/decryptEmployeeId";
import axios from "../../../api/axios";
import { ToastContainer, toast } from "react-toastify";

const SetPassword = () => {
  const { state, dispatch } = useContext(CustomReducerContext);
  const { employeeId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const expires = queryParams.get("expires");
  const timeNow = Date.now().toString();
  const navigate = useNavigate();

  const decryptedEmployeeId = decryptEmployeeId(employeeId);
  console.log("decrypted id is " + decryptedEmployeeId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/v1/user/password-update", {
        employeeId: decryptedEmployeeId,
        password: state.changePassword,
        confirmPassword: state.confirmPassword,
      });
      if (response.status === 201) {
        alert("User password is set successfully");
        navigate("/login");
      }
    } catch (e) {
      toast.error("Password does not meet requirements.");
    }
  };

  return timeNow <= expires ? (
    <div className="w-screen h-screen flex justify-center">
      <form
        className="flex items-center flex-col p-10 px-20 md:w-[70%] lg:w-[40%] 2xl:w-[30%] h-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="custom-font text-5xl font-bold m-10">Set Password</h1>
        <div className="w-full p-4 flex justify-center flex-col gap-8">
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Employee ID"}
            type={"text"}
            name={"employeeId"}
            dispatch={dispatch}
            value={decryptedEmployeeId}
            read={true}
          />

          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"New Password"}
            type={"password"}
            name={"changePassword"}
            dispatch={dispatch}
            value={state.changePassword || ""}
            read={false}
          />
          <LoginTextBox
            isTrue={state.isTrue}
            placeholder={"Confirm Password"}
            type={"password"}
            name={"confirmPassword"}
            dispatch={dispatch}
            value={state.confirmPassword || ""}
            read={false}
          />
        </div>
        <div className="mt-4 p-4 w-full flex justify-center items-center flex-col gap-8">
          <LoginButton dispatch={dispatch}>Confirm</LoginButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  ) : (
    <div>Page Expired</div>
  );
};
export default SetPassword;
