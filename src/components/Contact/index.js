import React from 'react';
// import { Link } from 'react-router-dom';

function Contact() {
  
return (

<div>
             <a href="#home"><h1 id="contact" className="header-mod"> CONTACT </h1></a>

                 <form className="home-form">
    
            
            
                <input  className='placehold col-9 col-md-3 my-lg-5 mx-md-auto'
                        type="text" 
                        placeholder="Name" 
                        name='name' 
                        id='name'
                        
                        
                        required/>
    
                                    
                <input  className='placehold col-9 col-md-3 my-lg-5 mx-md-auto'
                        type="email" 
                        placeholder="Email" 
                        name='email' 
                        id='email'
                        
                        
                        required/>

                
                <textarea  className='placehold col-9 col-md-3 my-lg-5 mx-md-auto' 
                        type="text"
                        placeholder='Message'
                        
                         
                        
                        required/>

               <button  type="submit"  className='button col-9 col-md-3 my-lg-5 mx-md-auto'>Contact</button>

    </form>

     <section className="info"/>

        <address className="contact"/>
            
            <div className="contact-box"> 
            
                Email: <a href="mailto:Ruminert@gmail.com"> Ruminert@gmail.com </a>

            </div>

            <br/>

            <div className="contact-box">

                 Call/Text @ <a href="tel:4055961755"> (405)596-1755</a>

            </div>

            <br/>

            <div className="contact-box"> 

                GitHub: <a href="https://github.com/T-rummy"> https://github.com/T-rummy</a>

            </div>

            <br/>

            <div className="contact-box"> 

                Linkedin: <a href="https://www.linkedin.com/in/tanner-ruminer/"> https://www.linkedin.com/in/tanner-ruminer/</a>
           
            </div>
        
        <address/>




    <section/>
         
</div>     
        
      
  );
}

export default Contact;