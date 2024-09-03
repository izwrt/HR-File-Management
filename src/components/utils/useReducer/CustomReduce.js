import { useReducer } from "react";

const CustomReducer = () => {

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
      
}

export default CustomReducer;