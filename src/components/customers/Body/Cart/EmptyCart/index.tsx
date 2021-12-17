import clsx from "clsx";
import { memo } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import classes from "./EmptyCart.module.scss";

function EmtyCard(): JSX.Element {
  return (
    <div className={clsx(classes.emptycart)}>
      <div className={clsx(classes.carticon)}>
        <AddShoppingCartIcon className={clsx(classes.icon)} />
      </div>
      <div className={clsx(classes.cart_text)}>
        <span className={clsx(classes.text)}>Giỏ hàng trống</span>
      </div>
    </div>
  );
}

export default memo(EmtyCard);
