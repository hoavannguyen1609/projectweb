import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import clsx from "clsx";
import { useState, MouseEvent } from "react";

import { baseURL } from "API";

import classes from "./ImageProductDeatil.module.scss";

SwiperCore.use([Autoplay, Navigation]);

interface Product {
  product: any;
}

function ImageProductDeatil({ product }: Product) {
  const [imageSlide, setImageSlide] = useState(
    `${baseURL}/image/imageproducts/${product.image}`
  );

  let imageList: string[] = product.imageproduct.split(",");

  const handleClick = (e: MouseEvent): void => {
    setImageSlide((): string => String(e.currentTarget.getAttribute("src")));
  };

  return (
    <>
      <div className={clsx(classes.imglist)}>
        <div className={clsx(classes.imglist__child)}>
          <div className={clsx(classes.image__time)}>
            <img src={imageSlide} className={clsx(classes.image)} />
          </div>
        </div>
        <div className={clsx(classes.slideimage)}>
          <Swiper
            navigation={true}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            className={clsx(classes.swiper)}
          >
            <SwiperSlide className={clsx(classes.slides)}>
              <img
                className={classes.image}
                src={`${baseURL}/image/imageproducts/${product.image}`}
                onClick={(e: MouseEvent): void => handleClick(e)}
              />
            </SwiperSlide>
            {imageList.map((image: string, index: number) => (
              <SwiperSlide key={index} className={clsx(classes.slides)}>
                <img
                  className={clsx(classes.image)}
                  src={`${baseURL}/image/imageproducts/${image.trim()}`}
                  onClick={(e: MouseEvent): void => handleClick(e)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ImageProductDeatil;
