import React from "react";
import { Route, Routes } from "react-router-dom";
// import Layouts from '../../layouts/Layouts'
import Home from "../../modules/components/Homes/Home";
import Orders from "../../modules/components/Orders/Orders";
import Formquiz from "../../modules/components/Quiz/Formquiz";
import Collection from "../../modules/components/Collection/Collection";
import Payment from "../../modules/components/Payment/Payment";
import Detailcol from "../../modules/components/Collection/Detailcol";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="orders" element={<Orders />} />
      <Route path="collection" element={<Collection />} />
      <Route path="payment" element={<Payment />} />
      <Route path="detailcol" element={<Detailcol />} />
    </Routes>
  );
}
