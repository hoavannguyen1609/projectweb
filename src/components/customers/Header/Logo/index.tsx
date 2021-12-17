import { memo } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./Logo.module.scss";
import logo from "./img/logo_cps-1.png";

function Logo() {
  return (
    <div className={clsx(classes.boxlogo)}>
      <Link to="/" className={clsx(classes.boxlogo__link)}>
        {/* <img
          src={logo}
          alt="CellphoneS"
          title="CellphoneS"
          className={clsx(classes.boxlogo__img)}
        /> */}
        <h1 className={clsx(classes.boxlogo__title)}>
          <i>TaiHoa</i>
        </h1>
      </Link>
    </div>
  );
}

export default memo(Logo);
