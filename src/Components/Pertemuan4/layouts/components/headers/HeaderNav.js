import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "../../components/headers/Header.css";

export default function HeaderNav() {
  const menuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 3, name: "Collection", path: "/collection", icon: "bi-collection" },
    { id: 3, name: "Orders", path: "/orders", icon: "bi-patch-plus" },
    { id: 5, name: "Payment", path: "/payment", icon: "bi-credit-card" },
    { id: 5, name: "Logout", path: "/login", icon: "bi-credit-card" },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top shadow bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="Silenties-logo"
              className="Logogua"
              style={{
                marginTop: "-3px",
                textAlign: "center",
                fontFamily:
                  "https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap",
              }}
            />
            <span className="NM">Silenties</span>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0 TY ">
                  {menuList.map((v, index) => (
                    <li className="nav-item me-1" key={index}>
                      <NavLink
                        className="nav-link text-hover-success px-3"
                        to={v.path}
                      >
                        <i className={"bi me-2 fs-5 text-dark " + v.icon}></i>
                        {v.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
