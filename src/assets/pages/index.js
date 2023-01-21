import React from 'react';
import resume1 from "../../assets/cover/resume1.jpg";
import resume2 from "../../assets/cover/resume2.jpg";


function Resume() {
  return (
       <div className='width'>
           <a href="#resume"> <h1 id="resume" class=" mx-0 header-mod">Resume </h1> </a>
        <img className="resume" src={resume1} alt="resume"/>
        <img className="resume" src={resume2} alt="resume"/>
        <a  href="../../assets/cover/resume2.jpg" type="submit"  className='button mt-5  mb-5 col-9 col-md-3 my-lg-5 mx-md-auto' download>Download</a>
       </div>
  );
}

export default Resume;