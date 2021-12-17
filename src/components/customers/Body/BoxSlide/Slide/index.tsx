import { memo } from "react";
import clsx from "clsx";

// import { API, routers } from "API";

import SlideImage from "./SlideImage";
import SlideText from "./SlideText";

import classes from "./Slide.module.scss";
import styles from "styles/Grid.module.scss";

function Slide({ props }: any) {
  return (
    <div className={clsx(styles.l7, styles.c12, styles.m12, classes.box_slide)}>
      <div className={clsx(classes.box_slide__list)}>
        <SlideImage props={props} />
        <SlideText props={props} />
      </div>
    </div>
  );
}

export default memo(Slide);
