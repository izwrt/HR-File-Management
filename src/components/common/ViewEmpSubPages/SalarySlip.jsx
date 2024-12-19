import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import defaultFile from "../../../assets/images/file.png";
import pdf from "../../../assets/images/pdf.png";
import photo from "../../../assets/images/photo.png";
import word from "../../../assets/images/word.png";
import { ApiContext } from '../../../utils/useContext/ApiContext';
import NavContext from '../../../utils/useContext/NavContext';
import { NavLink } from 'react-router-dom';

///salary slip datas are repeating



const SalarySlip = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const {empData,fetchEmpData} = useContext(ApiContext);
  // const [empData,setEmpData] = useState("");
  const [file, setFile] = useState([]);
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const loc = location.pathname.split('/')[3];
  const [edit, setEdit] = useState(false)
  const {comment} = useContext(NavContext)
  const [editComment, setEditComment] = useState("");

  const [highlightbtn, setHighlightbtn] = useState("")

  if(loc === "salaryslip"){
    popNavs = [
      { fieldId: 1, field: "month one", navTo: "Month One" },
      { fieldId: 2, field: "month two", navTo: "Month Two" },
      { fieldId: 3, field: "month three", navTo: "Month Three" },
      { fieldId: 4, field: "form15", navTo: "Form15" },
      { fieldId: 5, field: "bank statement", navTo: "Bank Statement" }
    ]
 }
 else if(loc === "salarydiscussion"){
    popNavs = [
      { fieldId: 6, field: "salary structure", navTo: "Salary Structure" },
      { fieldId: 7, field: "email screenshot", navTo: "Email Screenshot" }
    ]
 }

  useEffect(()=>{
    fetchEmpData(id)
  },[id,fetchEmpData])


  const ImgConfig = {
    pdf: pdf,
    word: word,
    docx: word,
    png: photo,
    jpeg: photo,
    default: defaultFile
  }


  return (
    <div className='flex justify-center customWhiteColor shadow-sm p-5 rounded-lg text-sm'>
      <div className='border bg-white flex  rounded-lg w-fit overflow-hidden'>
      <NavLink className="footerBgColor p-2 px-4">Month One</NavLink>
      <NavLink className="p-2 px-4">Month One</NavLink>
      <NavLink className="p-2 px-4">Month One</NavLink>
      <NavLink className="p-2 px-4">Month One</NavLink>
      <NavLink className="p-2 px-4">Month One</NavLink>
      </div>
    </div>
  )
}

// className={({ isActive }) => isActive ? 'footerBgColor p-2 px-4' : 'p-2 px-4'}

export default SalarySlip
