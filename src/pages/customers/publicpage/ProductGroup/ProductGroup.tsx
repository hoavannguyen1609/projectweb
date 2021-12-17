import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import ParentBody from "components/customers/ParentBody";
import ProductGroup from "components/customers/Body/Products/ProductGroup";

import { API, baseURL, routers } from "API";

function ProductsGroup() {
  const [products, setProducts] = useState([]);

  let prarams: any = useParams();

  useEffect((): void => {
    document.title = `TaiHoa - ${String(prarams.productId.split(".")[1])}`;

    axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
      API.post(routers.products.productGroup, {
        id: prarams.productId.split(".")[0],
      }).then((res: any): void => {
        setProducts(res.data);
      })
    );
  }, []);

  return (
    <>
      <Header />
      <ParentBody>
        <ProductGroup products={products} />
      </ParentBody>
      <Footer />
    </>
  );
}

export default ProductsGroup;
