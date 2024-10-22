import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import apiFecthFiles from "../../../api/apiFetchFiles";

const Dummy = () => {
  const files = apiFecthFiles()
  console.log("orginal files " ,files);

  const filtered = files.filter((file, index, self) => 
    index === self.findIndex(f => f.date === file.date)
  )

  console.log(filtered);
  
  return(
    <div className="m-[300px]">
      helloworld
    </div>
  )
  
};

export default Dummy;
