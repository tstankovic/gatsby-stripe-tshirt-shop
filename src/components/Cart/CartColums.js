import React from "react"

export default function CartColums() {
  return (
    <div
      className="container text-center d-none d-lg-block mt-5"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="lead">total</p>
        </div>
      </div>
    </div>
  )
}
