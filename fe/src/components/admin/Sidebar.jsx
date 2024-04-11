import React from "react";

const Sidebar = () => {
  return (
    <nav className="navbar">
      <a href="index.html" className="navbar-brand mx-4 mb-3">
        <h3 className="text-primary">
          <i className="fa fa-hashtag me-2" />
          DASHMIN
        </h3>
      </a>
      <div className="d-flex align-items-center ms-4 mb-4">
        <div className="position-relative">
          <img
            className="rounded-circle"
            src="./assets/admin/img/user.jpg"
            alt
            style={{ width: 40, height: 40 }}
          />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">Jhon Doe</h6>
          <span>Admin</span>
        </div>
      </div>
      <div className="navbar-nav w-100">
        <ul className="nav nav-tabs" id="adminTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="dashboard-tab"
              data-toggle="tab"
              href="#dashboard"
              role="tab"
              aria-controls="dashboard"
              aria-selected="true"
            >
              <i class="fa fa-tachometer-alt me-2" />
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="jobs-tab"
              data-toggle="tab"
              href="#jobs"
              role="tab"
              aria-controls="jobs"
              aria-selected="false"
            >
              <i className="fa fa-th me-2" />
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="categories-tab"
              data-toggle="tab"
              href="#categories"
              role="tab"
              aria-controls="categories"
              aria-selected="false"
            >
              <i className="fa fa-keyboard me-2" />
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="application-tab"
              data-toggle="tab"
              role="tab"
              href="#application"
              aria-controls="application"
              aria-selected="false"
            >
              <i className="fa fa-table me-2" />
              Application
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="users-tab"
              data-toggle="tab"
              role="tab"
              href="#users"
              aria-controls="users"
              aria-selected="false"
            >
              <i className="fa fa-chart-bar me-2" />
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
