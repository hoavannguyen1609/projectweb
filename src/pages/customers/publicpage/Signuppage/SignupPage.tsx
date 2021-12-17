import { useEffect } from "react";

import Header from "components/customers/Header";
import Footer from "components/customers/Footer";

import ParentBody from "components/customers/ParentBody";
import Signup from "components/customers/Body/Signup";

function SignupPage() {
  useEffect((): any => (document.title = "Đăng ký"), []);

  return (
    <>
      <Header />
      <ParentBody>
        <Signup />
      </ParentBody>
      <Footer />
    </>
  );
}

export default SignupPage;
