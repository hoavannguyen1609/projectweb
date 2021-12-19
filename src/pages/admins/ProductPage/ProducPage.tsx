import HeaderA from "components/admins/HeaderA";
import NavBarA from "components/admins/NavBarA";
import ProductList from "components/admins/Body/Products/ProductsList";

import { useState, useEffect } from "react";

import { API, routers } from "API";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get(routers.admin.getProducts).then((res: any) => {
      setProducts(res.data);
      //   setCategories(res.data.category);
      //   setManu(res.data.manufacturer);
      //   setProm(res.data.promotion);
    });
  }, []);

  return (
    <>
      <HeaderA />
      <NavBarA />
      <ProductList products={products} />
    </>
  );
}

export default ProductsPage;
