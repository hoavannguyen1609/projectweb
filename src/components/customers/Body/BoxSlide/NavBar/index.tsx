import clsx from "clsx";
import { memo } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";

import styles from "styles/Grid.module.scss";
import classes from "./NavBar.module.scss";

function NavBar() {
  useLinkClickHandler("/");

  return (
    <div className={clsx(classes.navigtion, styles.l2)}>
      <ul className={clsx("shadow-sm", classes.nav__list)}>
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/1.dien-thoai" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_3)}></i>
            <span className={clsx(classes.nav__text)}>Điện thoại</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/3.laptop" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_380)}></i>
            <span className={clsx(classes.nav__text)}>Laptop</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/7.tablet" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_4)}></i>
            <span className={clsx(classes.nav__text)}>Tablet</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/11.amthanh" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_220)}></i>
            <span className={clsx(classes.nav__text)}>Loa</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/9.dongho" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_610)}></i>
            <span className={clsx(classes.nav__text)}>Đồng hồ</span>
          </Link>
        </li>
        {/* <li className={clsx(classes.nav__tiem)}>
          <Link
            to="/nha-thong-minh"
            className={clsx(classes.nav__link)}
          >
            <i className={clsx(}"icon-cps-845"></i>
            <span className={clsx(classes.nav__text)}>Nhà thông minh</span>
          </Link>
        </li> */}
        <li className={clsx(classes.nav__tiem)}>
          <Link to="product/13.tainghe" className={clsx(classes.nav__link)}>
            <i className={clsx(classes.icon_cps_30)}></i>
            <span className={clsx(classes.nav__text)}>Tai nghe</span>
          </Link>
        </li>
        {/* <li className={clsx(classes.nav__tiem)}>
          <Link
            to="/thu-cu-doi-moi'}}"
            className={clsx(classes.nav__link)}
          >
            <i className={clsx(}"icon-cps-tcdm"></i>
            <span className={clsx(classes.nav__text)}>Thu cũ</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link
            to="/hang-cu"
            className={clsx(classes.nav__link)}
          >
            <i className={clsx(}"icon-cps-29"></i>
            <span className={clsx(classes.nav__text)}>Hàng cũ</span>
          </Link>
        </li>
        <li className={clsx(classes.nav__tiem)}>
          <Link
            to="/khuyen-mai"
            className={clsx(classes.nav__link)}
          >
            <i className={clsx(}"icon-cps-promotion"></i>
            <span className={clsx(classes.nav__text)}>Khuyến mãi</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default memo(NavBar);
