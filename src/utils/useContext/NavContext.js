import React, { createContext, useState } from 'react';

const NavContext = createContext();

export const NavContextProvide = ({children}) => {
    const [fileList, setFileList] = useState([]);
    const [runAnimation, setRunAnimation] = useState(false);
    const [fileUploaded,setFileUploaded] = useState(false)

    return(
        <NavContext.Provider value={{fileList,setFileList,runAnimation,setRunAnimation,fileUploaded,setFileUploaded}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;
