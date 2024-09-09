import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLogo from '../../assets/images/HomeLogo'
import Logo from '../../assets/images/logo'
import DashboardHeader from './DashboardHeader'
import Header from './Header'

export default function ComboHeader() {
    const location = useLocation();
    const hidePath = ['/login','/setpassword']
    const hideHeader = hidePath.includes(location.pathname);
  return (
    <div className="flex flex-row">
    {(location?.pathname === "/home" || location?.pathname === "/") ? (
      <div className=" w-60 h-16 flex items-center bg-white pl-4 nav-container">
        <HomeLogo />
      </div>
      ) : (
      <div className=" w-60 flex flex-col items-center pl-0 comobo-header">
        <div className="border-b border-gray-600 pl-4 w-full">
            <Logo />
        </div>
        
      
      </div>
     )}
    {!hideHeader && <Header/>}
   
    </div>
  )
}
