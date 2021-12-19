import { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import GoToTop from "./components/GoToTop";
import CustomerLayout from "./pages/customers";
import AdminLayout from "./pages/admins";

function App() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect((): any => {
    const handleScroll = (): any => setShowBackTop(window.scrollY >= 300);

    window.addEventListener("scroll", handleScroll);

    return (): any => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
      <Outlet />
      {showBackTop && <GoToTop />}
    </>
  );
}

export default App;
