import React from "react"
import { Link } from "gatsby"

export default function Pagination({ currentPage, numPages }) {
  const prevCss = currentPage === 1 ? "page-item disabled" : "page-item"
  const nextCss = currentPage === numPages ? "page-item disabled" : "page-item"
  return (
    <div className="row mt-5">
      <div className="col-10 mx-auto col-lg-5">
        <nav>
          <ul className="pagination pagination-lg">
            <li className={prevCss}>
              <Link to="/products" className="page-link" tabIndex="-1">
                previous
              </Link>
            </li>
            {currentPage > 1 ? (
              <li className="page-item">
                <Link to="/products/" className="page-link">
                  1
                </Link>
              </li>
            ) : null}
            {currentPage > 2 ? (
              <li className="page-item">
                <Link to={`/products/${currentPage - 1}`} className="page-link">
                  {currentPage - 1}
                </Link>
              </li>
            ) : null}
            <li className="page-item active">
              <Link
                to={`/products${currentPage > 1 ? `/${currentPage}/` : `/`}`}
                className="page-link"
              >
                {currentPage} <span className="sr-only">(current)</span>
              </Link>
            </li>
            {currentPage < numPages - 1 ? (
              <li className="page-item">
                <Link to={`/products/${currentPage + 1}`} className="page-link">
                  {currentPage + 1}
                </Link>
              </li>
            ) : null}
            {currentPage < numPages ? (
              <li className="page-item">
                <Link to={`/products/${numPages}`} className="page-link">
                  {numPages}
                </Link>
              </li>
            ) : null}
            <li className={nextCss}>
              <Link to={`/products/${currentPage + 1}`} className="page-link">
                next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
