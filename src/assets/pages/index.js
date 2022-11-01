import React from 'react';
import resume1 from "../../assets/cover/resume1.jpg";
import resume2 from "../../assets/cover/resume2.jpg";


function Resume() {
  return (
       <div>
           <a href="#resume"> <h1 id="resume" class="header-mod">Resume </h1> </a>
        <img className="resume" src={resume1} alt="resume"/>
        <img className="resume" src={resume2} alt="resume"/>
        <a  href="../../assets/cover/resume2.jpg" type="submit"  className='button col-9 col-md-3 my-lg-5 mx-md-auto' download>Download</a>
       </div>
  );
}

export default Resume;