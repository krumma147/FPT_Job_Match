import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { checkAccess } from "../../pages/Auth/Auth";

export default function Navbar(props) {
  const isLoggedIn = !!Cookies.get("token");
  const history = useHistory();

  const HandleLogout = () => {
    Cookies.remove("token");
    history.push("/signin");
    window.location.reload();
  };
  return (
    <div className={`container-fluid fluid-nav ${props.page}`}>
      <div className="container cnt-tnar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
          <a href="/" className="nav-logo">
            <img src="/assets/home/img/techjobs_bgb.png" />
          </a>
          <button
            className="navbar-toggler tnavbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars icn-res" aria-hidden="true" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto tnav-left tn-nav">
              <li className="nav-item">
                <a className="nav-link" href="/jobs">
                  Việc Làm IT
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="fa fa-search" aria-hidden="true" />{" "}
                  <span className="hidden-text">Tìm kiếm</span>
                </a>
              </li>
              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <div
                    className="dropdown-menu tdropdown"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                    <a className="dropdown-item" onClick={HandleLogout}>
                      Logout
                    </a>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">
                      Sign In
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  VI
                </a>
                <div
                  className="dropdown-menu tdropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </div>
              </li>
              
              {checkAccess(['Employer']) && (
                <li className="nav-item">
                  <a
                    className="nav-link btn-employers"
                    href="/postnews"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Post Job
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
