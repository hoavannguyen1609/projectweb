import clsx from "clsx";

import ProductItem from "../ProductItem";

import styles from "styles/Grid.module.scss";
import classes from "./ProductGroup.module.scss";

interface Props {
  products: any[];
}

function ProductGroup({ products }: Props) {
  return (
    <div className={clsx(styles.row, styles.no_gutters, classes.product_box)}>
      {products &&
        products.map(
          (product: any): JSX.Element => (
            <div
              className={clsx(styles.c6, styles.m4, classes.product_item)}
              key={product.id}
            >
              <ProductItem product={product} button={true} />
            </div>
          )
        )}
    </div>
  );
}

export default ProductGroup;
