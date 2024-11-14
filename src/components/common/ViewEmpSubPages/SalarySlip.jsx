import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import defaultFile from "../../../assets/images/file.png";
import pdf from "../../../assets/images/pdf.png";
import photo from "../../../assets/images/photo.png";
import word from "../../../assets/images/word.png";
import { ApiContext } from '../../../utils/useContext/ApiContext';
import PopupComponent from '../../common/PopupComponent';
import BlueButton from '../BlueButton';

///salary slip datas are repeating

const SalarySlip = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const { empData,fetchEmpData} = useContext(ApiContext);
  const [file, setFile] = useState([]);
  const [comments, setComments] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const location = useLocation();
  const loc = location.pathname.split('/')[3];

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

  // function findLocation (nav){
  //   switch(loc) {
  //     case "salaryslip" :
  //       switch(nav) {
  //         case "Month One":
  //           return { fieldId: 1, field: "month one" };
  //         case "Month Two":
  //           return { fieldId: 2, field: "month two" };
  //         default:
  //           return "";
  //       }
  //     case "salarydiscussion" :
  //   }
  // }

  useEffect(() => {
      fetchEmpData(id);
      if(empData){
        if(loc === "salaryslip"){
          const filteredFiles = empData.files.file.filter(file => file.fieldId >=0 && file.fieldId <=2)
          setFile(filteredFiles)
          setComments(empData.files?.comments); 
        }
        else  if(loc === "salarydiscussion"){
          const filteredFiles = empData.files.file.filter(file => file.fieldId >=6 && file.fieldId <=7)
          setFile(filteredFiles)
          setComments(empData.files?.comments); 
        }
      }
  },[loc]);


  const DescendingData = file.sort((a, b) => a.fieldId - b.fieldId);

  const ImgConfig = {
    pdf: pdf,
    word: word,
    docx: word,
    png: photo,
    jpeg: photo,
    default: defaultFile
  }


  const [isExiting, setIsExiting] = useState(false);
  
  const onOpen = () => {
    if (popNavs.length > 0) {
      navigate(popNavs[0].navTo, {
        state: { 
          fieldId: popNavs[0].fieldId,
          field: popNavs[0].field
        }
      });
    }
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };




  return (
    <div>
      <section className='flex justify-end'>
      <BlueButton onClick={onOpen}>
        Add Files
      </BlueButton>
      {popUp === true && <PopupComponent 
      setPopUp={onClose} 
      isExiting={isExiting} 
      popNavs={popNavs}
      />}
      </section>
      <section className='flex flex-col gap-10 '>
          {DescendingData
        .filter((file, index, self) => 
          index === self.findIndex(f => f.fieldId === file.fieldId)
        )
        .map((file) => (
          <div className='custom-font-mavan-pro text-sm' key={file.id}>
            <div className='flex justify-center items-center gap-2 font-semibold text-sm py-4'>
                <hr className='w-full border-t border-gray-400' />
                <p className='text-black text-opacity-70 whitespace-nowrap capitalize'>{file.field}</p>
                <hr className='w-full border-t border-gray-400' />
            </div>
            {comments.filter(com => com.fieldId === file.fieldId )
            .map((com) => <div key={com.field} className='text-customBlue p-3 rounded-lg border'>{com.comment}</div>)}
            {
            <div className='flex flex-wrap gap-14 px-4 mt-8'>
            {DescendingData
              .filter(filteredFile => filteredFile.fieldId === file.fieldId)
              .map(filteredFile => 
                <div key={filteredFile.id} className='flex flex-col gap-4 transition-transform delay-100 ease-out hover:scale-110'>
                  <div className='flex flex-col items-center w-16 '>
                    <img className="h-12 w-12" src={ImgConfig[filteredFile.fileName.split(".")[1]] || ImgConfig.default} alt={file.name} />
                    <p className='text-sm max-w-full break-words overflow-hidden text-center'>{filteredFile.fileName}</p>
                  </div>
                </div>
              )}
              </div>
              }
          </div>
        ))}
      </section>
    </div>
  )
}

export default SalarySlip
