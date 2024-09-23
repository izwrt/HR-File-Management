import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HomeLogo from '../../assets/images/HomeLogo'
import Logo from '../../assets/images/logo'
import DashboardHeader from './DashboardHeader'
import Header from './Header'

 function CustomOutlate() {
    const location = useLocation();
    const hidePath = ['/login','/setpassword','/changepassword']
    const hideHeader = hidePath.includes(location.pathname);
  return (
    <div className="flex flex-row w-full">
            <div className="flex flex-col w-full h-screen ">
          {!hideHeader && <Header/>}
            <Outlet/>
          </div> 


    {!hideHeader && (
      (location?.pathname === "/home" || location?.pathname === "/") ? (
        <div className=" pl-4 fixed z-50">
          <HomeLogo/>
        </div>
      ) : (
        <div className="w-[220px] h-screen flex flex-col pl-0 comobo-header fixed z-50">
          <div className="border-b-2 border-white border-opacity-15 pl-4 w-full ">
            <Logo />
          </div>
          <DashboardHeader />
        </div>
      )
    )}




    </div>
  )
}

export default CustomOutlate;

