import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "../../../assets/style/style.css"

const Logincustomer = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setToken("token saya");
    // Simulasi autentikasi, ganti ini dengan logika autentikasi yang sesungguhnya
    // const isAuthenticated = true;
    // if (isAuthenticated) {
    // Simpan token ke local storage
    localStorage.setItem("token", Date.now());
    // Arahkan pengguna ke halaman beranda
    navigate("/home");
    // } else {
    // Handle autentikasi gagal
    // }
  }

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <>
    <div className="container">
        <img src={require("../../../assets/img/logo.png")} alt="logo" className="mb-3" />
        <p className="font-weight-bold text-center">Please login with your account</p>
        <div className="d-flex justify-content-center mb-3">
            <div className="btn-group">
              <button type="button" className="btn custom-btn btn-outline">Customer</button>
              <Link to={"/auth/loginseller"}>
              <button type="button" className="btn custom-btn btn-outline">Seller</button>
              </Link>
            </div>
        </div>
  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check text-right">
            <a href="#" className="font-weight-normal">Forgot Password</a>
          </div>
       
          <button type="submit" className="btn btn-submit font-weight-bold text-white mb-3">
          <h6 className="login">LOGIN</h6>
          </button>
  
          <p className="text-center">
            Don't have a Tokopedia account? <Link to={"/auth/registerseller"}>Register</Link>
          </p>
        </form>
    </div>

    </>
  )
}

export default Logincustomer
