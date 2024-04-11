import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiFileEdit, mdiPlusCircle } from "@mdi/js";

const ApplicationModal = ({
  AddApplication,
  data,
  jobs,
  ModifyApplication,
  users,
}) => {
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [status, setStatus] = useState("");
  const [job, setJob] = useState("");
  const [user, setUser] = useState("");

  const ToggleModal = async () => {
    const application = {
      userId: user,
      resume,
      coverLetter,
      selfIntroduction,
      status,
      jobId: job,
    };
    if (data) {
      await ModifyApplication(data.id, application);
    } else {
      await AddApplication(application);
    }
    CloseModal();
  };

  const ActiveModal = () => {
    console.log(data);
    if (data) {
      setResume(data.resume);
      setCoverLetter(data.coverLetter);
      setSelfIntroduction(data.selfIntroduction);
      setStatus(data.status);
      setJob(data.jobId);
      setUser(data.userId);
    }
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
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Users
            </label>
          </div>
          <select
            className="custom-select"
            onChange={(e) => setUser(e.target.value)}
          >
            <option selected>Select user here</option>
            {users.length > 0 ? (users?.filter((u) => u.roles[0].toLowerCase() === "jobseeker")
              .map((u) => (
                <option key={u.user.id} value={u.user.id}>
                  {u.user.userName}
                </option>
              ))) : <option>No jobseeker found</option>}
          </select>
        </div>
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">Resume</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">Cover Letter</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Cover Letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="floatingInput">Self Introduction</label>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Self Introduction"
          value={selfIntroduction}
          onChange={(e) => setSelfIntroduction(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Jobs
            </label>
          </div>
          <select
            className="custom-select"
            onChange={(e) => setJob(e.target.value)}
          >
            <option selected>Select job here</option>
            {jobs?.map((j) => (
              <option value={j.id}>{j.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-floating mb-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Status
            </label>
          </div>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="custom-select"
            id="inputGroupSelect01"
          >
            <option selected>Select status here</option>
            <option value={"Denied"}>Denied</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Approve"}>Approve</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        onClick={ActiveModal}
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
                data-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">{ModalBody}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={CloseModal}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
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
