import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Scrollbar, Autoplay, Navigation } from "swiper";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { baseURL } from "API";

import classes from "./SlideImage.module.scss";

SwiperCore.use([Scrollbar, Autoplay, Navigation]);

function SlideImage({ props }: any) {
  return (
    <Swiper
      scrollbar={{
        hide: false,
      }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      className={clsx(classes.mySwiper)}
    >
      {props.map((prop: any) => (
        <SwiperSlide key={prop.id}>
          <Link to={`/sanpham/${prop.name.split(/\s/).join("-")}`}>
            <img
              src={`${baseURL}/image/imageslide/${prop.image}`}
              alt={prop.name}
              className={clsx(classes.imgslide)}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideImage;
