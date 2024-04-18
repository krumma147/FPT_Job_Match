import React, { useState } from "react";
import Cookies from "js-cookie";
import Icon from "@mdi/react";
import { useHistory } from "react-router-dom";
import { mdiArrowUpBox } from "@mdi/js";
import { getUserId, checkAccess } from "../../../pages/Auth/Auth";

const SubmitApplicationModal = ({ handleSubmit, id }) => {
  const token = Cookies.get("token");
  const history = useHistory();
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [userId, setUserId] = useState({});
  //console.log(token, checkAccess("JobSeeker"));
  //console.log(checkAccess("jobseeker") === "jobseeker");
  const activeModal = () => {
    if (!getUserId()) {
      //console.log("Doesn't Have token");
      alert("You must sign in first!");
      history.push("/signin");
      window.location.reload();
    } else if (checkAccess("jobseeker")) {
      alert("Only job seeker could apply!");
      history.push("/");
      window.location.reload();
    } else {
      const id = getUserId();
      setUserId(id);
    }
  };

  const toggleSubmitModal = async () => {
    const application = {
      userId: userId,
      resume,
      coverLetter,
      selfIntroduction,
      status: "pending",
      jobId: id,
    };
    if (resume !== "" && coverLetter !== "" && selfIntroduction !== "") {
      handleSubmit(application);
    } else {
      alert("Please fill in all fields");
      return;
    }
    closeModal();
  };

  const closeModal = () => {
    setResume("");
    setCoverLetter("");
    setSelfIntroduction("");
  };

  const modalBody = (
    <div className="bg-light rounded h-100 p-3 text-left">
      <div className="form-floating mb-3">
        <label htmlFor="resume">Resume</label>
        <input
          type="text"
          className="form-control"
          id="resume"
          placeholder="Resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="coverLetter">Cover Letter</label>
        <input
          type="text"
          className="form-control"
          id="coverLetter"
          placeholder="Cover Letter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="selfIntroduction">Self Introduction</label>
        <input
          type="text"
          className="form-control"
          id="selfIntroduction"
          placeholder="Self Introduction"
          value={selfIntroduction}
          onChange={(e) => setSelfIntroduction(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-apply"
        data-toggle="modal"
        data-target={`#EditApplicationModal${id}`}
        onClick={activeModal}
      >
        <Icon path={mdiArrowUpBox} size={1} />
        Submit
      </button>
      <div
        className="modal fade"
        id={`EditApplicationModal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Apply for the job
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">{modalBody}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={toggleSubmitModal}
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

export default SubmitApplicationModal;
