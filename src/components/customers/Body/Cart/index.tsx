import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

interface Props {
  props: any[];
}

function Cart({ props }: Props) {
  return (
    <>{props.length !== 0 ? <CartList products={props} /> : <EmptyCart />}</>
  );
}

export default Cart;
