import { useEffect } from "react";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";

import ParentBody from "components/customers/ParentBody";
import Sigin from "components/customers/Body/user/Sigin";

function SigninPage() {
  useEffect((): any => (document.title = "Đăng nhập"), []);

  return (
    <>
      <Header />
      <ParentBody>
        <Sigin />
      </ParentBody>
      <Footer />
    </>
  );
}

export default SigninPage;
