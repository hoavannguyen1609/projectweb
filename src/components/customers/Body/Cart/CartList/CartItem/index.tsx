import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { MouseEvent, useRef } from "react";

import { API, baseURL, routers } from "API";
import { capitalize, fmNumber, showToast } from "helpers";

import classes from "./CartItem.module.scss";
import { useState } from "react";

interface Props {
  product: any;
  flag?: boolean;
}

function CartItem({ product }: Props): JSX.Element {
  let navigate = useNavigate();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleClick = (type: string, e: MouseEvent) => {
    API.post(routers.cart.handleChange, {
      id: e.currentTarget.getAttribute("datatype"),
      type: type,
    }).then((res: any): void => {
      setQuantity(res.data.quantity);

      showToast("success", res.data.message, 1000);

      if (res.data.id) {
        document.getElementById(res.data.id)?.remove();
      }

      if (document.getElementsByClassName(classes.cartitem_box).length === 0) {
        navigate("/");
      }
    });
  };

  return (
    <div className={clsx(classes.cartitem_box)} id={product.id}>
      <div className={clsx(classes.cartitem_group)}>
        <div className={clsx(classes.cartitem__img)}>
          <img
            src={`${baseURL}/image/imageproducts/${product.image}`}
            className={clsx(classes.img)}
          />
        </div>
        <div className={clsx(classes.cartitem_info)}>
          <div className={clsx(classes.item_name)}>
            <div className={clsx(classes.name)}>{capitalize(product.name)}</div>
          </div>
          <div className={clsx(classes.pricebox)}>
            <div className={clsx(classes.price)}>
              {fmNumber(
                product.price - (product.price * product.quantity) / 100
              )}
            </div>
            <div className={clsx(classes.oldprice)}>
              <del>{fmNumber(product.price)}</del>
            </div>
          </div>
          <div className={clsx(classes.buttongroup)}>
            <div className={clsx(classes.minu_btn)}>
              <button
                className={clsx(classes.btn, "btn")}
                datatype={product.id}
                onClick={(e: MouseEvent): void => handleClick("minus", e)}
                disabled={quantity === 1}
              >
                -
              </button>
            </div>
            <div className={clsx(classes.quantity)}>{quantity}</div>
            <div className={clsx(classes.plus_btn)}>
              <button
                className={clsx(classes.btn, "btn")}
                datatype={product.id}
                onClick={(e: MouseEvent): void => handleClick("plus", e)}
                disabled={quantity === 5}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={clsx(classes.cart_action)}>
          <button
            onClick={(e: MouseEvent): void => handleClick("remove", e)}
            className={clsx(classes.button)}
            datatype={product.id}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
