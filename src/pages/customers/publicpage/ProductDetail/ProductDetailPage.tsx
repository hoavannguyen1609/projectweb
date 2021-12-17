import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import ParentBody from "components/customers/ParentBody";
import ProductDetail from "components/customers/Body/Products/ProductDetail";
import TitleProductDeTail from "components/customers/Body/Products/ProductDetail/TitleProductDeTail";

import { API, baseURL, routers } from "API";

function ProductDetailPage() {
  let params: any = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
      API.post(routers.products.productDetail, {
        value: params.productName.split("-").join(" "),
      }).then((res: any): void => {
        setProducts(res.data);
      })
    );
  }, []);

  useEffect(
    () => (document.title = params.productName.split("-").join(" ")),
    [params.productName]
  );

  return (
    <>
      <Header />
      <ParentBody>
        <TitleProductDeTail title={params.productName.split("-").join(" ")} />
        <ProductDetail products={products} />
      </ParentBody>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
