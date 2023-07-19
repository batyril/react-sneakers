import slide1 from '../../image/sliders/slide-1.jpg';
import slide2 from '../../image/sliders/slide-2.jpg';
import slide3 from '../../image/sliders/slide-3.jpg';
import slyles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Autoplay]);

export const Slider = () => {
  return (
    <div className={slyles.slider}>
      <Swiper loop pagination autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <img src={slide1} alt='banner' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt='banner' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt='banner' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
