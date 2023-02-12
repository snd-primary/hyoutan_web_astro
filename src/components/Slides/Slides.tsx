import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Thumbs } from "swiper";
import { slides_data } from "@sitedata";
import { styles } from "./Slides.css";

SwiperCore.use([Autoplay, Navigation, Thumbs]);

export const Slides = () => (
  <Swiper
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: false,
    }}
    allowTouchMove={false}
    loop={true}
    speed={10000}
    modules={[Autoplay]}
    slidesPerView={1}
    spaceBetween={16}
    className={styles.swiperContainer}
    breakpoints={{
      768: {
        slidesPerView: 2,
        speed: 10000,
      },
    }}
  >
    {slides_data.map((i) => (
      <SwiperSlide key={i.id} className={styles.swiperSlide}>
        <picture>
          <source srcSet={`${i.url}.webp`} />
          <img src={`${i.url}.jpg`} alt="ひょうたんギャラリーの画像" />
        </picture>
      </SwiperSlide>
    ))}
  </Swiper>
);
