import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import clsx from "clsx";

import Cart from "./Cart";
import Account from "./Account";
import Navuser from "./Navuser";

import classes from "./Boxgroup.module.scss";

function Boxgroup() {
  const token: string | null = localStorage.getItem("access_token");

  return (
    <div className={clsx(classes.boxgroup)}>
      <div className={clsx(classes.callbuy)}>
        <a href="tel:18002097" className={clsx(classes.callbuy__link)}>
          <div className={clsx(classes.callbuy__icon)}>
            <LocalPhoneIcon className={clsx(classes.icon)} />
          </div>
          <div className={clsx(classes.callbuy__text)}>
            <div className={clsx(classes.call)}>
              <span>Gọi mua hàng</span>
            </div>
            <div className={classes.phone}>
              <strong>1609.2907</strong>
            </div>
          </div>
        </a>
      </div>
      <Cart />
      {token ? <Account /> : <Navuser />}
    </div>
  );
}

export default Boxgroup;
