import axios from 'axios';
import { Children, createContext, useState } from 'react';

const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [empData,setEmpData] = useState("");

const fetchEmpData = async (id) => {
    axios.get(`http://localhost:5000/api/employees/${id}`) 
    .then((response) => {
        setEmpData(response.data);
    })
    .catch((error) => {
        console.error(
          `There was a error fetching the employees ${error}`
        );
    })
};

return(
    <ApiContext.Provider value={{empData,fetchEmpData}}>
        {children}
    </ApiContext.Provider>
);
}

export { ApiContext, ApiProvider };



