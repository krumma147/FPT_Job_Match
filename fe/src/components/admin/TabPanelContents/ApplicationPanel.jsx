import React, { useState } from "react";
import ApplicationModal from "../Button/ApplicationModal";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";

const ApplicationPanel = ({
  applications,
  jobs,
  AddApplication,
  ModifyApplication,
  RemoveApplication,
  users,
}) => {
  const HandleDelete = (e, id) => {
    e.preventDefault();
    const cf = window.confirm("Are you sure you want to delete");
    if (cf) {
      RemoveApplication(id);
    }
  };

  const GetUserData = (id) => {
    const user = users.find((u) => u.user.id === id);
    return user ? user.user.userName : "Unknown User";
  };
  const GetJobData = (id) => {
    const job = jobs.find((j) => j.id === id);
    return job ? job.title : "Unknown job";
  };

  return (
    <>
      <div className="bg-grayE8 rounded h-100 p-4 m-4">
        <div className="row mb-4">
          <h4 className="col">Category Manager</h4>
          <div className="col-2">
            <ApplicationModal
              jobs={jobs}
              AddApplication={AddApplication}
              users={users}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User</th>
                <th scope="col">Resume</th>
                <th scope="col">Job</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications?.length > 0
                ? null
                : "There are no application yet!"}
              {applications?.map((ap, index) => (
                <tr>
                  <td className="col-md-1">
                    <span>{index + 1}</span>
                  </td>
                  <td className="col-md-2">{GetUserData(ap.userId)}</td>
                  <td className="col-md-2">{ap.resume}</td>
                  <td className="col-md-3">{GetJobData(ap.jobId)}</td>
                  <td className="col-md-1">{ap.status}</td>
                  <td>
                    <div className="d-flex">
                      <ApplicationModal
                        jobs={jobs}
                        data={ap}
                        ModifyApplication={ModifyApplication}
                        users={users}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => HandleDelete(e, ap.id)}
                      >
                        <Icon path={mdiTrashCan} size={1} /> Delete
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
