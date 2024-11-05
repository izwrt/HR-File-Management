import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const {state} = useLocation();
  const {file,comments} = state.empData.files
  console.log(file);
  return (
    <div>
      about page
    </div>
  )
}

export default About
