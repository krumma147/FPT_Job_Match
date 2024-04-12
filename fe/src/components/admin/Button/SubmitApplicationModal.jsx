import React, { useState } from "react";
import Cookies from "js-cookie";
import Icon from "@mdi/react";
import { useHistory } from "react-router-dom";
import { mdiFileEdit, mdiPlusCircle, mdiArrowUpBox } from "@mdi/js";
// To Do: Add notification!
const SubmitApplicationModal = ({ handleSubmit, id }) => {
  const userData = Cookies.get("userData");
  const history = useHistory();
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");

  const ActiveModal = () => {
    if (!userData) {
      alert("You must sign in to apply for this job!");
      history.push("/signin");
    }
  };

  const ToggleModal = async () => {
    const application = {
      userId: userData.id,
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
    CloseModal();
  };

  const CloseModal = () => {
    setResume("");
    setCoverLetter("");
    setSelfIntroduction("");
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-3 text-left">
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
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-apply"
        data-toggle="modal"
        data-target={`#EditApplicationModal${id}`}
        onClick={ActiveModal}
      >
        <Icon path={mdiArrowUpBox} size={1} />
        Submit
      </button>

      <div
        class="modal fade"
        id={`EditApplicationModal${id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Apply for the job
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

export default SubmitApplicationModal;
