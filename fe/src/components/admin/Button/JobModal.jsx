import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import MySummernoteEditor from "../../SummerNoteEditor";

const JobModal = ({ AddJob, categories, ModifyJob, data }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState(0);
  const [yearRequire, setYearRequire] = useState(0);
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [education, setEducation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  const [isYearEnabled, setIsYearEnabled] = useState(false);
  const [status, setStatus] = useState(false);
  let jobStatus = status ? "open" : "closed";

  const ToggleModal = async () => {
    const salary = "$ " + salaryRange.toString();
    const jobDate = new Date(selectedDate).toISOString();
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
    if (data) {
      alert(`Update data with id: ${data.id}`);
      await ModifyJob(data.id, job);
    } else {
      await AddJob(job);
    }
    console.log(job);
    CloseModal();
  };

  const ActiveModal = (e) => {
    e.preventDefault();
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setCategory(data.jobCategoryId);
      setSkill(data.skill_required);
      setEducation(data.education_required);
      setSelectedDate(data.application_deadline);
      data.status === "open" ? setStatus(true) : setStatus(false);
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
  };

  const ModalBody = (
    <div className="bg-light rounded h-100 p-2">
      <div className="form-floating mb-2">
        {data ? (
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
        <div className="row">
          <div class="col">
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
          <div class="col p-1">
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
        </div>
      </div>
      <div className="form-floating mb-3">
        <div className="row">
          <div class="col">
            <label for="exampleInputEmail1" class="form-label">
              Job Description
            </label>
            <textarea
              class="form-control rounded"
              aria-describedby="emailHelp"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
        <textarea
          className="form-control rounded"
          placeholder="Describe about the job..."
          id="floatingTextarea"
          style={{ height: 150 }}
          defaultValue={""}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
        data-target={data ? "#JobModal" : `#EditJobModal${data?.id}`}
        onClick={ActiveModal}
      >
        {data ? (
          <span class="mdi mdi-file-edit"></span>
        ) : (
          <span class="mdi mdi-plus"></span>
        )}
        {data ? "Edit" : "Add Job"}
      </button>

      <div
        class="modal fade"
        id={data ? "JobModal" : `EditJobModal${data?.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel">
                {data ? "Edit" : "Add"} Job
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

export default JobModal;
