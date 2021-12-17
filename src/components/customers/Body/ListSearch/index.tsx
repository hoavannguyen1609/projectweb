import { memo, useEffect, useState } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import ProductItem from "../Products/ProductItem";

import styles from "styles/Grid.module.scss";
import classes from "./ListSearch.module.scss";

SwiperCore.use([Navigation, Autoplay]);

interface Props {
  products: any[];
  title?: string;
  loop?: boolean;
}

function ListSearch({ products, title, loop }: Props) {
  const [item, setItem] = useState(5);
  const [sizeSrceen, setSizeSrceen] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSizeSrceen(window.innerWidth);
      if (sizeSrceen >= 1024) {
        setItem(5);
      } else {
        setItem(3);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={clsx(
        "py-3 ",
        styles.l12,
        styles.m12,
        styles.c12,
        classes.listproductbox
      )}
    >
      <div
        className={clsx(
          "d-flex flex-column rounded align-iems-center",
          classes.boxtitle
        )}
      >
        <div
          className={clsx(
            "px-3 py-2",
            classes.boxtitle__title,
            styles.l12,
            styles.m12,
            styles.c12
          )}
        >
          {title && (
            <p className={clsx("h3 mb-0 font-wieght-bold")}>
              <strong>
                <i>{`${title}`}</i>
              </strong>
            </p>
          )}
        </div>
        <Swiper
          className={clsx(styles.l12, styles.m12, styles.c12, classes.mySwiper)}
          slidesPerView={item}
          navigation={true}
          loop={loop}
          spaceBetween={6}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className={clsx(classes.mySwiperSlide)}
            >
              <ProductItem product={product} button={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default memo(ListSearch);
