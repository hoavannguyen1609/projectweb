import { Routes, Route, Outlet } from "react-router-dom";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";
import ParentBody from "components/customers/ParentBody";
import EnterEmail from "components/customers/Body/user/ForgetPass/EnterEmail";
import ConfirmEmail from "components/customers/Body/user/ForgetPass/ConfirmEmail";
import SetagainPassword from "components/customers/Body/user/ForgetPass/SetagainPassword";

function ForgetPass() {
  return (
    <>
      <Header />
      <ParentBody>
        <Routes>
          <Route path="/" element={<EnterEmail />} />
          <Route path="/xac-nhan-email" element={<ConfirmEmail />} />
          <Route path="/dat-lai-mat-khau" element={<SetagainPassword />} />
        </Routes>
        <Outlet />
      </ParentBody>
      <Footer />
    </>
  );
}

export default ForgetPass;
