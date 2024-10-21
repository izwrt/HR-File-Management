import axios from "axios";
import { useEffect, useState } from 'react';

export default function apiFecthFiles() {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/files")
          .then((response) => {
            setFiles(response.data);
          })
          .catch((error) => {
            console.error(
              `There was a error fetching the files ${error}`
            );
          });
      },[]);
    
    return files;
}
