import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaShoppingCart } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")

  const navbarHandler = () => {
    if (navbarOpen) {
      setCss("collapse navbar-collapse")
      setNavbarOpen(false)
    } else {
      setCss("collapse navbar-collapse show")
      setNavbarOpen(true)
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={css}>
            <ul className="navbar-nav">
              <li className="nav-item lead py-1 mr-5">
                <Link className="nav-link" to="/products/">
                  T-shirts
                </Link>
              </li>
              <li className="nav-item lead py-1">
                <Link className="nav-link pt-0 pt-lg-2" to="/cart/">
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="navbar-brand">
            Custos Fidelis
          </Link>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
