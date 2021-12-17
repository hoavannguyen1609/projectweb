import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import ParentBody from "components/customers/ParentBody";
import Cart from "components/customers/Body/Cart";

import { buffer, LocalStorage } from "helpers";
import { API, routers, baseURL } from "API";

function CartPage() {
  let navigate: any = useNavigate();

  const [flag, setFlag] = useState(false);
  const [carts, setCarts] = useState([]);
  const profile: any = LocalStorage(buffer("profile"));
  useEffect((): void => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem(buffer("profile"))
    ) {
      API.post(routers.cart.cart, { id: profile.get(buffer("id")) }).then(
        (res: any): void => {
          setFlag(true);
          setCarts(res.data);
        }
      );
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      {flag && (
        <>
          <Header />
          <ParentBody>
            <div className="px-3">
              <Cart props={carts} />
            </div>
          </ParentBody>
          <Footer />
        </>
      )}
    </>
  );
}

export default CartPage;
