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
    }, 500);
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
        {!hideHeader && <Header location={location} openMenu={openMenu} setOpenMenu={setOpenMenu} menuOpen={menuOpen} />}
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
              className={`fixed top-0 left-0 bg-opacity-20 md:h-screen  z-20 md:bg-black md:bg-opacity-50 overflow-hidden transition-opacity ease-in-out duration-300 ${openMenu ? 'md:w-screen' : 'md:w-0'} ${menuTransition ? 'md:opacity-100':'md:opacity-0'}`}
              ref={popMenu}
              onClick={menuHandler}
            ></div>
              <div className={`w-[220px] 2xl:w-[230px] fixed left-0 right-0 z-20 transition-all ease-in-out duration-300 ${menuTransition ? 'md:left-0' : 'md:-left-56'} h-screen flex flex-col pl-0 comobo-header overflow-hidden md:absolute `}>
              <div className="border-b-2 border-white border-opacity-15 pl-4 w-full">
                <Logo />
              </div>
              <div>
              <DashboardHeader />
              </div>
            </div>
          
              
            </div>
          
        )
      )}
    </div>
  );
}

export default CustomOutlate;
