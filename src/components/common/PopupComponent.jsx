import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Close from "../../assets/images/close.png";
import NewUpload from "../../assets/images/NewUpload";
import pdf from "../../assets/images/pdf.png";
import photo from "../../assets/images/photo.png";
import word from "../../assets/images/word.png";
import AddComment from "./AddComment";
import BlueButton from "./BlueButton";

const PopupComponent = ({ heading = "Default Header", onClose }) => {

  const [fileList, setFileList] = useState([]);

  const ref = useRef(null);

  const ImgConfig = {
    pdf : pdf,
    word : word,
    docx : word,
    png : photo,
    jpeg : photo,
  }


  const  onDragEnter = () => {
    return ref.current.classList.add('opacity-70')
  }

  const onDragLeave = () => ref.current.classList.remove('opacity-70');

  const onFileDrop = (e) => {
      const newFile = e.target.files[0];
      if(newFile) {
        const updatedFiles = [...fileList,newFile];
        setFileList(updatedFiles);
      }
      console.log(newFile);
  }

  const removeFile = (file) => {
    const updatedFiles = [...fileList];
    updatedFiles.splice(fileList.indexOf(file),1);
    setFileList(updatedFiles);
  }

  const list = ["one","two"]
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div className="homeBgColor rounded-lg shadow-lg w-[600px] h-[600px] flex flex-col relative overflow-y-scroll overflow">
        <div className="sticky top-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20 border-b homeBgColor">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            {heading}
          </h2>
        <button
          className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200">
          <img src={Close} alt="" />
        </button>
        </div>
          <div className="px-6 pb-6">
          <div className="flex   w-full gap-x-10 py-3">
          {list.map((f) => (
            <NavLink
              to={f}
              key={f}
              className="font-semibold footer-font text-gray-500 text-md"
              activeclassname="active-link"
            >
              {f}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center  py-5">
          <div className="border-2 w-96 flex flex-col shadow h-52 border-dotted border-gray-400 rounded-lg justify-center items-center gap-y-6 relative hover:opacity-70 "
          ref={ref}
           onDragEnter={onDragEnter}
           onDragLeave={onDragLeave}
           onDrop={onDragLeave}
           >
            <NewUpload />
            <div className="flex justify-center items-center gap-x-4 ">
              <h2 className="font-semibold custom-font-mavan-pro opacity-50 text-lg">
                Drag and Drop file or Browse
              </h2>
              <input type="file" onChange={onFileDrop} className="absolute top-0 h-full w-full bg-red-400 opacity-0 cursor-pointer" />
            </div>
          </div>
        </div>
        {
          fileList.length > 0 && (fileList.map((file,index) => {
           
            return (
            <div key={index} className={`mb-3 flex justify-between py-2 px-4 rounded-lg items-center bg-selectedTab bg-opacity-40 transition-opacity duration-1000`}>
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src= {ImgConfig[file.name.split(".")[1]]}></img>
                <div className="text-customBlue font-medium">{file.name}</div>
              </div>
              <button
              className="cursor-pointer w-6 h-6 rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200  flex justify-center items-center"
              onClick={()=> removeFile(file)}>
              <img className="w-3 h-3" src={Close} alt="" />
              </button>
            </div>
            )
          })) 
        }
        <div className="flex w-full h-26 items-center py-5">
          <AddComment />
        </div>
        <div className="flex justify-end ">
          <BlueButton label="Save" />
        </div>
          </div>
      </div>
    </div>
  );
};

export default PopupComponent;
