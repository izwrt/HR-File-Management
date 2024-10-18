import React, {useState} from 'react';
import PopupComponent from '../PopupComponent';

const SalarySlip = () => {

  const [popUp, setPopUp] = useState(false);

  const popNavs = ["Month One", "Month Two","Month Three","Form","Bank Statement"];

  const handClick = () =>{
    setPopUp(true);
  } 
  return (
    <div className='flex justify-between bg-red-400'>
      salary Slip
      <button onClick={handClick}>
        Add Files
      </button>
      {popUp === true && <PopupComponent setPopUp={setPopUp} popNavs={popNavs}/>}
    </div>
   
  )
}

export default SalarySlip
