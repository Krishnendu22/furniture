import React from 'react';
import test from './components/test'
// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero'
import Features from './components/Features'
import NewItems from './components/NewItems'
import FeaturesSecond from './components/FeaturesSecond'
import Products from './components/Products'
import {Test} from './components/test'


const App = () => {
  return <div className='w-full max-w-[1440px] mx-auto bg-white'><Hero/>
  <Features/>
  <NewItems/>
  <FeaturesSecond/>
  <Products/>
  <Routes>
  
    <Route path='test' element={<Test/>}/>
  </Routes>
  </div>;
  
};

export default App;
