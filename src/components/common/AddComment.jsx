import React, { useContext } from "react";
import NavContext from "../../utils/useContext/NavContext";
import debounce from 'lodash.debounce';

const AddComment = () => {
  const {setComment} = useContext(NavContext);

  const deboucingComment = debounce((e) => {
    handleChange(e);
  },500)

  function handleChange(e){
    setComment(e.target.value)
  }
  
  return (
    <textarea
      draggable="false"
      placeholder="Add Comment"
      name="postContent"
      className="p-3 border rounded-lg flex justify-center items-center  shadow border-gray-400 w-full h-28 font-medium text-sm custom-font-mavan-pro text-gray-600 resize-none focus:outline-none"
      rows={4}
      cols={40}
      onChange={deboucingComment}
    />
  );
};

export default AddComment;
