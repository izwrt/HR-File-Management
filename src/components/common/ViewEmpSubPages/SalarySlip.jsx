import React, { useState } from 'react';
import apiFecthFiles from '../../../../api/apiFetchFiles';
import PopupComponent from '../PopupComponent';
import BlueButton from '../BlueButton';


///salary slip datas are repeating

const SalarySlip = () => {

  const filesData = apiFecthFiles();
  
  const DescendingData = filesData.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return dateB - dateA;
  });

  console.log(DescendingData);

  const [popUp, setPopUp] = useState(false);

  const popNavs = ["Month One", "Month Two","Month Three","Form","Bank Statement"];

  const handClick = () =>{
    setPopUp(true);
  } 
  return (
    <div>
      <section className='flex justify-end'>
      <BlueButton onClick={handClick}>
        Add Files
      </BlueButton>
      {popUp === true && <PopupComponent setPopUp={setPopUp} popNavs={popNavs}/>}
      </section>
      <section className='flex flex-col gap-10 '>
          {DescendingData
        .filter((file, index, self) => 
          index === self.findIndex(f => f.date === file.date)
        )
        .map(file => (
          <div key={file.id}>
            <div className='flex w-full justify-center  items-center gap-2'>
            <hr className='w-full border-t border-gray-400' />
              {file.date}
              <hr className='w-full border-t border-gray-400' />
            </div>
            {DescendingData
              .filter(filteredFile => filteredFile.date === file.date)
              .map(filteredFile => 
                <div key={filteredFile.id}>{filteredFile.fileName}</div>
              )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default SalarySlip
