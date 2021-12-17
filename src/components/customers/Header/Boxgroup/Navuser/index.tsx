import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import classes from "./Navuser.module.scss";

function Navuser() {
  return (
    <div className={clsx(classes.navuserBox)}>
      <div className={clsx(classes.navuser)}>
        <div className={clsx(classes.user__icon)}>
          <Link to="/signin">
            <AccountCircleRoundedIcon className={clsx(classes.icon)} />
          </Link>
        </div>
        <div className={clsx(classes.navuser__text)}>
          <div className={clsx(classes.btn_signin)}>
            <Link to="/signin" className={clsx(classes.sigin_link)}>
              <span>Đăng nhập</span>
            </Link>
          </div>
          <div className={clsx(classes.navuser__border)}>|</div>
          <div className={clsx(classes.btn_signup)}>
            <Link to="/signup" className={clsx(classes.siginup_link)}>
              <span>Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navuser;
