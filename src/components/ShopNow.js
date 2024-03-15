import React from 'react';
import { filters, products } from '../data';
import Navbar from './Navbar'
import ProductSlider from './ProductSlider';
import Products from './Products';

const ShopNow = () => {
  const { Title1, answer1, Title2, answer2, Title3, answer3 } = filters;
  const { title, subtitle } = Products;

  return (
    
    <section className='section'>
      <div> <Navbar/>
      <div className='container mx-o flex'>
       
        <form id='nulty' className=' mr-4 w-1/5'  /*onSubmit={this.questionSubmit}*/>
          <div className='card'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>{Title1}</label><br />
            <label className='inline-flex items-center'>
            <input type='radio' name='answer1' value={answer1.answer11} /> <span className='ml-2'>{answer1.answer11}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer1' value={answer1.answer12} /><span className='ml-2'>{answer1.answer12}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer1' value={answer1.answer13} /><span className='ml-2'>{answer1.answer13}</span>
            </label>
          </div>
          <hr/>
          <br/>
          <hr/>
          <div className='card'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>{Title2}</label><br />
            <label className='inline-flex items-center'>
            <input type='radio' name='answer2' value={answer2.answer21} /><span className='ml-2'>{answer2.answer21}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer2' value={answer2.answer22} /><span className='ml-2'>{answer2.answer22}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer2' value={answer2.answer23} /><span className='ml-2'>{answer2.answer23}</span>
            </label>
          </div>
          <hr/>
          <br/>
          <hr/>
          <div className='card'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>{Title3}</label><br />
            <label className='inline-flex items-center'>
            <input type='radio' name='answer3' value={answer3.answer31} /><span className='ml-2'>{answer3.answer31}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer3' value={answer3.answer32} /><span className='ml-2'>{answer3.answer32}</span>
            </label>
            <label className='inline-flex items-center ml-4'>
            <input type='radio' name='answer3' value={answer3.answer33} /><span className='ml-2'>{answer3.answer33}</span>
            </label>

          </div>
          <hr/>
          <br/>
          <hr/>
        </form>
        <div className='w-4/5'>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
          <ProductSlider />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ShopNow;