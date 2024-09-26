import React, { useState,useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HomeLogo from '../../assets/images/HomeLogo'
import Logo from '../../assets/images/logo'
import DashboardHeader from './DashboardHeader'
import Header from './Header'

 function CustomOutlate() {

  const [openMenu, setOpenMenu] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false)
  const popMenu = useRef(null)
  console.log(openMenu);

  const menuOpen = () => {
    setOpenMenu(true);
    setMenuTransition(true)
  }

  const menuClose = () => {
    setMenuTransition(false)
    setTimeout(()=>{
      setOpenMenu(false)
    },110)
  }

  const menuHandler = (e) => {
    if(popMenu.current === e.target)
    {
      menuClose()
    }
  }

    const location = useLocation();
    const hidePath = ['/login','/setpassword','/changepassword']
    const hideHeader = hidePath.includes(location.pathname);
  return (
    <div className="flex flex-row w-full">
            <div className="flex flex-col w-full h-screen ">
          {!hideHeader && <Header openMenu={openMenu} setOpenMenu={setOpenMenu} menuOpen={menuOpen}/>}
            <Outlet/>
          </div> 


    {!hideHeader && (
      (location?.pathname === "/home" || location?.pathname === "/") ? (
        <div className=" pl-4 fixed z-20">
          <HomeLogo/>
        </div>
      ) : (
          <div 
              className={`fixed z-20 md:absolute md:bg-black md:bg-opacity-50 md:z-20 overflow-hidden  ${openMenu ? 'md:w-full' : 'md:w-0'} `}
              ref={popMenu}
              onClick = {menuHandler}
              >
              <div className={`w-[220px] transition-all duration-300 ${menuTransition ? 'md:w-[300px]' : 'md:w-0'} h-screen flex flex-col pl-0 comobo-header overflow-hidden`}>
              <div className="border-b-2 border-white border-opacity-15 pl-4 w-full">
                <Logo />
              </div>
              <div className={`transition-all duration-700 ${menuTransition ? 'md:opacity-100' : 'md:opacity-0'}`}>
              <DashboardHeader />
              </div>
            </div>
          </div>
      )
    )}




    </div>
  )
}

export default CustomOutlate;

