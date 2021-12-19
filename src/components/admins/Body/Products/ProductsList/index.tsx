import { Link } from "react-router-dom";

import ProductItem from "./ProductItem";

interface Props {
  products: any[];
}

function ProductList({ products }: Props) {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>DataTables</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">DataTable products</h3>
                </div>
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Giảm giá</th>
                        <th>Danh mục</th>
                        <th>Hãng sản xuất</th>
                        <th>Khuyến mãi</th>
                        <th>Sale</th>
                        <th>Status</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products &&
                        products.map(
                          (product: any): JSX.Element => (
                            <ProductItem key={product.id} product={product} />
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
