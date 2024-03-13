import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css';

import {Navigation,Pagination} from 'swiper';

import {products} from '../data'

import {HiPlus} from 'react-icons/hi'

const ProductSlider = () => {

  const{pages}=products;
  return( <Swiper modules={[Pagination,Navigation]} pagination={{clickable:true}}
  navigation={true} className='productSlider'>
    {pages.map((page,index) =>
    {
      return (<SwiperSlide key={index}>
        <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
          {
            page.productList.map((product,index)=>{
              const {image,name,price,oldPrice}=product
              return (<div className='w-full max-w-[290px] h-[380px] text-left'
              key={index}>
                <div className='border hover:border-accent rounded'>
                  <img src={image.type}/>
                  <div><HiPlus className='text-xl text-primary' ></HiPlus>
                  </div>
                </div>
                <div>{name}</div>
                <div>${price}</div>
                <div>${oldPrice}</div>
              </div>)
            })
          }
        </div>
      </SwiperSlide>

    )})}
  </Swiper>)
};

export default ProductSlider;
