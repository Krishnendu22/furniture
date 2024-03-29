import React from 'react';
import {products} from '../data'
import ProductSlider from '../components/ProductSlider'


const Products = () => {

  const{title,subtitle}=products;
  return <section className='section'>
    <div className='container mx-auto'>
<div>
  <h2 className='title'>
    {title}
  </h2>
  <p className='subtitle'>
    {subtitle}
  </p>
</div>
<ProductSlider/>
    </div>
  </section>;
};

export default Products;
