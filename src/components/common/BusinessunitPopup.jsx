import React from 'react';
import Filter from './Filters';

const BusinessunitPopup = ({popupRef,handleApplyFilters,onClose,isExiting}) => {

    const popClose = (e) => {
        if (popupRef.current === e.target) {
          onClose();
        }
      };

  return (
    <div ref={popupRef} className={`bg-black fixed h-full w-full bg-opacity-30 top-0 z-50 left-0 right-0 flex justify-center items-center backdrop-blur-sm ${isExiting ? 'popup' :'popup-exit'}`} onClick={popClose}>
    <div className="bg-white h-fit w-fit rounded-lg">
      <Filter onClose={onClose} onApply={handleApplyFilters} />
    </div>
  </div>
  )
}

export default BusinessunitPopup

