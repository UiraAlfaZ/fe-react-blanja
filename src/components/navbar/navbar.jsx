import React from 'react'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header id="">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ml-2">
              <input
                className="form-control mr-2 input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <img className="mr-4" src={require("../../assets/img/cart.png")} alt="cart" />
            <Link to={"../auth/logincustomer"}>
            <button className="btn custom-btn btn-outline-rounded mr-2">
              <a>Login</a>
            </button>
            </Link>
            <Link to={"../auth/registercustomer"}>
            <button className="btn btn-outline custom-btn custom-btn-rounded">
              <a href="./pages/signup.html">Signup</a>
            </button>
            </Link>
          </form>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
