import React from 'react';
import test from './components/test'
// import Authen from './Authen'
import Products from './components/Products'
// import components
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopNow from './components/ShopNow'
import Home from './home'


const App = () => {
  return <div className='w-full mx-auto bg-white'>
  
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/SignUp/ShopNow' element={<ShopNow/>}/>
    </Routes>
  </div>;
  
};

export default App;
