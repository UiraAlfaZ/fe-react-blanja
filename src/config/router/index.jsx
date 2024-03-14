import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import Logincustomer from '../../pages/auth/logincustomer/logincustomer';
import Home from '../../pages/home';
import Registercustomer from '../../pages/auth/registercustomer/registercustomer';
import Loginseller from '../../pages/auth/loginseller/loginseller';
import Registerseller from '../../pages/auth/registerseller/registerseller';
import ReqAuth from '../../components/reauth/reauth';

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path='/home' element={<ReqAuth><Home/></ReqAuth>}/>
        <Route path='/auth/loginseller' element={<Loginseller/>}/>
        <Route path='/auth/logincustomer' element={<Logincustomer/>}/>
        <Route path='/auth/registercustomer' element={<Registercustomer/>}/>
        <Route path='/auth/registerseller' element={<Registerseller/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
