import { memo } from "react";
import { useNavigate, Link } from "react-router-dom";
import clsx from "clsx";
import LogoutIcon from "@mui/icons-material/Logout";

import classes from "./Account.module.scss";
// import { Button } from "react-bootstrap";
import { baseURL, API, routers } from "API";
import { LocalStorage, buffer, showToast } from "helpers";

function Account() {
  let navigate: any = useNavigate();
  const handleSignout = (): void => {
    API.post(routers.user.signout).then((res: any): void => {
      if (res.data.status === 200) {
        showToast("success", res.data.message, 1000);
        localStorage.removeItem("access_token");
        localStorage.removeItem(buffer("profile"));
        navigate("/signin");
      }
    });
  };

  const profile: any = LocalStorage(buffer("profile"));

  return (
    <div className={clsx(classes.accountbox)}>
      <div className={clsx(classes.accountbox__child)}>
        <Link to="/users" className={clsx(classes.account__link)}>
          <div className={clsx(classes.account)}>
            <div className={clsx(classes.account__img)}>
              <img
                src={`${baseURL}${profile.get(buffer("image"))}`}
                className={clsx(classes.img)}
              />
            </div>
            <div className={clsx(classes.name)}>
              <span>{profile.get(buffer("name"))}</span>
            </div>
          </div>
        </Link>
      </div>
      <div onClick={handleSignout} className={clsx(classes.signout)}>
        Đăng xuất
      </div>
    </div>
  );
}

export default memo(Account);
