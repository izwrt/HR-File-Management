import React, { createContext, useContext } from 'react';
import {CustomReducer} from "../utils/useReducer";

const CustomReducerContext = createContext();

export const CustomReducerProvider = ({ children }) => {
      const initialValue = { email: null, password: null ,isTrue:true };
      const [state, dispatch] = useReducer(reducer, initialValue);
    
    return (
      <CustomReducerContext.Provider value={{ state, dispatch }}>
        {children}
      </CustomReducerContext.Provider>
    );
  };

