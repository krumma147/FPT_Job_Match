import React, { useState, useEffect } from "react";
import UserHook from "../../../hooks/UserHook";
const JobDetailModal = ({ job, id, GetApplication, GetUserName }) => {
  const [showModal, setShowModal] = useState(false);
  const [application, setApplicaiton] = useState({});

  useEffect(() => {
    const appData = GetApplication(job.id);
    //console.log(appData);
    setApplicaiton(appData);
  }, []);

  const toggleUserDetailModal = () => {
    setShowModal(!showModal);
  };

  const DisplayApplication = ({ apps }) =>
    apps.map((application, index) => (
      <div key={index} className="modal-body">
        <div className="row">
          <span className="col-md-3 text-center">
            <h4>Candidate {index + 1}</h4>
          </span>
          <span className="col-md">
            <p className="text-dark">Resume: {application.resume}</p>
            <p className="text-dark">Status: {application.status}</p>
            <p className="text-dark">
              Full Name: {GetUserName(application.userId).name}
            </p>
          </span>
        </div>
      </div>
    ));

  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        onClick={toggleUserDetailModal}
      >
        {job.title}
      </button>

      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
          onClick={toggleUserDetailModal}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{job.title} Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleUserDetailModal}
                />
              </div>
              {application.length > 0 ? (
                <DisplayApplication apps={application} />
              ) : (
                <p>No Applications were apply for this job</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetailModal;
