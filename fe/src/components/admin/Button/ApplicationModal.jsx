import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiFileEdit, mdiPlusCircle } from "@mdi/js";

const ApplicationModal = ({ AddApplication, data, jobs }) => {
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [status, setStatus] = useState("");
  const [job, setJob] = useState("");

  const ToggleModal = async () => {
    const application = {
      resume,
      coverLetter,
      selfIntroduction,
      status,
      job,
    };
    //await AddApplication(application);
    CloseModal();
  };

  const CloseModal = () => {
    setResume("");
    setCoverLetter("");
    setSelfIntroduction("");
    setStatus("");
    setJob("");
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-3">
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Full Name"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">UserName</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="UserName"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">Email address</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={selfIntroduction}
          onChange={(e) => setSelfIntroduction(e.target.value)}
        />
      </div>
      {/* <div className="form-floating mb-3">
        <label htmlFor="floatingPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}
    </div>
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={
          data ? `#EditApplicationModal${data.id}` : `#ApplicationModal`
        }
      >
        {data ? (
          <Icon path={mdiFileEdit} size={1} />
        ) : (
          <Icon path={mdiPlusCircle} size={1} />
        )}
        {data ? `Edit` : `Application`}
      </button>

      <div
        class="modal fade"
        id={data ? `EditApplicationModal${data.id}` : `ApplicationModal`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {data ? `Edit Application` : `Add New Application`}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">{ModalBody}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={ToggleModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationModal;
