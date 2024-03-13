import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewItems from '../components/NewItems'
import Header from '../components/Header';
function LandingPage() {
  return (
    <div className="">
         <Header/>
        <Hero/>
        <Features/>
        <NewItems/>
    </div>
  )
}

export default LandingPage