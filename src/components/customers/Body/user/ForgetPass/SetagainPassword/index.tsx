import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { API, routers, baseURL } from "API";
import { showToast } from "helpers";

function SetagainPassword(): JSX.Element {
  let navigate: any = useNavigate();

  useEffect((): void => {
    document.title = "Đặt lại mật khẩu";
  }, []);

  const formik: any = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (value) => {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.user.setagainPassword, {
          email: localStorage.getItem("email_temporary"),
          passord: value.password,
        }).then((res: any): void => {
          localStorage.removeItem("email_temporary");
          showToast("success", res.data.message, 1500);
          setTimeout((): void => navigate("/signin"), 1000);
        })
      );
    },
  });

  return (
    <div className="px-4">
      <Form onSubmit={formik.handleSubmit}>
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

        <Form.Group className={clsx("w-100", "mb-4")}>
          <Button variant="danger" type="submit" className={clsx("w-100")}>
            Xác nhận
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SetagainPassword;
