import React, {useState} from 'react';
import {SliderData} from './SliderData';

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1)
};

if(!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <section className='slider'>
      <svg className={current === 0 ? 'left-arrow-none' : 'left-arrow'} onClick={prevSlide} viewBox="0 0 9 14">
        <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" ></path>
      </svg>
      <svg className={current === 4 ? 'right-arrow-none' : 'right-arrow'} onClick={nextSlide} viewBox="0 0 9 14">
        <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" ></path>
      </svg>
      {SliderData.map((slide, index) => {
        return (
          <div 
            className={index === current ? 'slide active' : 'slide'} 
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className='image' />
            )}
          </div>
        );
      })}
    </section>
  )
}

export default ImageSlider;
