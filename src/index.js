import React from "react";
import  ReactDOM  from "react-dom";
import logo from './logo.svg'
import './style.css'; 

const Logo = () => {
  return (
  <header>
    <nav className="flex">
    <img className="image" src={logo}/>
    <ul className="nav-items">
      
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>

    </ul>
    </nav>
  </header>
  )
   
}

const Footer  = () => {
  return (
    <footer class = "bottom">
      <small>© 2022. Stark industries. All rights reserved</small>
    </footer>
  )
}
const MainContent = () => {
  return (
    <>
      <h1 className="heading">Reasons why I love react</h1>
      <ol>
        <li>I want to learn it because it is cool.</li>
        <li>I want to build some really cool stuff with it.</li>
        <li>It will help me fit in with the cool kids.</li>
      </ol>
  </>
  )
}


const element = 
<>
  
  <Logo/>
  <MainContent />
  <Footer />
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);