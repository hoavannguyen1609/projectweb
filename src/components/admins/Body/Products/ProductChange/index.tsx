import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { API, routers } from "API";
import { showToast } from "helpers";

interface Props {
  product: any;
}

function ProductChange({ product }: Props) {
  let [param] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [manus, setManus] = useState([]);
  const [promotions, setPromotions] = useState([]);

  const btnRef: any = useRef();

  useEffect((): void => {
    API.post(routers.admin.form, { id: param.get("id") }).then(
      (res: any): void => {
        setCategories(res.data.category);
        setManus(res.data.manufacturer);
        setPromotions(res.data.promotion);
      }
    );
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      reduce: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Vui lòng nhập tên sản phẩm")
        .max(255, "Tên sản phẩm tối đa 255 ký tự"),
      price: Yup.string().required("Vui lòng nhập giá"),
      reduce: Yup.string().required("Vui lòng nhập giá giảm"),
      quantity: Yup.string().required("Vui lòng nhập số lượng"),
    }),

    onSubmit: (value): void => {
      API.post(routers.admin.updateProduct, {
        name: value.name,
        price: value.price,
        quantity: value.quantity,
        reduce: value.reduce,
        id: param.get("id"),
        //   categories_id: document.querySelector("#category")?.nodeValue,
        //   manu_id:document.getElementById("manu")?.nodeValue,
        //   prom_id:document.getElementById("prom")?.nodeValue
      }).then((res: any): void => {
        showToast("success", res.data.message);
      });
    },
  });

  return (
    <>
      <div className="content-wrapper pl-3">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <Form.Text className="text-danger">
                {formik.errors.name}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicQuantity">
            <Form.Label>Số lượng</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập số lượng"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <Form.Text className="text-danger">
                {formik.errors.name}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập giá"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.errors.price && formik.touched.price ? (
              <Form.Text className="text-danger">
                {formik.errors.price}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="reduce">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập giảm giá"
              name="reduce"
              value={formik.values.reduce}
              onChange={formik.handleChange}
            />
            {formik.errors.reduce && formik.touched.reduce ? (
              <Form.Text className="text-danger">
                {formik.errors.reduce}
              </Form.Text>
            ) : null}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="category">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select name="category">
              {categories &&
                categories.map(
                  (cate: any): JSX.Element => (
                    <option
                      value={cate.id}
                      key={cate.id}
                      defaultChecked={cate.id === product.categories_id}
                    >
                      {cate.categorie_name}
                    </option>
                  )
                )}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="manu">
            <Form.Label>Hãng sản xuất</Form.Label>
            <Form.Control name="manu" list="manulist" />
            <datalist id="manulist">
              {manus &&
                manus.map(
                  (manu: any): JSX.Element => (
                    <option
                      value={manu.id}
                      key={manu.id}
                      defaultChecked={manu.id === product.manufacturers_id}
                    >
                      {manu.manufacturer_name}
                    </option>
                  )
                )}
            </datalist>
            <Form.Group className="mb-3" controlId="prom">
              <Form.Label>Khuyến mãi</Form.Label>
              <Form.Select name="prom">
                {promotions &&
                  promotions.map(
                    (prom: any): JSX.Element => (
                      <option
                        value={prom.id}
                        key={prom.id}
                        defaultChecked={prom.id === product.promotions_id}
                      >
                        {prom.promotion_name}
                      </option>
                    )
                  )}
              </Form.Select>
            </Form.Group>
          </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            datatype={product.id}
            ref={btnRef}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ProductChange;
