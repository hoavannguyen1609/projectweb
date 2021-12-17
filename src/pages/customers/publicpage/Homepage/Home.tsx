import { useState, useEffect } from "react";

import { API, routers } from "API";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import ParentBody from "components/customers/ParentBody";
import BoxSlide from "components/customers/Body/BoxSlide";
import HotSale from "components/customers/Body/HotSale";
import ProductHighLight from "components/customers/Body/Products/ProductHighLight";

function Home() {
  const [hotsale, setHotsale] = useState([]);

  useEffect((): void => {
    document.title = "TaiHoa - Sản phẩm công nghệ chính hãng";
    API.get(routers.products.hotsale).then((res: any): any =>
      setHotsale(res.data)
    );
  }, []);

  return (
    <>
      <Header />
      <ParentBody>
        <BoxSlide />
        <HotSale props={hotsale} />
        <ProductHighLight
          title="Điện thoại nổi bật"
          router={routers.products.phone}
          loop={false}
        />
        <ProductHighLight
          title="Tablet nổi bật"
          router={routers.products.tablet}
          loop={false}
        />
        <ProductHighLight
          title="Laptop nổi bật"
          router={routers.products.laptop}
          loop={false}
        />
        <ProductHighLight
          title="Tai nghe nổi bật"
          router={routers.products.speak}
          loop={false}
        />
        <ProductHighLight
          title="Loa nổi bật"
          router={routers.products.loudspeaker}
          loop={false}
        />
      </ParentBody>
      <Footer />
    </>
  );
}

export default Home;
