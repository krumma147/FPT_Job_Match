import React from "react";

export default function Search(props) {
  return (
    <div className="container-fluid search-fluid">
      <div className="container">
        <div className="search-wrapper" style={props.searchHome}>
          <ul
            className="nav nav-tabs search-nav-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item search-nav-item">
              <a
                className="nav-link snav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                style={props.search}
              >
                Tìm việc làm
              </a>
            </li>
            <li className="nav-item search-nav-item">
              <a
                className="nav-link snav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                style={props.search}
              >
                Tìm công ty
              </a>
            </li>
          </ul>
          <div className="tab-content search-tab-content" id="myTabContent">
            {/* content tab 1 */}
            <div
              className="tab-pane stab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form className="bn-search-form">
                <div className="row">
                  <div className="col-md-10 col-sm-12">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="input-group s-input-group">
                          <input
                            type="text"
                            className="form-control sinput"
                            placeholder="Searching for job name"
                            value={props.searchKey}
                            onChange={(e) => props.setSearchKey(e.target.value)}
                          />
                          <span>
                            <i className="fa fa-search" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <select
                          id="computer-languages"
                          onChange={(e) =>
                            props.setFilterCategory(e.target.value)
                          }
                        >
                          <option value={""} defaultValue>
                            All Fields
                          </option>
                          {props.categories?.length > 0
                            ? props.categories?.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                  {cat.name}
                                </option>
                              ))
                            : "No fields are available"}
                        </select>
                        <i className="fa fa-code sfa" aria-hidden="true" />
                      </div>
                      <div className="col-md-3">
                        <select id="s-provinces">
                          <option value selected hidden>
                            Tất cả địa điểm
                          </option>
                          <option>Đà Nẵng</option>
                          <option>Hà Nội</option>
                          <option>Hồ Chí Minh</option>
                          <option>Buôn Ma Thuột</option>
                          <option>Quy Nhơn</option>
                          <option>Nha Trang</option>
                        </select>
                        <i
                          className="fa fa-map-marker sfa"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-search col-sm-12"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* (end) content tab 1 */}
            {/* content tab 2 */}
            <div
              className="tab-pane stab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <form className="bn-search-form">
                <div className="row">
                  <div className="col-md-10 col-sm-12">
                    <div className="input-group s-input-group w-100">
                      <input
                        type="text"
                        className="form-control sinput"
                        placeholder="Nhập kỹ năng, công việc,..."
                      />
                      <span>
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-search col-sm-12"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* (end) content tab 2 */}
          </div>
        </div>
      </div>
    </div>
  );
}
