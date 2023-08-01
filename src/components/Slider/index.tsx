// Импорты изображений в формате JPG для слайдов
import slide1 from '../../image/sliders/slide-1.jpg';
import slide2 from '../../image/sliders/slide-2.jpg';
import slide3 from '../../image/sliders/slide-3.jpg';
// Импорт стилей в CSS-модули для компонента Slider
import styles from './Slider.module.scss';
// Импорт компонентов Swiper и SwiperSlide из библиотеки Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Импорт необходимых модулей из библиотеки Swiper
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Импорт CSS-файлов для стилей Swiper
import 'swiper/css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination, Autoplay]);

export const Slider = () => {
  return (
    <div className={styles.slider}>
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
