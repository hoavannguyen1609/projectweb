import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import clsx from "clsx";
import { useState } from "react";

import ProductItem from "../../Products/ProductItem";

import classes from "./HotsaleList.module.scss";

function HotsaleList({ props }: any) {
  const [slidePerview, setSlidePerview] = useState(5);

  return (
    <Swiper
      slidesPerView={slidePerview}
      navigation={true}
      loop={true}
      spaceBetween={6}
    >
      {props.map(
        (prop: any): JSX.Element => (
          <SwiperSlide key={prop.id} className={clsx(classes.mSwiperSlide)}>
            <ProductItem product={prop} star={true} button={true} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default HotsaleList;
