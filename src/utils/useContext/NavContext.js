import React, { createContext, useState } from 'react';

const NavContext = createContext();

export const NavContextProvide = ({children}) => {
    const [fileList, setFileList] = useState([]);

    return(
        <NavContext.Provider value={{fileList,setFileList}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;
