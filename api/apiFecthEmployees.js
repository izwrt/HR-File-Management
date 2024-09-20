import React,{useEffect,useState} from 'react'
import axios from "axios";

export default function apiFecthEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:8000/employees")
          .then((response) => {
            setEmployees(response.data);
          })
          .catch((error) => {
            console.error(
              `There was a error fetching the employees ${error}`
            );
          });
      },[]);
    
  return employees;
}
