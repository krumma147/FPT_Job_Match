const MainNav = () => {
  return (
    <div className="container-fluid fluid-nav">
      <div className="cnt-tnar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
          <a href="#" className="nav-logo">
            <img src="./assets/images/techjobs_bgb.png" />
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
                <a className="nav-link" href="#">
                  Việc Làm IT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
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
                  Dropdown
                </a>
                <div
                  className="dropdown-menu tdropdown"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            
            <ul className="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="fa fa-search" aria-hidden="true" />
                  <span className="hidden-text">Tìm kiếm</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Đăng Ký
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  Đăng Nhập
                </a>
              </li>
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
              <li className="nav-item">
                <a
                  className="nav-link btn-employers"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Nhà Tuyển Dụng
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
