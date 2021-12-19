import { Route, Routes, Outlet } from "react-router-dom";

import Home from "./publicpage/Homepage/Home";
import SigninPage from "./publicpage/User/SigninPage/Signin";
import SignupPage from "./publicpage/User/Signuppage/SignupPage";
import CartPage from "./protectedpage/CartPage";
import SearchPage from "./publicpage/SearchPage/SearchPage";
import ProductDetailPage from "./publicpage/ProductDetail/ProductDetailPage";
import ProductsGroup from "./publicpage/ProductGroup/ProductGroup";
import ForgetPass from "./publicpage/User/ForgetPassPage";

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
        <Route path="quen-mat-khau/*" element={<ForgetPass />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={<ProductsGroup />} /> */}
      </Routes>
      <Outlet />
    </>
  );
}

export default CustomerLayout;
