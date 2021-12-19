import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MouseEvent, useState } from "react";

import { fmNumber, showToast } from "helpers";
import { API, routers, baseURL } from "API";

interface Props {
  product: any;
}

function ProductItem({ product }: Props) {
  const [sale, setSale] = useState(product.sale);
  const [status, setStatus] = useState(product.status);

  const handleClick = (e: MouseEvent, type: string) => {
    API.post(routers.admin.changeProduct, {
      id: e.currentTarget.getAttribute("datatype"),
      type: type,
    }).then((res: any) => {
      showToast("success", res.data.message);
      if (res.data.id) {
        document.getElementById(res.data.id)?.remove();
      }
      if (res.data.sale) {
        setSale(res.data.sale);
      }

      if (res.data.status) {
        setStatus(res.data.status);
      }
    });
  };
  return (
    <>
      <tr key={product.id} id={product.id}>
        <td>{product.name}</td>
        <td>
          <img
            src={`${baseURL}/image/imageproducts/${product.image}`}
            alt=""
            className="w-100"
          />
        </td>
        <td>{fmNumber(product.price)}</td>
        <td>{`${product.reduce} %`}</td>
        <td>{product.categorie_name}</td>
        <td>{product.manufacturer_name}</td>
        <td>{product.promotion_name}</td>
        <td>
          <div
            onClick={(e: MouseEvent): void => {
              handleClick(e, "changeSale");
            }}
            datatype={product.id}
            style={{ cursor: "pointer" }}
          >
            {sale === 1 ? (
              <CheckCircleIcon className="text-success" />
            ) : (
              <RemoveCircleOutlineIcon className="text-danger" />
            )}
          </div>
        </td>
        <td>
          <div
            onClick={(e: MouseEvent): void => {
              handleClick(e, "changeStatus");
            }}
            datatype={product.id}
            style={{ cursor: "pointer" }}
          >
            {status === 0 ? (
              <RemoveCircleOutlineIcon className="text-danger" />
            ) : (
              <CheckCircleIcon className="text-success" />
            )}
          </div>
        </td>
        <td>
          <Link
            className="btn btn-success"
            to={`/admin/changeproduct?id=${product.id}`}
          >
            Sửa
          </Link>
          <Button
            variant="danger"
            datatype={product.id}
            onClick={(e: MouseEvent): void => {
              handleClick(e, "remove");
            }}
          >
            Xóa
          </Button>
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
