import axios from "axios";
import { useEffect, useState } from 'react';

export default function apiFecthFiles() {

    const [files, setFiles] = useState([]);
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/files")
          .then((response) => {
            setFiles(response.data.file);
            setComments(response.data.comments);
          })
          .catch((error) => {
            console.error(
              `There was a error fetching the files ${error}`
            );
          });
      },[]);
    
    return {files,comments};
}
