/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { getUserName } from "../../pages/Auth/Auth";
import "bootstrap/dist/js/bootstrap.bundle";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
const Navbar = ({ showMessages, setShowMessages }) => {
  //   const { user } = useAuth();
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
    const content = document.querySelector(".content");
    content.classList.toggle("open");
  };
  const isLoggedIn = !!Cookies.get("token");
  const history = useHistory();

  const HandleLogout = () => {
    Cookies.remove("token");
    history.push("/signin");
    window.location.reload();
  };

  const handleBtnMessage = () => {
    setShowMessages(!showMessages);
  };

  return (
    <nav className="navbar navbar-expand bg-grayE8 sticky-top px-4 py-0">
      <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
        <h2 className="text-primary mb-0">
          <i className="fa fa-hashtag" />
        </h2>
      </a>
      <a
        href="#"
        className="sidebar-toggler flex-shrink-0"
        onClick={toggleSidebar}
      >
        <i className="fa fa-bars" />
      </a>
      <form className="d-none d-md-flex ms-4">
        <input
          className="form-control border-0"
          type="search"
          placeholder="Search"
        />
      </form>
      <div className="navbar-nav align-items-center ms-auto">
        <div className="nav-item dropdown">
          <a className="nav-link" onClick={handleBtnMessage}>
            <i className="fa fa-envelope me-lg-2" />
            <span className="d-none d-lg-inline-flex">Message</span>
          </a>
        </div>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-bell me-lg-2" />
            <span className="d-none d-lg-inline-flex">Notificatin</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all notifications
            </a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle d-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src="assets/home/img/jobseeker.jpg"
              alt
              style={{ width: 40, height: 40 }}
            />
            <span className="d-none d-lg-inline-flex">{getUserName()}</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" onClick={HandleLogout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
