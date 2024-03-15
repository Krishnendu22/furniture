import React from 'react';
import {hero  } from '../data'

import {useNavigate} from 'react-router-dom'

import Stats from '../components/Stats'
const Hero = () => {


  const navigate=useNavigate();
  const{title,subtitle,buttonText}=hero;
  return <section className='h-full max-h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
    <div className='container mx-auto text-center'><h1 className='text-2x1 mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight'>{title}</h1>
    <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>
      {subtitle}
    </h2>
    <button onClick={()=>navigate("/SignUp/ShopNow")} className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-x1 rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>{buttonText}</button>
   <div>
    <Stats></Stats>
   </div>
    </div>

  </section>;
};

export default Hero;
