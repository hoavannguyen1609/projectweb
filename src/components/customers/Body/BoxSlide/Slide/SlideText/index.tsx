import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Scrollbar, Autoplay, Navigation } from "swiper";
import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./SlideText.module.scss";

SwiperCore.use([Scrollbar, Autoplay, Navigation]);

function SlideText({ props }: any) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      className={clsx(classes.mySwipertext)}
    >
      {props.map((prop: any) => (
        <SwiperSlide key={prop.id} className={clsx(classes.slideText)}>
          <Link
            to={`/sanpham/${prop.name.split(/\s/).join("-")}`}
            className={clsx(classes.slideText__link)}
          >
            <div className={clsx(classes.title)}>{prop.title}</div>
            <div className={clsx(classes.special)}>{prop.special}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideText;
