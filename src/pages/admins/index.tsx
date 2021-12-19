import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { LocalStorage, buffer } from "helpers";
import { API, routers } from "API";

import Dashboash from "./Dashboard";
import ProductsPage from "./ProductPage/ProducPage";
import ChangeProduct from "./ChangeProduct";

function AdminLayout() {
  let navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const profile = LocalStorage(buffer("profile"));

    if (
      localStorage.getItem("access_token") &&
      profile.get(buffer("rules")) === 2
    ) {
      if (profile.get(buffer("id"))) {
        API.post(routers.admin.checkAdmin, {
          id: profile.get(buffer("id")),
          userName: profile.get(buffer("name")),
        }).then((res: any): void => {
          if (res.data.status === 200) {
            setFlag(true);
            navigate("/admin");
          } else if (res.data.status === 201) {
            profile.set(buffer("rules"), res.data.rules);
            navigate("/");
          }
        });
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      {flag && (
        <>
          <Routes>
            <Route path="/*" element={<Dashboash />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/changeproduct" element={<ChangeProduct />} />
            {/* <Route path="changeproduct" element={<ChangeProduct />} />
            <Route path="/nhan-vien" element={<StaffPage />} /> */}
          </Routes>
        </>
      )}
    </>
  );
}

export default AdminLayout;
