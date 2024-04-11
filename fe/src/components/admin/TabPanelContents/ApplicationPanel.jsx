import React, { useState } from "react";
import ApplicationModal from "../Button/ApplicationModal";
const ApplicationPanel = ({applications, jobs}) => {

  const TestBtnHandle = () => {
    alert("Testing Adding Application Btn!");
  };

  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete");
    if (cf) {
      //RemoveCategory(id);
    }
  };

  return (
    <>
      <div className="bg-grayE8 rounded h-100 p-4 m-4">
        <div className="row mb-4">
          <h4 className="col">Category Manager</h4>
          <div className="col-2">
            <ApplicationModal jobs={jobs} />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Job Category Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications?.length > 0 ? null : "There are no application yet!"}
              {applications?.map((cat) => (
                <tr>
                  <td>
                    <span className="col">{cat.id}</span>
                  </td>
                  <td className="col">{cat.name}</td>
                  <td>
                    <div className="d-flex">
                      <ApplicationModal jobs={jobs}
                        data={cat}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => HandleDelete(e, cat.id)}
                      >
                        Delete
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

export default ApplicationPanel;
