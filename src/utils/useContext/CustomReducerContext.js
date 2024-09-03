import React, { createContext, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "isAuthoticated":
      return {
        ...state,
        isTrue: action.payload,
      };

    case "employeeId":
      return {
        ...state,
        employeeId: action.payload,
      };

    case "changePassword":
      return {
        ...state,
        changePassword: action.payload,
      };

    case "confirmPassword":
      return {
        ...state,
        confirmPassword: action.payload,
      };

    default:
      return state;
  }
}

const initialValue = {
  email: null,
  password: null,
  isTrue: true,
  employeeId: null,
  changePassword: null,
  confirmPassword: null,
};

const CustomReducerContext = createContext();

export const CustomReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <CustomReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomReducerContext.Provider>
  );
};

export default CustomReducerContext;
