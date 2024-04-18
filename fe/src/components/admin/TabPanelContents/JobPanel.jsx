import React, { useEffect, useState } from "react";
import JobModal from "../Button/JobModal";

const JobPanel = ({
  categories,
  jobs,
  AddJob,
  ModifyJob,
  RemoveJob,
  employers,
}) => {
  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete this job?");
    if (cf) {
      RemoveJob(id);
    }
  };

  const GetCategoryName = (id) => {
    const category = categories.find((cat) => cat.id === id);
    return category ? category.name : "Unknown Category";
  };

  return (
    <>
      {/* <CustomToastContainer /> */}
      <div className="bg-grayE8 rounded h-100 p-4 m-4">
        <div className="row mb-4">
          <h4 className="col">Jobs Manager</h4>
          <div className="col-2">
            <JobModal
              AddJob={AddJob}
              categories={categories}
              employers={employers}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Job Title</th>
                <th scope="col">Salary</th>
                <th scope="col">Experiences</th>
                <th scope="col">Education</th>
                <th scope="col">Status</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.length > 0
                ? null
                : "There are no job! Remember to add 'Job Category' first!"}
              {jobs?.map((job, index) => (
                <tr key={index}>
                  <td scope="row">
                    <span>{job.title}</span>
                  </td>
                  <td>{job.salaryRange}</td>
                  <td>
                    {job.experience_required > 1
                      ? `${job.experience_required} years`
                      : `${job.experience_required} year`}
                  </td>
                  <td>{job.education_required}</td>
                  <td>{job.status}</td>
                  <td>{GetCategoryName(job.jobCategoryId)}</td>
                  <td>
                    <div className="d-flex">
                      <JobModal
                        AddJob={AddJob}
                        categories={categories}
                        ModifyJob={ModifyJob}
                        job={job}
                        employers={employers}
                        id={index}
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
    </>
  );
};

export default JobPanel;
