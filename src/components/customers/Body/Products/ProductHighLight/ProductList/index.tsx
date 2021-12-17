import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import clsx from "clsx";
import { useState, useEffect } from "react";

import ProductItem from "../../ProductItem";

import styles from "styles/Grid.module.scss";
import classes from "./ProductList.module.scss";

interface Props {
  products: any;
  loop?: boolean;
}

SwiperCore.use([Navigation, Autoplay]);

function ProductList({ products, loop }: Props) {
  const [sizeSrceen, setSizeSrceen] = useState(window.innerWidth);
  const [item, setItem] = useState(5);

  useEffect((): any => {
    const handleResize = (): void => {
      setSizeSrceen(window.innerWidth);
      if (sizeSrceen >= 1024) setItem(5);
      else setItem(3);
    };

    window.addEventListener("resize", handleResize);

    return (): any => window.removeEventListener("resize", handleResize);
  }, [sizeSrceen]);
  return (
    <Swiper
      className={clsx(styles.l12, styles.m12, styles.c12, classes.mySwiper)}
      slidesPerView={item}
      navigation={true}
      loop={loop || false}
      spaceBetween={6}
    >
      {products.map(
        (product: any): JSX.Element => (
          <SwiperSlide key={product.id} className={clsx(classes.mySwiperSlide)}>
            <ProductItem product={product} button={true} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}

export default ProductList;
