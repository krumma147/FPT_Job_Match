import React from "react";
import SubmitApplicationModal from "../../../components/admin/Button/SubmitApplicationModal";
import ApplicationHook from "../../../hooks/ApplicationHook";
import Swal from "sweetalert2";
export default function JobDetailBody({ job, relatedJobs, findAuthor }) {
  const handleSubmit = async (application) => {
    try {
      const res = await ApplicationHook.CreateApplication(application);
      Swal.fire("Successful", res.data, "success");
    } catch (e) {
      Swal.fire("Error", e.res.data, "error");
    }
  };

  return (
    <div>
      <div className="container-fluid job-detail-wrap">
        <div className="container job-detail">
          <div className="job-detail-header">
            <div className="row">
              <div className="col-md-2 col-sm-12 col-12">
                <div className="job-detail-header-logo">
                  <a href="#">
                    <img
                      src="assets/home/img/fpt-logo.png"
                      className="job-logo-ima"
                      alt="job-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-12">
                <div className="job-detail-header-desc">
                  <div className="job-detail-header-title">
                    <a href="#">{job.title}</a>
                  </div>
                  <div className="job-detail-header-company">
                    <a href="#">Fpt Software</a>
                  </div>
                  <div className="job-detail-header-de">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker icn-jd" />
                        <span>Đà Nẵng</span>
                      </li>
                      <li>
                        {job.salaryRange}
                        {/* <i className="fa fa-usd icn-jd" /> */}
                        {/* <span>15 triệu - 20 triệu</span> */}
                      </li>
                      <li>
                        <i className="fa fa-calendar icn-jd" />
                        {/* <span>15/01/2019</span> */}
                        {job.application_deadline.split("T")[0]}
                      </li>
                    </ul>
                  </div>
                  <div className="job-detail-header-tag">
                    <ul>
                      {/* <li>
                        <a href="#">Java</a>
                      </li>
                      <li>
                        <a href="#">.NET</a>
                      </li>
                      <li>
                        <a href="#">SQL</a>
                      </li>
                      <li>
                        <a href="#">C#</a>
                      </li> */}
                      <li>{job.jobCategoryId}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-12">
                <div className="jd-header-wrap-right">
                  <div className="jd-center">
                    {/* <button
                      href="#"
                      className="btn btn-primary btn-apply"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </button> */}
                    <SubmitApplicationModal
                      id={job.id}
                      handleSubmit={handleSubmit}
                    />
                    <p className="jd-view">
                      Lượt xem: <span>1.520</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Phần thân */}
      <div className="wrapper">
        <div className="container">
          <div className="row">
            {/* Main wrapper */}
            <div className="col-md-8 col-sm-12 col-12 clear-left">
              <div className="main-wrapper">
                {/* content */}
                <h2 className="widget-title">
                  <span>Description</span>
                </h2>
                <div
                  className="jd-content"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-md-4 col-sm-12 col-12 clear-right">
              <div className="side-bar mb-3">
                <h2 className="widget-title">
                  <span>Thông tin</span>
                </h2>
                <div className="job-info-wrap">
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Nơi làm việc:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">Đà Nẵng</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Cấp bậc:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">Nhân viên</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Lương:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">1000$ - 3000$</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Hạn nộp:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">31/12/2019</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Ngành nghề:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">Quảng cáo, Đối ngoại</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Kỹ năng:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">PR Activity</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-info-list">
                    <div className="row">
                      <div className="col-sm-4">
                        <span className="ji-title">Kinh nghiệm:</span>
                      </div>
                      <div className="col-sm-8">
                        <span className="ji-main">1 năm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="side-bar mb-3">
                <h2 className="widget-title">
                  <span>Giới thiệu công ty</span>
                </h2>
                <div className="company-intro">
                  <a href="#">
                    <img
                      src="assets/home/img/fpt-logo.png"
                      className="job-logo-ima"
                      alt="job-logo"
                    />
                  </a>
                </div>
                <h2 className="company-intro-name">Fpt Software</h2>
                <ul className="job-add">
                  {/* <li>
                    <i className="fa fa-map-marker ja-icn" />
                    <span>
                      Trụ sở: 212 Phan Đăng Lưu - Hòa Cường Bắc - Hải Châu - Đà
                      Nẵng{" "}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-bar-chart ja-icn" />
                    <span>Quy mô công ty: 50-100 người</span>
                  </li> */}
                  <li>
                    <i className="fa fa-bar-chart ja-icn" />
                    <span>Upload by: {findAuthor(job.employerId).name}</span>
                  </li>
                </ul>
                <div className="wrap-comp-info mb-2">
                  <a href="#" className="btn btn-primary btn-company">
                    Xem thêm
                  </a>
                </div>
              </div>
              <div className="side-bar mb-3">
                {/* Adding other related field job */}
                <h2 className="widget-title">
                  <span>Related Jobs</span>
                </h2>
                <div className="job-tt-contain">
                  {relatedJobs.length > 0
                    ? relatedJobs.map((j) => (
                        <div className="job-tt-item">
                          <a href="#" className="thumb">
                            <div
                              style={{
                                backgroundImage:
                                  "url(assets/home/img/alipay-logo.png)",
                              }}
                            />
                          </a>
                          <div className="info">
                            <a href="#" className="jobname">
                              {j.title}
                            </a>
                            <a href="#" className="company">
                              {j.application_deadline.split("T")[0]}
                            </a>
                          </div>
                        </div>
                      ))
                    : "No Related Jobs Available!"}
                </div>
              </div>
              <div className="side-bar mb-3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="home-ads">
                        <a href="#">
                          <img src="assets/home/img/ads1.jpg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* (end) Phần thân */}
    </div>
  );
}
