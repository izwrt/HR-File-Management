import React from 'react'
import { useLocation,Outlet } from 'react-router-dom'
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
    {(location?.pathname === "/home" || location?.pathname === "/") ? (
      <div className="absolute pl-4">
        <HomeLogo />
      </div>
      ) : (
      <div className=" w-72 h-full flex flex-col  pl-0 comobo-header">
        <div className="border-b border-gray-600 pl-4 w-full ">
           {!hideHeader && <Logo />}
        </div>
      {!hideHeader && <DashboardHeader/>}
      </div>
     )}

        <div className="flex flex-col w-full h-screen">
          {!hideHeader && <Header/>}
            <Outlet/>
          </div> 

    </div>
  )
}

export default CustomOutlate;

