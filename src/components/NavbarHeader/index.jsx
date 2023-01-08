import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavbarHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container container_nav" style={{ width: "1000px" }}>
          <Link className="navbar-brand" to="/">
            NANO<strong style={{ color: "red" }}>TIA</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className={"d-flex align-items-center"}>
              <div className="dropdown ms-5">
                <button
                  type="button"
                  className="bg-transparent border-0"
                  id="dropdownProfileMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-offset="0,20"
                >
                  <img
                    src={`https://ui-avatars.com/api/?name=rizky&background=CD0404&size=44`}
                    alt="profile"
                    className="rounded-circle"
                    style={{ width: "44px" }}
                  />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end rounded-3"
                  aria-labelledby="dropdownProfileMenu"
                >
                  <li>
                    <Link className="dropdown-item" to="/update-profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item"
                      //   onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
