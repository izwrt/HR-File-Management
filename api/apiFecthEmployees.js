import axios from "axios";
import { useEffect, useState } from "react";

export default function apiFecthEmployees() {
  const [employees, setEmployees] = useState([]);
  const [adminUsers, setAdminUsers] = useState("hy");

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get("http://localhost:5000/api/employees")
        .then((response) => {
          setEmployees(response.data);
        })
        .catch((error) => {
          console.error(`There was a error fetching the employees ${error}`);
          setAdminUsers(null);
        });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return { employees, adminUsers };
}
