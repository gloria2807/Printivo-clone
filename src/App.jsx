import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from './Components/Navbar1/Navbar1';
import Hero from './Components/Hero/Hero';
import Blogs from './Components/Blogs/Blogs';
import Navbar from './Components/Navbar/Navbar';


  const App = () => {
return <main className="overflow-x-hidden">
  <Navbar />
  <Hero />
  <Blogs />
  </main>;
  };

export default App;
