import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import NewItems from './components/NewItems'
import FeaturesSecond from './components/FeaturesSecond'
import Products from './components/Products'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
    <NewItems/>
    <FeaturesSecond/>
    <Products/></div>
  )
}

export default Home