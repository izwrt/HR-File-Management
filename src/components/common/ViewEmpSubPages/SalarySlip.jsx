import React, { useState } from 'react';
import apiFecthFiles from '../../../../api/apiFetchFiles';
import PopupComponent from '../PopupComponent';


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
      <section className='flex justify-between'>
      salary Slip
      <button onClick={handClick}>
        Add Files
      </button>
      {popUp === true && <PopupComponent setPopUp={setPopUp} popNavs={popNavs}/>}
      </section>
      <section className='flex flex-col gap-10 bg-slate-500'>
          {DescendingData
        .filter((file, index, self) => 
          index === self.findIndex(f => f.date === file.date)
        )
        .map(file => (
          <div key={file.id}>
            <div className='flex w-full justify-center bg-white'>
              {file.date}
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
