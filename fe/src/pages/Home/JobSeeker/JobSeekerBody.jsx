import React from "react";
import "./JobSeeker.css";
import JobDetailModal from "../../../components/admin/Button/JobDetailModal";

export default function JobSeekerBody({
  jobs,
  FindJobCategory,
  GetApplication,
  GetUserName,
}) {
  return (
    <div className="featured_candidates_area candidate_page_padding">
      <div className="container">
        <div className="row">
          {jobs?.length > 0 ? (
            jobs.map((j, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="assets/home/img/jobseeker.jpg" alt />
                  </div>
                  <a href="#">
                    <h4>
                      <JobDetailModal
                        job={j}
                        GetApplication={GetApplication}
                        GetUserName={GetUserName}
                      />
                    </h4>
                  </a>
                  <p>{FindJobCategory(j.jobCategoryId).name}</p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h4>Post a job to see list of applications</h4>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="pagination_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-angle-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>01</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>02</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fas fa-angle-right"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
