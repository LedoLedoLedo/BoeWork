import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Subscribe from "./routes/Subscribe";
import Resources from "./routes/Resources";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
// import Users from "./components/Users";


import "./App.css";
import SignUp from "./routes/SignUp";

function App() {
  return (
    <div className="App">
      
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="/signup" element={<SignUp />} />  
      </Routes>
    
       <Footer/>
    </div>
  );
}

export default App;
