import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import Career from './pages/Career';
import Terms from './pages/TermsConditions';
import PrivacyPolcy from './pages/PrivacyPolcy';
import Currentopenings from './pages/Currentopenings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css';


function App() {
  return (
   <div className='itlabs'>
     <Router>
<Navbar/> 
       <Routes>
       <Route path="/" exact element={<Home/>}/> 
      <Route path="/home" exact element={<Home/>}/> 
      <Route path="/About" element={<About/>} /> 
      <Route path="/Solutions" element={<Solutions/>} /> 
      <Route path="/Services" element={<Services/>} /> 
      <Route path="/Products" element={<Products/>}  /> 
      <Route path="/Contactus" element={<Contactus/>} /> 
      <Route path="/Career" element={<Career/>} /> 
      <Route path="/Terms" element={<Terms/>} /> 
      <Route path="/PrivacyPolcy" element={<PrivacyPolcy/>} />   
      <Route path="/jobs" element={<Currentopenings/>} /> 

       </Routes>
  <Footer/>
      </Router>
  
   </div>
  );
}

export default App;
