import CartItem from "./CartItem";
import CartConfim from "./CartConfim";

interface Props {
  products: any[];
}

function CartList({ products }: Props): JSX.Element {
  return (
    <>
      {products.map(
        (product: any): JSX.Element => (
          <CartItem key={product.id} product={product} />
        )
      )}
      <CartConfim products={products} />
    </>
  );
}

export default CartList;
