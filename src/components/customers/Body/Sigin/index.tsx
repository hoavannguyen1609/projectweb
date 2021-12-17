import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import classes from "./Sigin.module.scss";

import { API, routers, baseURL } from "API";
import { showToast, LocalStorage, buffer } from "helpers";
// import { LocalLibraryTwoTone } from "@mui/icons-material";

function Sigin(): JSX.Element {
  let navigate: any = useNavigate();
  const [flag, setFlag] = useState(false);
  useEffect((): void => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem(buffer("profile"))
    ) {
      navigate("/");
    } else {
      setFlag(true);
    }
  }, []);

  const [errors, setError] = useState();
  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Không đúng định dạng email"),
      password: Yup.string().required("Vui lòng nhập mật khẩu"),
    }),
    onSubmit: (value: any): void => {
      axios.get(`${baseURL}/sanctum/csrf-cookie`).then(
        API.post(routers.user.sigin, value).then((res: any): void => {
          if (res.data.status === 401) {
            setError(res.data.message);
          } else if (res.data.status === 200) {
            localStorage.setItem("access_token", res.data.token);
            const profile = LocalStorage(buffer("profile"));
            profile.set(buffer("rules"), res.data.rules);
            profile.set(buffer("image"), res.data.image);
            profile.set(buffer("name"), res.data.name);
            profile.set(buffer("id"), res.data.id);

            if (res.data.position) {
              profile.set(
                buffer("position"),
                res.data.position[0].positions_id
              );
            }

            showToast("success", res.data.message, 2000);

            setTimeout(() => {
              navigate("/");
            }, 1000);
          }
        })
      );
    },
  });

  return (
    <>
      {flag && (
        <div className={clsx("px-4")}>
          <Form onSubmit={formik.handleSubmit}>
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
                <Form.Text className="text-danger">
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

            {errors && (
              <Form.Group className="mb-3 text-center">
                <Form.Text className="text-danger">{errors}</Form.Text>
              </Form.Group>
            )}

            <Form.Group className={clsx(classes.buttonbox, "mb-4")}>
              <Button
                variant="danger"
                type="submit"
                className={clsx(classes.button)}
              >
                Đăng nhập
              </Button>
            </Form.Group>
            <Form.Group className={clsx(classes.linkbox)}>
              <Link
                className={clsx(classes.link_sigup, "text-info")}
                to="/signup"
              >
                Đăng ký
              </Link>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
}

export default Sigin;
