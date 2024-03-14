import React from 'react';
import { Link } from 'react-router-dom';

const Registerseller = () => {
  return (
    <>
      <div class="container">
        <img src={require("../../../assets/img/logo.png")} alt="logo" class="mb-3" />
        <p class="font-weight-bold text-center">Please sign up with your account</p>
        <div class="d-flex justify-content-center mb-3">
            <div class="btn-group">
            <Link to={"/auth/registercustomer"}>
              <button class="btn custom-btn btn-outline">Customer</button>
              </Link>
              <button class="btn custom-btn btn-outline">Seller</button>
              
            </div>
        </div>
        <form>
          <div id="seller">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Phone number"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Store name"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          
          <Link to={"/auth/loginseller"}>
          <a class="btn btn-submit font-weight-bold text-white mb-3">
            Primary
          </a>
          </Link>
          <p class="text-center">
            Already have a Tokopedia account? <Link to={"/auth/loginseller"}>Login</Link>
          </p>
        </form>
    </div>
    </>
  )
}

export default Registerseller;
