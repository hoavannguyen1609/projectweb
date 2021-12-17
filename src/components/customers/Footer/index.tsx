import { memo } from "react";
import clsx from "clsx";

import classses from "./Footer.module.scss";
import styles from "styles/Grid.module.scss";

import Information from "./Information";

function Footer() {
  return (
    <footer className={clsx(classses.footer)}>
      <div className={clsx(styles.grid, styles.wide)}>
        <div className={clsx(styles.row, styles.no_gutters)}>
          <div className={clsx(styles.l12, styles.m12, styles.c12)}>
            <Information />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
