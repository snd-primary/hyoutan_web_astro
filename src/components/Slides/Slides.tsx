import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { slides_data } from "@sitedata";
import { styles } from "./Slides.css";

SwiperCore.use([Autoplay, Navigation]);

export const Slides = () => (
  <Swiper
    autoplay={{
      delay: 0,
    }}
    allowTouchMove={false}
    loop={true}
    speed={10000}
    modules={[Autoplay]}
    slidesPerView={2}
    spaceBetween={16}
    className={styles.swiperContainer}
  >
    {slides_data.map((i) => (
      <SwiperSlide key={i.id} className={styles.swiperSlide}>
        <picture>
          <source srcSet={`${i.url}.webp`} />
          <img
            src={`${i.url}.jpg`}
            alt="ひょうたんギャラリーの画像"
            width="200"
            height="200"
          />
        </picture>
      </SwiperSlide>
    ))}
  </Swiper>
);
