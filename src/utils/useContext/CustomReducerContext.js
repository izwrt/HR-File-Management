import React, { createContext, useReducer, useEffect } from "react";
import axios from "../../../api/axios";

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
      if (/^\d*$/.test(action.payload)) {
        return {
          ...state,
          employeeId: action.payload,
        };
      }
      return state;

    case "changePassword":
      return {
        ...state,
        changePassword: action.payload,
      };

    case "code":
      return {
        ...state,
        code: action.payload,
      };

    case "confirmPassword":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case "currentPassword":
      return {
        ...state,
        currentPassword: action.payload,
      };

    case "token": // Adding token action
      return {
        ...state,
        token: action.payload,
      };

    case "tokenExpiry":
      return {
        ...state,
        tokenExpiry: action.payload,
      };

    case "tokenData":
      return {
        ...state,
        tokenData: action.payload,
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
  currentPassword: null,
  code: null,
  token: false,
  tokenData: null,
  tokenExpiry: null,
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
