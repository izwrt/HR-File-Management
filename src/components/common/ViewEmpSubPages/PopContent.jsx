import React, { useContext, useRef, useState } from 'react';
import NewUpload from "../../../assets/images/NewUpload";
import Close from "../../../assets/images/close.png";
import file from "../../../assets/images/file.png";
import pdf from "../../../assets/images/pdf.png";
import photo from "../../../assets/images/photo.png";
import word from "../../../assets/images/word.png";
import AddComment from "../AddComment";
import BlueButton from "../BlueButton";
import NavContext from '../../../utils/useContext/NavContext';

const PopContent = () => {

  const fileRemoveRef = useRef(null);
  const ref = useRef(null);
  const ImgConfig = {
    pdf: pdf,
    word: word,
    docx: word,
    png: photo,
    jpeg: photo,
    default: file
  }

  const {fileList,setFileList,setRunAnimation,setFileUploaded,setFilePracent} = useContext(NavContext);

  const saveHandle = () => {
    if(fileList.length >0)
    {
    setRunAnimation(true);
    setFileList([]);
    setTimeout(()=>{
      setRunAnimation(false)
      setFileUploaded(true);
    },3000);
    setTimeout(()=>{
      setFileUploaded(false)
    },6000);
  }
  else{
    setFilePracent(true);
    setTimeout(()=>{
      setFilePracent(false);
    },2000)
  }

  }

  const onDragEnter = () => {
    return ref.current.classList.add('opacity-70');
  }

  const onDragLeave = () => ref.current.classList.remove('opacity-70');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedFiles = [...fileList, newFile];
      setFileList(updatedFiles);
    }
  }

  const removeFile = (file) => {
    setTimeout(() => {
      const updatedFiles = [...fileList];
      updatedFiles.splice(fileList.indexOf(file), 1);
      setFileList(updatedFiles);
    }, 100);
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); /* handle form submission */ }}>
      <div>
        <div className="flex justify-center py-5">
          <div className="border-2 w-96 flex flex-col shadow h-52 border-dotted border-gray-400 rounded-lg justify-center items-center gap-y-6 relative hover:opacity-70"
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
          fileList.length > 0 && (fileList.map((file, index) => {
            return (
              <div key={index} className={`mb-3 flex justify-between py-2 px-4 rounded-lg items-center bg-selectedTab bg-opacity-40 transition-opacity duration-1000`} ref={fileRemoveRef}>
                <div className="flex items-center gap-3 popup">
                  <img className="h-8 w-8" src={ImgConfig[file.name.split(".")[1]] || ImgConfig.default} alt={file.name} />
                  <div className="text-customBlue font-medium">{file.name}</div>
                </div>
                <button
                  className="cursor-pointer w-6 h-6 rounded-full overflow-hidden transition-all ease-in-out duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200 flex justify-center items-center"
                  onClick={() => removeFile(file)}>
                  <img className="w-3 h-3" src={Close} alt="" />
                </button>
              </div>
            );
          }))
        }
        <div className="flex w-full h-26 items-center py-5 ">
          <AddComment />
        </div>
        <div className="flex justify-end mt-3">
          <BlueButton onClick={saveHandle} label="Save" />
        </div>
      </div>
    </form>
  );
}

export default PopContent;
