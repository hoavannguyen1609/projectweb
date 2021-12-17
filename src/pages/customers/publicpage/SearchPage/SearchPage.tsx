import clsx from "clsx";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { routers, API, baseURL } from "API";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import BoxSlide from "components/customers/Body/BoxSlide";
import ListSearch from "components/customers/Body/ListSearch";
import ParentBody from "components/customers/ParentBody";

import styles from "styles/Grid.module.scss";

function SearchPage() {
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);

  let key: any = searchParams.get("key");

  useEffect((): void => {
    axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
      API.post(routers.search, { value: key.trim().replace(/\s+/g, " ") }).then(
        (res: any): void => {
          setProducts(res.data);
          setFlag(true);
        }
      )
    );
  }, [key.trim()]);

  useEffect((): void => {
    document.title = `Tìm kiếm ${key.trim()}`;
  }, []);

  return (
    <>
      <Header />
      <ParentBody>
        <BoxSlide />
        {flag && (
          <div className={clsx(styles.row, styles.no_gutters, "px-3", "py-5")}>
            {products.length !== 0 ? (
              <>
                <div className="mt-5 text-info">
                  <h3>Kết quả kìm kiếm: {key}</h3>
                </div>
                <ListSearch products={products} loop={false} />
              </>
            ) : (
              <div className="text-danger mt-5">
                <h3>Không tìm thấy sản phẩm phù hợp với: {key}</h3>
              </div>
            )}
          </div>
        )}
      </ParentBody>
      <Footer />
    </>
  );
}

export default SearchPage;
