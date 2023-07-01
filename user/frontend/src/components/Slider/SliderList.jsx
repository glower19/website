import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.sass";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useEffect } from "react";
import { url } from "../../API/url";
const SliderList = () => {
  const defaultIMG = 'https://catherineasquithgallery.com/uploads/posts/2023-01/1674179770_catherineasquithgallery-com-p-serii-fon-gorizontalnii-foto-5.jpg'
  const [ad, setAd] = useState([])
  useEffect(() => {
    getOneAdFc('Главный экран', setAd)
  }, [])
  function getOneAdFc(category, setState) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category })
    };
    fetch(url + 'getOneAd', requestOptions)
      .then(response => response.json())
      .then(data => {
        setState(data)
      });
  }

  return (
    <Swiper  modules={[Pagination, Autoplay]} pagination={{
      clickable: true,
      type: 'bullets',
    }} autoplay={{
      disableOnInteraction: false,
      delay: 5000,
    }} className="mySwiper">
      <SwiperSlide className='sliderItem'>
        <a className="slider-img" href={ad[0]?.link}>
          <img src={ad[0]?.image || defaultIMG} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide className='sliderItem'>
        <a className="slider-img" href={ad[1]?.link}>
          <img src={ad[1]?.image || defaultIMG} alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide className='sliderItem'>
        <a className="slider-img" href={ad[2]?.link}>
          <img src={ad[2]?.image || defaultIMG} alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderList;