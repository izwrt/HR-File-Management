import React from 'react';
import { NavLink,Outlet } from "react-router-dom";

const fruits =[
    "dummyone", "Orange", "Banana", "Grapes"
];

const Dummy = () => {
  return (
    <div className=' mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 flex gap-10'>
      {fruits.map(f => <NavLink 
                          to={f}
                        className="fruit-link"
                        activeClassName="active">
                          {f}
                        </NavLink>)}

                        <Outlet/>
    </div>

  )
}

export default Dummy
