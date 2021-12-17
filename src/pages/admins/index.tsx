import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import { LocalStorage, buffer } from "helpers";

// import { baseURL, API, routers } from "API";

// import DashBoard from "components/Layouts/PrivatePage/AdminLayouts/DoashBoard";
// import ProductsPage from "components/Layouts/PrivatePage/AdminLayouts/ProductsPage";
// import ChangeProduct from "components/Layouts/PrivatePage/AdminLayouts/ChangeProduct";
// import StaffPage from "components/Layouts/PrivatePage/AdminLayouts/StaffPage";

function AdminLayout() {
  let navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  //   useEffect(() => {
  //     const profile = LocalStorage(buffer("profile"));

  //     if (buffer("access_token") && profile.get(buffer("rules")) === 2) {
  //       if (profile.get(buffer("id"))) {
  //         axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
  //           API.post(routers.checkAdmin, { id: profile.get(buffer("id")) }).then(
  //             (res) => {
  //               if (res.data.status === 200) {
  //                 setFlag(true);
  //                 navigate("/admin");
  //               } else if (res.data.status === 201) {
  //                 profile.set(buffer("rules"), res.data.rules);
  //                 navigate("/");
  //               }
  //             }
  //           )
  //         );
  //       } else {
  //         navigate("/");
  //       }
  //     } else {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <>
      {flag && (
        <>
          {/* <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="changeproduct" element={<ChangeProduct />} />
            <Route path="/nhan-vien" element={<StaffPage />} />
          </Routes> */}
          <Outlet />
        </>
      )}
    </>
  );
}

export default AdminLayout;
