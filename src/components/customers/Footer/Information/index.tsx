import { memo } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import classes from "./Information.module.scss";

function Infomation() {
  return (
    <>
      <div className={clsx(classes.footer_info, "py-3")}>
        <p className={clsx("text-center text-muted", classes.text)}>
          Công Ty TNHH Thương Mại Và Dịch Vụ Kỹ Thuật Diệu Phúc - GPĐKKD:
          0316172372 do sở KH &amp; ĐT TP.HN cấp ngày 02/03/2020 - Giấy phép
          thiết lập MXH số 497/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
          17/7/2021 - Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1,
          Thành phố Hồ Chí Minh - Điện thoại: 028.7108.9666. Chịu trách nhiệm
          nội dung: Nguyễn Văn Hòa. &nbsp;
          <Link to="/thoa-thuan-su-dung-trang-mang-xa-hoi">
            Xem chính sách sử dụng
          </Link>
        </p>
        <div className="text-center">
          <a
            className={clsx(classes.iconcpstb)}
            href="http://online.gov.vn/Home/WebDetails/75641"
            rel="nofollow"
          ></a>
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=158f5667-cce3-4a18-b2d1-826225e6b022&amp;refurl=https://cellphones.com.vn/"
            title="DMCA.com Protection Status"
            className="dmca-badge"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://images.dmca.com/Badges/dmca_copyright_protected150c.png?ID=158f5667-cce3-4a18-b2d1-826225e6b022"
              alt="DMCA.com Protection Status"
              className={clsx(classes.imgdmca)}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default memo(Infomation);
