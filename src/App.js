import React from 'react';
import './App.css';
// import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './assets/pages/index.js';
import Footer from './components/Footer';



function App() {


 
  return (
    <div>
           <Header/>
           <About/>
           <Project/>
           <Resume/>
           <Contact/>
           <Footer/>
           </div>

    
  );
}

export default App;
