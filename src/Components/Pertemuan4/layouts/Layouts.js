import React from "react";
import Footers from "./components/footers/Footers";
import HeaderNav from "./components/headers/HeaderNav";
import ModalPopUp from "./components/modals/ModalPopUp";
import "bootstrap-icons/bootstrap-icons.svg";
import "./layout.css";

export default function Layouts(props) {
  return (
    <div class="bg" id="main-layout">
      <HeaderNav />

      <main class="bc">{props.children}</main>

      <Footers />
      <ModalPopUp />
    </div>
  );
}
