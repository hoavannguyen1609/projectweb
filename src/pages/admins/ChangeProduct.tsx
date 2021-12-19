import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { API, routers, baseURL } from "API";

import ProductChange from "components/admins/Body/Products/ProductChange";
import NavBarA from "components/admins/NavBarA";
import HeaderA from "components/admins/HeaderA";

function ChangeProduct() {
  let [param] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect((): void => {
    API.post(routers.admin.form, { id: param.get("id") }).then(
      (res: any): void => {
        setProducts(res.data.products);
      }
    );
  }, [param.get("id")]);
  return (
    <>
      <HeaderA />
      <NavBarA />
      {products.map(
        (product: any): JSX.Element => (
          <ProductChange key={product.id} product={product} />
        )
      )}
    </>
  );
}

export default ChangeProduct;
