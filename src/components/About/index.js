import React from "react";
import coverImage from "../../assets/cover/headshot.jpg";
function About() {

  return (
    <div>
     <a href="#home"> <h1 id="about-me" class="header-mod">ABOUT ME </h1> </a>
    
    <section className="info">

           

        <div className="bio-box"> 

           <img src={coverImage} alt="Headshot"/>

           <p> Hello! My name is Tanner Ruminer. I am a full time college student majoring
               in finance at the University of Central Oklahoma. I am currently residing in dallas
               where I am attending SMU's Full stack coding Bootcamp. 
            </p>

        </div>

    </section>
    </div>
    
  )
}
export default About;