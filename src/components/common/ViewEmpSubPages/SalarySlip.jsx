import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  useEffect(() => {
      fetchEmpData(id);
      if(empData){
        setFile(empData.files.file)
        setComments(empData.files?.comments); 
      }
  },[empData]);


  const DescendingData = file.sort((a, b) => {
    const dateA = new Date(a.fieldId);
    const dateB = new Date(b.fieldId);
    return dateA - dateB; 
});


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
    navigate('Month One', {
      state: { 
        fieldId: 1,
        field: "month one"
      }
    });
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };


  const popNavs = ["Month One", "Month Two","Month Three","Form","Bank Statement"];


  return (
    <div>
      <section className='flex justify-end'>
      <BlueButton onClick={onOpen}>
        Add Files
      </BlueButton>
      {popUp === true && <PopupComponent setPopUp={onClose} isExiting={isExiting} popNavs={popNavs}/>}
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
