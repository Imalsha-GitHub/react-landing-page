//App.jsx

import React from "react";
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from "./Component/About";
import Services from './Component/Services'
import Contact from './Component/Contact'
import Error from "./Component/Error";
import List from "./Component/List";
import Footer from "./Component/Footer";


const App = () => {
  return (
      <BrowserRouter>
        <List/>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    );
}
  
export default App;