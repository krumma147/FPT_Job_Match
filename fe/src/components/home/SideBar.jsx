import React, { useState, useEffect } from "react";

export default function SideBar({jobs}) {
  const [visibleJobs, setVisibleJobs] = useState(7);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  let safeJobs = jobs || [];
  return (
    <div className="container-fluid jb-wrapper">
      <div className="container">
        <div className="row">
          {/* job board */}
          <div className="col-md-8 col-sm-12 col-12">
            <div className="job-board-wrap">
              <h2 className="widget-title">
                <span>Hot Jobs</span>
              </h2>
              <div className="job-group">
                <div className="job pagi">
                  {jobs?.length > 0 &&
                    jobs
                      .slice(0, showAll ? jobs.length : visibleJobs)
                      .map((j, index) => (
                        <div key={index} className="job-content">
                          <div className="job-logo">
                            <a>
                              <img
                                src="assets/home/img/fpt-logo.png"
                                className="job-logo-ima"
                                alt="job-logo"
                              />
                            </a>
                          </div>
                          <div className="job-desc">
                            <div className="job-title">
                              <a href={`/jobs/detail/${j.id}`}>{j.title}</a>
                            </div>
                            <div className="job-company">
                              <a href="#">Fpt Software</a>
                              <a href="#" className="job-address">
                                <i
                                  className="fa fa-map-marker"
                                  aria-hidden="true"
                                />
                                None
                              </a>
                            </div>
                            <div className="job-inf">
                              <div className="job-main-skill">
                                <i className="fa fa-code" aria-hidden="true" />
                                <a href="#">{j.jobCategoryId}</a>
                              </div>
                              <div className="job-salary">
                                <p>
                                  {j.salaryRange}
                                  <i
                                    className="fa fa-money"
                                    aria-hidden="true"
                                  />
                                </p>
                                {/* <span className="salary-min">
                                  15<em className="salary-unit">triệu</em>
                                </span> */}
                                {/* <span className="salary-max">
                                   <em className="salary-unit">triệu</em>
                                </span> */}
                              </div>
                              <div className="job-deadline">
                                <span>
                                  <i
                                    className="fa fa-clock-o"
                                    aria-hidden="true"
                                  />
                                  Deadlines:
                                  <strong>
                                    {j.application_deadline.split("T")[0]}
                                  </strong>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="wrap-btn-appl">
                            <a href="#" className="btn btn-appl">
                              Apply Now
                            </a>
                          </div>
                        </div>
                      ))}
                </div>
                <div className="readmorestyle-wrap">
                  {jobs?.length > visibleJobs && (
                    <a className="readallstyle reads1" onClick={toggleShowAll}>
                      {showAll ? "Collapse" : "Show More"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* (end) job board */}
          {/* sidebar */}
          <div className="col-md-4 col-sm-12 col-12 clear-left">
            <div className="job-sidebar">
              <h2 className="widget-title">
                <span>Ngành Nghề</span>
              </h2>
              <div className="catelog-list">
                <ul>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>Lập trình viên</em>
                      </span>
                      <span className="cate-count">(1100)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>Nhân viên kiểm thử</em>
                      </span>
                      <span className="cate-count">(230)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>Kỹ sư cầu nối</em>
                      </span>
                      <span className="cate-count">(110)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>Designer</em>
                      </span>
                      <span className="cate-count">(2300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>Product Manager</em>
                      </span>
                      <span className="cate-count">(99)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="cate-img">
                        <em>HR</em>
                      </span>
                      <span className="cate-count">(300)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="readallstyle reads1">
                      Xem tất cả
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-sidebar">
              <div className="sb-banner">
                <img src="assets/home/img/ads1.jpg" className="advertisement" />
              </div>
            </div>
          </div>
          {/* (end) sidebar */}
        </div>
      </div>
    </div>
  );
}
