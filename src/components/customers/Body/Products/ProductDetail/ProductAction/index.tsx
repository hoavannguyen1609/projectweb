import clsx from "clsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

import { fmNumber, capitalize } from "helpers";

import classes from "./ProductAction.module.scss";

interface Props {
  product: any;
}

function ProductAction({ product }: Props) {
  return (
    <div className={clsx(classes.product_action_box)}>
      <div className={clsx(classes.product_installment)}>
        <span className={clsx(classes.installment)}>Trả góp 0%</span>
      </div>
      <div className={clsx(classes.price_box)}>
        <div className={clsx(classes.price)}>
          {fmNumber(product.price - (product.price * product.reduce) / 100)}
        </div>
        <div className={clsx(classes.old_price)}>
          <del className={clsx("text-muted")}>{fmNumber(product.price)}</del>
        </div>
      </div>
      {product.promotion_name && (
        <div className={clsx(classes.promotion_box)}>
          <div className={clsx(classes.promotion_title)}>
            <CardGiftcardOutlinedIcon />
            <span className={clsx(classes.promotion_title__title)}>
              Khuyến mãi
            </span>
          </div>
          <div className={clsx(classes.promotion_content)}>
            {capitalize(product.promotion_name)}
          </div>
        </div>
      )}
      <div className={clsx(classes.btn_box)}>
        <div className={clsx(classes.btn_add_group)}>
          <button className={clsx(classes.btn_add)}>
            <strong>Mua Ngay</strong>
            <p>(Giao tận nơi hoặc lấy tại cửa hàng)</p>
          </button>
        </div>
        <div className={clsx(classes.btn_installment)}>
          <div className={clsx(classes.btn_installment__item)}>
            <button>
              <strong>Trả góp 0%</strong>
              <p>(Xét duyệt qua điện thoại)</p>
            </button>
          </div>
          <div className={clsx(classes.btn_installment__item)}>
            <button>
              <strong>Trả góp qua thẻ</strong>
              <p>(Visa,Master Card, JCB)</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAction;
