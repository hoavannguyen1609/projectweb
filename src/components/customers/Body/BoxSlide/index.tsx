import { useState, useEffect } from "react";

import { routers, API } from "API";

import NavBar from "./NavBar";
import Slide from "./Slide";
import HighLightBox from "./HightLightBox";

import classes from "./BoxSlide.module.scss";
import styles from "styles/Grid.module.scss";
import clsx from "clsx";

function BoxSlide() {
  const [slides, setSlides] = useState([]);
  const [highLightboxs, setHighLightbox] = useState([]);

  useEffect(() => {
    API.get(routers.products.slide).then((res: any) => setSlides(res.data));
    API.get(routers.products.highlightbox).then((res: any) =>
      setHighLightbox(res.data)
    );
  }, []);
  return (
    <div className={clsx(styles.row, styles.no_gutters, classes.boxslide)}>
      <NavBar />
      <Slide props={slides} />
      <HighLightBox props={highLightboxs} />
    </div>
  );
}

export default BoxSlide;
