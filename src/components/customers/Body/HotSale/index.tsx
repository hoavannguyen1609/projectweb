import { memo } from "react";
import clsx from "clsx";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import flashSale from "./icon/flash-sale.gif";
import CountDown from "./CountDown";
import HotsaleList from "./HotsaleList";

import classes from "./Hotsale.module.scss";
import styles from "styles/Grid.module.scss";

SwiperCore.use([Autoplay, Navigation]);

function Hotsale({ props }: any): JSX.Element {
  return (
    <div
      className={clsx(styles.l12, styles.m12, styles.c12, classes.boxflashsale)}
    >
      <div className={clsx(classes.box_title)}>
        <div
          className={clsx(
            styles.l6,
            styles.c6,
            styles.m6,
            classes.box_title__title
          )}
        >
          <div className={clsx(classes.box_text)}>
            <p className={clsx(classes.text__hotsale)}>
              <strong>
                HOT
                <img
                  src={flashSale}
                  alt="icon-flash-sale"
                  className={clsx(classes.icon__hotsale)}
                />
                SALE
              </strong>
            </p>
          </div>
        </div>
        <div
          className={clsx(
            styles.l6,
            styles.m6,
            styles.c6,
            classes.boxtitle__date
          )}
        >
          <div className={clsx(classes.countdown)}>
            <p className={clsx(classes.title)}>Bắt đầu sau:</p>
            <CountDown />
          </div>
        </div>
      </div>
      <HotsaleList props={props} />
    </div>
  );
}

export default memo(Hotsale);
