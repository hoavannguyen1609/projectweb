import clsx from "clsx";
import { useState, useEffect } from "react";

import { fmNumber } from "helpers";

interface Props {
  products: any[];
}

function CartConfim({ products }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect((): void => {
    products.forEach((product: any): void => {
      setTotalPrice(
        (prevState: number): number =>
          prevState + (product.price - (product.price * product.reduce) / 100)
      );
    });
  }, [products]);

  console.log(totalPrice);

  return (
    <>
      <div>
        <div>
          <div>Tổng tiền hàng:</div>
          <div>{totalPrice && fmNumber(totalPrice)}</div>
        </div>
        <div>
          <button>Đặt hàng</button>
        </div>
      </div>
    </>
  );
}

export default CartConfim;
