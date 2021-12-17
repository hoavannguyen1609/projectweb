import { memo } from "react";
import clsx from "clsx";

import classes from "./Header.module.scss";
import styles from "styles/Grid.module.scss";

import Logo from "./Logo";
import Formsearch from "./Formsearch";
import Boxgroup from "./Boxgroup";

function Header() {
  return (
    <header className={clsx(classes.header)}>
      <div className={clsx(styles.grid, styles.wide, classes.heightfull)}>
        <div
          className={clsx(styles.row, styles.no_gutters, classes.headergroup)}
        >
          <Logo />
          <Formsearch />
          <Boxgroup />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
