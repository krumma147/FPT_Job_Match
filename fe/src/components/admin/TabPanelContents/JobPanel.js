import React, { Component } from "react";
import JobModal from "../Button/JobModal";

const JobPanel = ({ categories, jobs, AddJob, ModifyJob, RemoveJob }) => {
  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete this job?");
    if (cf) {
      RemoveJob(id);
    }
  };

  return (
    <>
      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-10">
                    <h4 className="text-light">Jobs Manager</h4>
                  </div>
                  <div className="col">
                    {/* <CategoryModal AddCategory={AddCategory} /> */}
                    <JobModal ModifyJob={ModifyJob} categories={categories} />
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      {/* Add job detail here */}
                      <th className="col-md-3"> Job Title </th>
                      {/* <th className="col-md"> Description </th> */}
                      <th className="col-md-2"> SalaryRange </th>
                      <th className="col-md-1 col-sm-0">Experiences</th>
                      <th className="col-md-2 col-sm-0">Education</th>
                      <th className="col-md-1 col-sm-0"> status </th>
                      <th className="col-md-1"> Category </th>
                      <th className="col-md"> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs?.length > 0
                      ? null
                      : "There are no job! Remember to add 'Job Category' first!"}
                    {jobs?.map((job) => (
                      <tr>
                        <td>
                          <span>{job.title}</span>
                        </td>
                        <td>{job.salaryRange}</td>
                        <td>{job.experience_required} year</td>
                        <td>{job.education_required} Level</td>
                        <td>{job.status}</td>
                        <td>{job.jobCategoryId}</td>
                        <td>
                          <div className="d-flex">
                            <JobModal
                              AddJob={AddJob}
                              categories={categories}
                              ModifyJob={ModifyJob}
                              data={job}
                            />
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={(e) => HandleDelete(e, job.id)}
                            >
                              <span class="mdi mdi-trash-can"></span> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPanel;
