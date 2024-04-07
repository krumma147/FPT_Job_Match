const SearchSection = () => {
  return (
    <div class="container-fluid search-fluid">
      <div class="container">
        <div class="search-wrapper" style={{ marginTop: "-11rem;" }}>
          <ul class="nav nav-tabs search-nav-tabs" id="myTab" role="tablist">
            <li class="nav-item search-nav-item">
              <a
                class="nav-link snav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Tìm việc làm
              </a>
            </li>
            <li class="nav-item search-nav-item">
              <a
                class="nav-link snav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Tìm công ty
              </a>
            </li>
          </ul>
          <div class="tab-content search-tab-content" id="myTabContent">
            <div
              class="tab-pane stab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form class="bn-search-form">
                <div class="row">
                  <div class="col-md-10 col-sm-12">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="input-group s-input-group">
                          <input
                            type="text"
                            class="form-control sinput"
                            placeholder="Nhập kỹ năng, công việc,..."
                          />
                          <span>
                            <i class="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <select id="computer-languages">
                          <option value="" selected hidden>
                            Tất cả ngôn ngữ
                          </option>
                          <option>Java</option>
                          <option>.NET</option>
                          <option>Javascript</option>
                          <option>Php</option>
                          <option>Python</option>
                          <option>QC QC</option>
                          <option>Business Analyst</option>
                          <option>Tester</option>
                          <option>Ruby</option>
                        </select>
                        <i class="fa fa-code sfa" aria-hidden="true"></i>
                      </div>
                      <div class="col-md-3">
                        <select id="s-provinces">
                          <option value="" selected hidden>
                            Tất cả địa điểm
                          </option>
                          <option>Đà Nẵng</option>
                          <option>Hà Nội</option>
                          <option>Hồ Chí Minh</option>
                          <option>Buôn Ma Thuột</option>
                          <option>Quy Nhơn</option>
                          <option>Nha Trang</option>
                        </select>
                        <i class="fa fa-map-marker sfa" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-primary btn-search col-sm-12"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="tab-pane stab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <form class="bn-search-form">
                <div class="row">
                  <div class="col-md-10 col-sm-12">
                    <div class="input-group s-input-group w-100">
                      <input
                        type="text"
                        class="form-control sinput"
                        placeholder="Nhập kỹ năng, công việc,..."
                      />
                      <span>
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-primary btn-search col-sm-12"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
