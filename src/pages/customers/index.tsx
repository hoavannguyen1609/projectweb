import { Route, Routes, Outlet } from "react-router-dom";

import Home from "./publicpage/Homepage/Home";
import SigninPage from "./publicpage/SigninPage/Signin";
import SignupPage from "./publicpage/Signuppage/SignupPage";
import CartPage from "./protectedpage/CartPage";
import SearchPage from "./publicpage/SearchPage/SearchPage";
import ProductDetailPage from "./publicpage/ProductDetail/ProductDetailPage";
import ProductsGroup from "./publicpage/ProductGroup/ProductGroup";

function CustomerLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="sanpham/:productName" element={<ProductDetailPage />} />
        <Route path="product/:productId" element={<ProductsGroup />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={<ProductsGroup />} /> */}
      </Routes>
      <Outlet />
    </>
  );
}

export default CustomerLayout;
