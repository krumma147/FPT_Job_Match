import React from 'react'

export default function ListJobBody() {
  return (
      <div className="container-fluid mb-5">
          <div className="container search-wrapper">
              <div className="row">
                  <div className="col-md-3 col-sm-12 col-12">
                      <a id="click_advance" className="btn btn-c-filter" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                          <i className="pr-2 fa fa-times" id="icon-s-sw" aria-hidden="true" />Filter &amp; Refind
                      </a>
                      <div className="collapse show" id="collapseExample" style={{}}>
                          <div className="card card-body bg-card-body-filter">
                              <div className="filter-bar">
                                  <div className="filter-form">
                                      <div className="filter-form-item">
                                          <p>
                                              <a id="clickc_advance" className="btnf btn-filter" data-toggle="collapse" href="#filter-topic" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                  Ngành nghề
                                                  <i className="fa fa-angle-up" aria-hidden="true" />
                                              </a>
                                          </p>
                                          <div className="collapse show" id="filter-topic">
                                              <div className="card o-card card-body">
                                                  <div className="filter-panel">
                                                      <div className="panel-content">
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Tất cả ngành nghề</a>
                                                              <span className="filter-count">1,000</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Lập trình viên</a>
                                                              <span className="filter-count">555</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kiểm thử phần mềm</a>
                                                              <span className="filter-count">233</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Thiết kế đồ họa</a>
                                                              <span className="filter-count">100</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Tuyển dụng (HR)</a>
                                                              <span className="filter-count">99</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kĩ sư cầu nối</a>
                                                              <span className="filter-count">95</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">77</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Kỹ sư mạng</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <p>
                                              <a id="clickc2_advance" className="btnf btn-filter" data-toggle="collapse" href="#filter-price" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                  Mức Lương
                                                  <i className="fa fa-angle-up" aria-hidden="true" />
                                              </a>
                                          </p>
                                          <div className="collapse show" id="filter-price">
                                              <div className="card o-card card-body">
                                                  <div className="filter-panel">
                                                      <div className="panel-content">
                                                          <div className="filter-topic filter-input-price">
                                                              <form className="al-price-filter">
                                                                  <span className="_fpblock">
                                                                      <input type="number" className="if-price" id placeholder="50,000" />
                                                                  </span>
                                                                  <span className="_fpblock _line">
                                                                      <p>-</p>
                                                                  </span>
                                                                  <span className="_fpblock">
                                                                      <input type="number" className="if-price" id placeholder="1,000,000" />
                                                                  </span>
                                                                  <span className="_fpblock">
                                                                      <button type="submit" className="sb-fprice"><i className="fa fa-angle-right" aria-hidden="true" /></button>
                                                                  </span>
                                                              </form>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="filter-form-item">
                                          <p>
                                              <a id="clickc3_advance" className="btnf btn-filter" data-toggle="collapse" href="#filter-video-duration" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                  Đánh giá
                                                  <i className="fa fa-angle-up" aria-hidden="true" />
                                              </a>
                                          </p>
                                          <div className="collapse show" id="filter-video-duration">
                                              <div className="card o-card card-body">
                                                  <div className="filter-panel">
                                                      <div className="panel-content">
                                                          <div className="filter-rating">
                                                              <a href="#">
                                                                  <span className="rating-wrapper">
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                  </span>
                                                                  <span>(từ 5 sao)</span>
                                                              </a>
                                                          </div>
                                                          <div className="filter-rating">
                                                              <a href="#">
                                                                  <span className="rating-wrapper">
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star-o" aria-hidden="true" />
                                                                  </span>
                                                                  <span>(từ 4 sao)</span>
                                                              </a>
                                                          </div>
                                                          <div className="filter-rating">
                                                              <a href="#">
                                                                  <span className="rating-wrapper">
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star" aria-hidden="true" />
                                                                      <i className="fa fa-star-o" aria-hidden="true" />
                                                                      <i className="fa fa-star-o" aria-hidden="true" />
                                                                  </span>
                                                                  <span>(từ 3 sao)</span>
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <p>
                                              <a id="clickc4_advance" className="btnf btn-filter" data-toggle="collapse" href="#filter-provider" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                  Cấp bậc
                                                  <i className="fa fa-angle-up" aria-hidden="true" />
                                              </a>
                                          </p>
                                          <div className="collapse show" id="filter-provider">
                                              <div className="card o-card card-body">
                                                  <div className="filter-panel">
                                                      <div className="panel-content">
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Tất cả cấp bậc</a>
                                                              <span className="filter-count">2,450</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Thực tập sinh</a>
                                                              <span className="filter-count">555</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Nhân viên</a>
                                                              <span className="filter-count">233</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Trưởng nhóm</a>
                                                              <span className="filter-count">100</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Trưởng phòng</a>
                                                              <span className="filter-count">99</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Phó giám đốc</a>
                                                              <span className="filter-count">95</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Giám đốc</a>
                                                              <span className="filter-count">77</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Tổng giám đốc điều hành</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Thư kí</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                          <div className="filter-topic cotain-common-filter">
                                                              <a href="#" className="filter-action">Khác</a>
                                                              <span className="filter-count">50</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div> {/* filter bar */}
                          </div>
                      </div> {/* ./ collapse */}
                  </div>
                  <div className="col-md-9 col-sm-12 col-12">
                      <h4 className="search-find">Tìm thấy 4 việc làm đang tuyển dụng</h4>
                      <div className="job-board-wrap">
                          <div className="job-group">
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">[HCM] 02 Solution Architects–Up to $2000</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">Fpt Software</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Đà Nẵng</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> Java</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/12/2019</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/alipay-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">Fullstack .NET Developer (Angular/React)</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">Orient Software</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Hà Nội</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> .NET</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/02/2020</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/nvg-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">Frontend Developer (JavaScript, ReactJS)</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">mgm technology</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Đà Nẵng</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> JavaScript, ReactJS</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/12/2019</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/luxoft-vietnam-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">IVI System Test Engineer</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">NVG TECHNOLOGY</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Đà Nẵng</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> Javascript</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/12/2019</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">[HCM] 02 Solution Architects–Up to $2000</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">Fpt Software</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Đà Nẵng</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> Java</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/12/2019</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="job pagi">
                                  <div className="job-content">
                                      <div className="job-logo">
                                          <a href="#">
                                              <img src="assets/home/img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                          </a>
                                      </div>
                                      <div className="job-desc">
                                          <div className="job-title">
                                              <a href="#">[HCM] 02 Solution Architects–Up to $2000</a>
                                          </div>
                                          <div className="job-company">
                                              <a href="#">Fpt Software</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                  Đà Nẵng</a>
                                          </div>
                                          <div className="job-inf">
                                              <div className="job-main-skill">
                                                  <i className="fa fa-code" aria-hidden="true" />  <a href="#"> Java</a>
                                              </div>
                                              <div className="job-salary">
                                                  <i className="fa fa-money" aria-hidden="true" />
                                                  <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                  <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                              </div>
                                              <div className="job-deadline">
                                                  <span><i className="fa fa-clock-o" aria-hidden="true" />  Hạn nộp: <strong>31/12/2019</strong></span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="wrap-btn-appl">
                                          <a href="#" className="btn btn-appl">Apply Now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
