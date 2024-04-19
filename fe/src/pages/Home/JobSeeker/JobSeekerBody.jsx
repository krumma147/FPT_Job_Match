import React from "react";
import "./JobSeeker.css";
import JobDetailModal from "../../../components/admin/Button/JobDetailModal";
import Icon from "@mdi/react";
import { mdiCog, mdiPencil, mdiDelete } from "@mdi/js";
import JobHooks from "../../../hooks/JobHook";
import ApplicationHook from "../../../hooks/ApplicationHook";
export default function JobSeekerBody({
  jobs,
  FindJobCategory,
  GetApplication,
  GetUserName,
  ReFetchingData,
}) {
  const HandleDeleteJob = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete? This will delete all applications related to this"
      )
    ) {
      //alert("Deleting job ...");
      const applications = await GetApplication(id);
      //console.log(applications);
      
      // Sử dụng Promise.all để đợi cho tất cả các yêu cầu xóa được thực hiện
      await Promise.all(
        applications.map((a) => ApplicationHook.DeleteApplication(a.id))
      );
      await JobHooks.DeleteJob(id);
      await ReFetchingData();
    }
  };

  return (
    <div className="featured_candidates_area candidate_page_padding">
      <div className="container">
        <div className="row">
          {jobs?.length > 0 ? (
            jobs.map((j, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="d-flex justify-content-end">
                    <div class="btn-group dropright">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Icon path={mdiCog} size={1} />
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          class="dropdown-item text-info"
                          href={`/postnews/${j.id}`}
                        >
                          <Icon path={mdiPencil} size={1} /> Edit
                        </a>
                        <button
                          class="dropdown-item text-danger"
                          onClick={() => HandleDeleteJob(j.id)}
                        >
                          <Icon path={mdiDelete} size={1} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="thumb">
                    <img src="assets/home/img/jobseeker.jpg" />
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
                  <p>Field: {FindJobCategory(j.jobCategoryId).name}</p>
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
                    <i className="fas fa-angle-right"></i>
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
