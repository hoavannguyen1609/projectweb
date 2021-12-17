import clsx from "clsx";
import { memo, MouseEvent } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import axios from "axios";

import { capitalize, fmNumber, LocalStorage, buffer, showToast } from "helpers";
import { baseURL, API, routers } from "API";

import classes from "./Product.module.scss";

interface Props {
  product: any;
  star?: boolean;
  button?: boolean;
}

function ProductItem({ product, star, button }: Props): JSX.Element {
  const profile: any = LocalStorage(buffer("profile"));

  useLinkClickHandler("/");

  const handleClick = (e: MouseEvent) => {
    const token: string | null = localStorage.getItem("access_token");
    if (token) {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.cart.create, {
          id: e.currentTarget.getAttribute("datatype"),
          userId: profile.get(buffer("id")),
        }).then((res: any): any =>
          showToast(res.data.icon, res.data.message, 1500)
        )
      );
    } else showToast("warning", "Vui lòng đăng nhập");
  };

  return (
    <div id={product.id} className={clsx(classes.productbox)}>
      <div className={clsx(classes.productbox__img)}>
        <Link
          to={`/sanpham/${product.name.split(/\s/).join("-")}`}
          className={clsx(classes.product__link)}
        >
          <img
            className={clsx(classes.product__img)}
            src={`${baseURL}/image/imageproducts/${product.image}`}
            alt={product.name}
          />
        </Link>
      </div>
      {product.reduce !== 0 ? (
        <div className={clsx(classes.product__stickerpercent)}>
          <p className={clsx(classes.product__stickerIcon)}>
            {product.reduce !== 0 ? `${product.reduce} %` : ""}
          </p>
        </div>
      ) : null}
      <div className={clsx(classes.product__name)}>
        <Link
          to={`sanpham/${product.name.split(/\s/).join("-")}`}
          className={clsx(classes.product__name_link)}
        >
          <p className={clsx(classes.product__name_item)}>
            {product.name.length <= 42
              ? capitalize(product.name)
              : capitalize(`${product.name.slice(0, 42)} ...`)}
          </p>
        </Link>
      </div>
      <div className={clsx(classes.product_price)}>
        <Link
          to={`sanpham/${product.name.split(/\s/).join("-")}`}
          className={clsx(classes.product_price_link)}
        >
          <p className={clsx("mb-0", classes.olprice)}>
            {fmNumber(product.price - (product.price * product.reduce) / 100)}
          </p>
          <p className={clsx("mb-0 text-muted", classes.newprice)}>
            <del>{product.reduce !== 0 ? fmNumber(product.price) : ""}</del>
          </p>
        </Link>
      </div>
      {star && (
        <div className={clsx(classes.star)}>
          <Link
            to={`sanpham/${product.name.split(/\s/).join("-")}`}
            className={clsx(classes.star__link)}
          >
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
            <StarOutlinedIcon />
          </Link>
        </div>
      )}

      {button && (
        <div className={clsx(classes.button__adcart__box)}>
          <button
            className={clsx(classes.button__adcart)}
            onClick={handleClick}
            datatype={product.id}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ProductItem);
