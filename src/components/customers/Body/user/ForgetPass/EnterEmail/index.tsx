import { useFormik } from "formik";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";

import { API, routers, baseURL } from "API";
import { showToast } from "helpers";

function EnterEmail() {
  let navigate: any = useNavigate();
  const [err, setErr] = useState("");
  let location: any = useLocation();

  useEffect((): void => {
    document.title = "Nhập email";
  }, []);

  const formik: any = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Vui lòng nhập đúng định dạng email"),
    }),
    onSubmit: (value: any): void => {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.user.confirmEmail, value).then((res: any): void => {
          if (res.data.status === 201) {
            if (res.data.error) {
              setErr(res.data.error.email);
            } else if (res.data.message) {
              showToast("warning", res.data.message, 1500);
            }
          } else if (res.data.status === 200) {
            localStorage.setItem("email_temporary", value.email);
            showToast("success", res.data.message);
            navigate(`${location.pathname}/xac-nhan-email`);
          }
        })
      );
    },
  });

  return (
    <div className="px-3">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>
        {err && <Form.Text className="text-danger">{err}</Form.Text>}
        <Button variant="danger" type="submit" className={clsx("w-100")}>
          Xác nhận
        </Button>
      </Form>
    </div>
  );
}

export default EnterEmail;
