import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Build lại

const JobModal = ({ AddJob, categories, ModifyJob, job, employers, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [yearRequire, setYearRequire] = useState(0);
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [education, setEducation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  const [isYearEnabled, setIsYearEnabled] = useState(false);
  const [status, setStatus] = useState(false);
  const [employer, setEmployer] = useState("");
  const [jobData, setJobData] = useState(null);

  let jobStatus = status ? "open" : "closed";

  const ToggleJobModal = async () => {
    const salary = "$ " + salaryRange.toString();
    const jobDate = new Date(selectedDate).toISOString();
    if (isRangeEnabled) {
      setSalaryRange("Discuss during interview");
    }

    const job = {
      title,
      description,
      salaryRange: salary,
      experience_required: yearRequire,
      skill_required: skill,
      jobCategoryId: category,
      education_required: education,
      application_deadline: jobDate,
      status: jobStatus,
      employerId: employer,
    };
    if (
      title === "" &&
      description === "" &&
      category === "" &&
      skill === "" &&
      education === null &&
      selectedDate === null
    ) {
      alert("Please fill required data");
      return;
    }
    if (job) {
      alert(`Update data with id: ${job.id}`);
      await ModifyJob(job.id, job);
    } else {
      await AddJob(job);
    }
    //console.log(job);
    CloseModal();
  };

  useEffect(() => {
    if (job) {
      setTitle(job.title);
      setDescription(job.description);
      setCategory(job.jobCategoryId);
      setSkill(job.skill_required);
      setEducation(job.education_required);
      setSelectedDate(job.application_deadline);
      job.status === "open" ? setStatus(true) : setStatus(false);
    }
  }, [job]);

  const ActiveModal = () => {
    if (job) {
      console.log(job);
      console.log("Data after setState", job);
      console.log("Data Stored:", jobData);
    }
  };

  const CloseModal = () => {
    setTitle("");
    setDescription("");
    setSalaryRange(0);
    setYearRequire(0);
    setCategory("");
    setSkill("");
    setEducation(null);
    setSelectedDate(null);
    setIsRangeEnabled(false);
    setIsYearEnabled(false);
    setEmployer("");
    //setJobData(null);
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-2">
      <div className="form-floating mb-2">
        {job ? (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Job still in active?
            </label>
          </div>
        ) : null}
      </div>

      <div className="form-floating mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Job Title
        </label>
        <input
          type="text"
          class="form-control rounded"
          aria-describedby="emailHelp"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-floating mb-3">
        <div className="row">
          <div class="col">
            <label for="exampleInputEmail1" class="form-label">
              Category
            </label>
            <br />
            <select
              class="custom-select custom-select-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected>Open this select menu</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div class="col">
            <label for="exampleInputEmail1" class="form-label">
              Employer
            </label>
            <br />
            <select
              class="custom-select custom-select-sm"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            >
              <option selected>Open this select menu</option>
              {employers?.map((e, index) => (
                <option key={index} value={e.user.id}>
                  {e.fullName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-floating mb-3">
        <div className="row">
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">
              Skills Required
            </label>
            <input
              type="text"
              class="form-control rounded"
              aria-describedby="emailHelp"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
          </div>
          <div class="col-md-6">
            <label for="exampleInputEmail1" class="form-label">
              End Time
            </label>
            <br />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control rounded"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
      </div>

      <div className="form-floating mb-3">
        <div className="row">
          <div class="col">
            <label for="selectEducation" class="form-label">
              Education
            </label>
            <br />
            <select
              name="selectEducation"
              class="custom-select custom-select-sm"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="None">None</option>
              <option value="High school">High school degree</option>
              <option value="Associate">Associate degree</option>
              <option value="Bachelor">Bachelor's degree</option>
              <option value="Master">Master's degree</option>
              <option value="Professional">Professional degree</option>
              <option value="Doctoral">Doctoral degree</option>
            </select>
          </div>
          <div className="col form-check ml-2">
            <input
              style={{ marginBottom: "10px" }}
              className="form-check-input"
              type="checkbox"
              id="enableRangeCheckbox"
              checked={!isYearEnabled}
              onChange={() => setIsYearEnabled(!isYearEnabled)}
            />
            <label className="form-check-label">Experiences Required</label>

            <input
              type="number"
              class="form-control rounded"
              aria-describedby="emailHelp"
              disabled={isYearEnabled}
              value={yearRequire}
              onChange={(e) => setYearRequire(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-floating mb-3">
        <div className="row">
          <label htmlFor="customRange1" className="form-label col">
            Salary Range
          </label>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="checkbox"
              id="enableRangeCheckbox"
              checked={!isRangeEnabled} // Trạng thái của checkbox
              onChange={() => setIsRangeEnabled(!isRangeEnabled)} // Sự kiện khi checkbox thay đổi
            />
            <label className="form-check-label" htmlFor="enableRangeCheckbox">
              Include Salary
            </label>
          </div>
        </div>
        <input
          type="range"
          className="form-range col"
          id="customRange1"
          value={salaryRange}
          min={0}
          max={100000}
          disabled={isRangeEnabled}
          onChange={(e) => setSalaryRange(e.target.value)}
        />
        <p>Salary: ${salaryRange}</p>
      </div>

      <div className="form-floating mb-3">
        <label htmlFor="floatingTextarea">Job description</label>
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={job ? "#JobModal" : `#EditJobModal${id}`}
        onClick={job ? ActiveModal : null}
      >
        {job ? (
          <span class="mdi mdi-file-edit"></span>
        ) : (
          <span class="mdi mdi-plus"></span>
        )}
        {job ? "Edit" : "Add Job"}
      </button>

      <div
        class="modal fade"
        id={job ? "JobModal" : `EditJobModal${id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel">
                {job ? "Edit" : "Add"} Job
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                onClick={CloseModal}
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
                onClick={ToggleJobModal}
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

export default JobModal;
