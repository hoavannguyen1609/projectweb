import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import classes from "./Cart.module.scss";

function Cart() {
  return (
    <div className={clsx(classes.boxcart)}>
      <div className={clsx(classes.cart)}>
        <Link to="/cart" className={clsx(classes.cart__link)}>
          <div className={clsx(classes.cart__icon)}>
            <ShoppingCartRoundedIcon className={clsx(classes.icon)} />
          </div>
          <div className={clsx(classes)}>
            <span>Giỏ hàng</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
