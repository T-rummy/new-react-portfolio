import React from "react";
import coverImage from "../../assets/cover/headshot.jpg";
function About() {

  return (
    <section className="about">
  
       <img src={coverImage} className="my-2" style={{ width: "90%" }} alt="cover" /> 
      <div>
        <p className="bio">
         Hello! My name is Tanner Ruminer, I am a full stack developer (MERN) based out of Dallas, TX. I am currently pursuing my bachelors in (MIS) Managaement information
         systems at the University of Central Oklahoma.
      </p>
      </div>
    </section>
  )
}
export default About;