import React, { useState } from 'react';
import apiFecthFiles from '../../../../api/apiFetchFiles';
import file from "../../../assets/images/file.png";
import pdf from "../../../assets/images/pdf.png";
import photo from "../../../assets/images/photo.png";
import word from "../../../assets/images/word.png";
import BlueButton from '../BlueButton';
import PopupComponent from '../PopupComponent';


///salary slip datas are repeating

const SalarySlip = () => {

  const ImgConfig = {
    pdf: pdf,
    word: word,
    docx: word,
    png: photo,
    jpeg: photo,
    default: file
  }

 const [isExiting, setIsExiting] = useState(false);
  const filesData = apiFecthFiles();
  
  const DescendingData = filesData.sort((a, b) => {
    const dateA = a.monthId
    const dateB = b.monthId
    return dateA - dateB;
  });

  const onOpen = () => {
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };

  console.log(DescendingData);

  const [popUp, setPopUp] = useState(false);

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
          index === self.findIndex(f => f.monthId === file.monthId)
        )
        .map(file => (
          <div className='custom-font-mavan-pro text-sm' key={file.id}>
            <div className='flex w-full justify-center items-center gap-2 font-semibold text-sm py-4'>
                <hr className='w-full border-t border-gray-400' />
                <p className='text-black text-opacity-70 bg-red-400'>{file.month}</p>
                <hr className='w-full border-t border-gray-400' />
            </div>
            {
            <div className='flex flex-wrap gap-20 px-4'>
            {DescendingData
              .filter(filteredFile => filteredFile.date === file.date)
              .map(filteredFile => 
                <div className='flex flex-col gap-4 mt-10'>
                  <div className='flex flex-col items-center w-20'>
                    <img className="h-14 w-14" src={ImgConfig[filteredFile.fileName.split(".")[1]] || ImgConfig.default} alt={file.name} />
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
