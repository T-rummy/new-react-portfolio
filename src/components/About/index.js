import React from "react";
import coverImage from "../../assets/cover/headshot.jpg";
function About() {

  return (
    <div>
     <a href="#home"> <h1 id="about-me" class="header-mod">ABOUT ME </h1> </a>
    
    <section className="info">

           

        <div className="bio-box"> 

           <img src={coverImage} alt="Headshot"/>

           <p> Hello! My name is Tanner Ruminer. I am a Full stack (MERN) developer and full time college student majoring
               in Management Information Sysytems at the University of Central Oklahoma. I'm always looking for new challenges to grow my skill set / value
               as a developer! 
            </p>

        </div>

    </section>
    </div>
    
  )
}
export default About;