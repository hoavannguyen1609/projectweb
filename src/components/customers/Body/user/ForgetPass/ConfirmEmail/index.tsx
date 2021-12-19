import { useFormik } from "formik";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

import { API, routers, baseURL } from "API";
import { showToast } from "helpers";

function ConfirmEmail() {
  let navigate: any = useNavigate();
  const [err, setErr] = useState("");
  let location: any = useLocation();
  location.pathname = "/quen-mat-khau";

  useEffect((): void => {
    document.title = "Xác nhận OTP";
  }, []);

  const formik: any = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.number()
        .required("Vui lòng nhập mã OTP")
        .integer("Mã OTP chỉ bao gồm số"),
    }),
    onSubmit: (value: any): void => {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.user.confirmOtp, {
          otp: value.otp,
          email: localStorage.getItem("email_temporary"),
        }).then((res: any): void => {
          if (res.data.status === 201) {
            showToast("error", res.data.error, 1500);
          } else if (res.data.status === 200) {
            navigate(`${location.pathname}/dat-lai-mat-khau`);
          }
        })
      );
    },
  });

  return (
    <div className="px-3">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mã Xác Nhận OTP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập mã otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            name="otp"
          />
          {formik.errors.otp && formik.touched.otp ? (
            <Form.Text className="text-danger">{formik.errors.otp}</Form.Text>
          ) : null}

          {err && <Form.Text className="text-danger">{err}</Form.Text>}
        </Form.Group>
        <Button variant="danger" type="submit" className={clsx("w-100")}>
          Xác nhận
        </Button>
      </Form>
    </div>
  );
}

export default ConfirmEmail;
