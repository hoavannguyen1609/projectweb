import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FormControlLabel, Radio } from "@mui/material";

import classes from "./Signup.module.scss";

import { API, routers, baseURL } from "API";
import { showToast } from "helpers";

function Signup(): JSX.Element {
  let navigate: any = useNavigate();

  const [errors, setError] = useState([]);

  const formik: any = useFormik({
    initialValues: {
      name: "",
      birthday: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      confirm_password: "",
      gender: "0",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập họ tên")
        .min(12, "Vui lòng kiểm tra lại họ tên")
        .max(255, "Họ tên tối đa 255 ký tụ"),
      birthday: Yup.date().required("Vui lòng nhập ngày sinh"),
      phone: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Vui lòng nhập đúng số điện thoại Việt Nam"
        ),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Không đúng định dạng email"),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu")
        .min(8, "Mật khẩu tối thiểu 8 ký tự")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
          "Mật khẩu bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
        ),
      confirm_password: Yup.string()
        .required("Vui lòng nhập lại mật khẩu")
        .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp"),
      address: Yup.string()
        .required("Vui lòng nhập địa chỉ")
        .min(12, "Vui lòng kiểm tra lại địa chỉ")
        .max(255, "Địa chỉ tối đa 255 ký tụ"),
      gender: Yup.string().required("Vui lòng chọn giới tính"),
    }),
    onSubmit: (value) => {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.user.signup, value).then((res: any): void => {
          if (res.data.status === 201) {
            setError(res.data.error);
          } else if (res.data.status === 200) {
            showToast("success", res.data.message, 2000);
            setTimeout((): void => navigate("/signin"), 1000);
          }
        })
      );
    },
  });

  return (
    <div className="px-4">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập họ tên"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.name}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthday">
          <Form.Label>Ngày sinh</Form.Label>
          <Form.Control
            type="date"
            placeholder="Nhập ngày sinh"
            name="birthday"
            value={formik.values.birthday}
            onChange={formik.handleChange}
          />
          {formik.errors.birthday && formik.touched.birthday ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.birthday}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Giới tính</Form.Label>
          <div className="ml-4">
            <FormControlLabel
              value="0"
              control={<Radio size="small" />}
              label="Nam"
              name="gender"
              onChange={formik.handleChange}
              checked={formik.values.gender === "0"}
            />
            <FormControlLabel
              value="1"
              control={<Radio size="small" />}
              label="Nữ"
              name="gender"
              onChange={formik.handleChange}
              checked={formik.values.gender === "1"}
            />
            <FormControlLabel
              value="2"
              control={<Radio size="small" />}
              label="Khác"
              name="gender"
              onChange={formik.handleChange}
              checked={formik.values.gender === "2"}
            />
          </div>
          {formik.errors.gender && formik.touched.gender ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.gender}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số điện thoại"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.phone}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số đia chỉ"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && formik.touched.address ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.address}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.email}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.password}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConFirmPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <Form.Text className="text-danger mt-5">
              {formik.errors.confirm_password}
            </Form.Text>
          ) : null}
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicProfile">
        <Form.Label>
          Chọn ảnh đại diện:{" "}
          <span className="text-muted">(.jpg, .png, .webp,.jpeg)</span>
        </Form.Label>
        <Form.Control
          type="file"
          name="profile"
          onChange={(e) => {
            formik.handleChange(e);
            handleChange(e);
          }}
        />
        {formik.errors.profile && formik.touched.profile ? (
          <Form.Text className="text-danger mt-5">
            {formik.errors.profile}
          </Form.Text>
        ) : null}
      </Form.Group> */}

        {errors
          ? errors.map(
              (error: any): JSX.Element => (
                <Form.Group className="mb-3 text-center">
                  {error.email && (
                    <Form.Text className="text-danger">{error.email}</Form.Text>
                  )}
                  {error.phone && (
                    <Form.Text className="text-danger">{error.phone}</Form.Text>
                  )}
                </Form.Group>
              )
            )
          : null}

        <Form.Group className={clsx(classes.buttonbox, "mb-4")}>
          <Button
            variant="danger"
            type="submit"
            className={clsx(classes.button)}
          >
            Đăng ký
          </Button>
        </Form.Group>
        <Form.Group className={clsx(classes.linkbox)}>
          <Link className={clsx(classes.link_sigup, "text-info")} to="/signin">
            Đăng nhập
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Signup;
