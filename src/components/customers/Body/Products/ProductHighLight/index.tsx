import { useState, useEffect } from "react";
import clsx from "clsx";

import ProductList from "./ProductList";

import { API } from "API";
import classes from "./ProductHigh.module.scss";

interface Props {
  router: string;
  title?: string | null;
  loop?: boolean;
}

function ProductHighLight({ router, title, loop }: Props) {
  const [products, setProducts] = useState([]);

  useEffect((): void => {
    API.get(router).then((res: any): any => setProducts(res.data));
  }, []);

  return (
    <div className={clsx(classes.listproductbox)}>
      <div className={clsx(classes.boxtitle)}>
        <div className={clsx(classes.boxtitle__title)}>
          {title && (
            <p className={clsx(classes.title)}>
              <strong>
                <i>{`${title}`}</i>
              </strong>
            </p>
          )}
        </div>
        <ProductList products={products} loop={loop} />
      </div>
    </div>
  );
}

export default ProductHighLight;
