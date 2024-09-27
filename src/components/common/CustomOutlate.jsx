import React, { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomeLogo from '../../assets/images/HomeLogo';
import Logo from '../../assets/images/logo';
import DashboardHeader from './DashboardHeader';
import Header from './Header';

function CustomOutlate() {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false);
  const popMenu = useRef(null);
  
  const menuOpen = () => {
    setOpenMenu(true);
    setMenuTransition(true);
  };

  const menuClose = () => {
    setMenuTransition(false);
    setTimeout(() => {
      setOpenMenu(false);
    }, 400);
  };

  const menuHandler = (e) => {
    if (popMenu.current === e.target) {
      menuClose();
    }
  };

  const location = useLocation();
  const hidePath = ['/login', '/setpassword', '/changepassword'];
  const hideHeader = hidePath.includes(location.pathname);

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full h-screen">
        {!hideHeader && <Header openMenu={openMenu} setOpenMenu={setOpenMenu} menuOpen={menuOpen} />}
        <Outlet />
      </div>
      {!hideHeader && (
        (location?.pathname === "/home" || location?.pathname === "/") ? (
          <div className="pl-4 fixed z-20">
            <HomeLogo />
          </div>
        ) : (
          <div>
            <div 
              className={`fixed top-0 left-0 bg-red-600 h-screen w-screen z-50`}
              ref={popMenu}
              onClick={menuHandler}
            >
              
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CustomOutlate;
