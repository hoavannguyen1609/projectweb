import clsx from "clsx";

import ImageProductDeatil from "./ImageProductDeatil";
import ProductAction from "./ProductAction";

import styles from "styles/Grid.module.scss";
import classes from "./ProductDetail.module.scss";

interface Props {
  products: any;
}

function ProductDetail({ products }: Props) {
  return (
    <>
      <div
        className={clsx(
          styles.l12,
          styles.m12,
          styles.c12,
          classes.product_detail_box
        )}
      >
        <div className={clsx(styles.l4, styles.m6, styles.c12)}>
          <ImageProductDeatil product={products} />
        </div>
        <div className={clsx(styles.l5, styles.m6, styles.c12)}>
          <ProductAction product={products} />
        </div>
        {/* <div className={clsx(styles.l3, styles.m6, styles.c12)}>
          <ProductAction product={products} />
        </div> */}
      </div>
    </>
  );
}

export default ProductDetail;
