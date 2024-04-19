import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import JobHooks from "../../../hooks/JobHook";
import { getUserName } from "../../Auth/Auth";
export default function PostNewBody({
  categories,
  employerId,
  ReFetchingData,
  editJob,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experience, setExperience] = useState(0);
  const [education, setEducation] = useState("");
  const [skill, setSkill] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);
  const [isYearEnabled, setIsYearEnabled] = useState(false);

  const HandleSubmit = async () => {
    if (
      title === "" &&
      categories === "" &&
      description === "" &&
      skill === "" &&
      category === ""
    ) {
      alert("Please fill required data");
      return;
    } else {
      //console.log(job);

      const job = {
        title,
        description,
        salaryRange: isRangeEnabled ? "Discuss during interview" : salaryRange,
        experience_required: isYearEnabled ? 0 : parseInt(experience),
        skill_required: skill,
        jobCategoryId: parseInt(category),
        education_required: education,
        application_deadline: deadline,
        status: "open",
        employerId,
      };
      //    console.log(isRangeEnabled, job);
      try {
        if (editJob) {
          const res = await JobHooks.EditJob(editJob.id, job);
          ReFetchingData();
        } else {
          const res = await JobHooks.CreateJob(job);
          ReFetchingData();
          if (res.message.toLowerCase().includes("success"))
            alert("Job created successfully!");
        }
      } catch (error) {
        console.log(error.message);
      }
      ResetInput();
    }
  };

  const ResetInput = () => {
    setTitle("");
    setDescription("");
    setSalaryRange("");
    setExperience(0);
    setEducation("");
    setSkill("");
    setDeadline("");
    setCategory("");
  };

  useEffect(() => {
    if (editJob) {
      console.log(editJob);
      setTitle(editJob.title);
      setDescription(editJob.description);
      setSalaryRange(editJob.salaryRange);
      setExperience(editJob.experience_required);
      setEducation(editJob.education_required);
      setSkill(editJob.skill_required);
      setDeadline(editJob.application_deadline);
      setCategory(editJob.jobCategoryId);
    }
  }, [editJob]);

  return (
    <div>
      <div>
        {/* recuiter Nav */}
        <nav className="navbar navbar-expand-lg navbar-light nav-recuitment">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNava"
            aria-controls="navbarNava"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse container" id="navbarNava">
            <ul className="navbar-nav nav-recuitment-li">
              <li className="nav-item active">
                <a className="nav-link" href="/jobseeker">
                  Jobs Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/jobseeker">
                  JobSeeker Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Account
                </a>
              </li>
            </ul>
            <ul className="rec-nav-right">
              <li className="nav-item">
                <a className="nav-link" href="/jobseeker">
                  Find profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/postnews">
                  recruit
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*  recuiter Nav */}
        {/* widget recuitment  */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-ads">
                  <a href="#">
                    <img src="assets/home/img/hna2.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* (end) widget recuitment  */}
        {/* published recuitment */}
        <div className="container-fluid published-recuitment-wrapper">
          <div className="container published-recuitment-content">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
                <form className="recuitment-form">
                  <div className="accordion" id="accordionExample">
                    <div className="card recuitment-card">
                      <div
                        className="card-header recuitment-card-header"
                        id="headingOne"
                      >
                        <h2 className="mb-0">
                          <a
                            className="btn btn-link btn-block text-left recuitment-header"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Post new job
                            <span id="clickc1_advance2" className="clicksd">
                              <i className="fa fa fa-angle-up" />
                            </span>
                          </a>
                        </h2>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body recuitment-body">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Job Title
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Add job title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Field
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
                              <select
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                <option value>Please choose job field</option>
                                {categories?.map((cat) => (
                                  <option value={cat.id}>{cat.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-group row">
                            <div
                              className="col-sm-3 col-form-label"
                              for="checkSalary"
                            >
                              <div className="row text-right">
                                <input
                                  className="form-group col-md-2"
                                  type="checkbox"
                                  id="checkSalary"
                                  checked={!isRangeEnabled} // Trạng thái của checkbox
                                  onChange={() =>
                                    setIsRangeEnabled(!isRangeEnabled)
                                  } // Sự kiện khi checkbox thay đổi
                                />
                                <lavel className="label p-2">
                                  Salary
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </lavel>
                              </div>
                            </div>
                            <div className="col-sm-9">
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
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Education
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
                              <select
                                name="selectEducation"
                                class="custom-select custom-select-sm"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                              >
                                <option selected>Open this select menu</option>
                                <option value="None">None</option>
                                <option value="High school">
                                  High school degree
                                </option>
                                <option value="Associate">
                                  Associate degree
                                </option>
                                <option value="Bachelor">
                                  Bachelor's degree
                                </option>
                                <option value="Master">Master's degree</option>
                                <option value="Professional">
                                  Professional degree
                                </option>
                                <option value="Doctoral">
                                  Doctoral degree
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-3 col-form-label">
                              <div className="row  text-right">
                                <input
                                  style={{ marginBottom: "10px" }}
                                  className="form-group col-md-2"
                                  type="checkbox"
                                  id="enableRangeCheckbox"
                                  checked={!isYearEnabled}
                                  onChange={() =>
                                    setIsYearEnabled(!isYearEnabled)
                                  }
                                />
                                <lavel className="label p-1">
                                  Experience (Years)
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </lavel>
                              </div>
                            </div>
                            <div className="col-sm-9">
                              <input
                                type="number"
                                class="form-control rounded"
                                aria-describedby="emailHelp"
                                disabled={isYearEnabled}
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Skills Require
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="Skill requirements"
                                rows={2}
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                                defaultValue={"None"}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              DeadLine
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
                              <DatePicker
                                selected={deadline}
                                onChange={(date) => setDeadline(date)}
                                className="form-control rounded"
                                aria-describedby="emailHelp"
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Job Descriptions
                              <span style={{ color: "red" }} className="pl-2">
                                *
                              </span>
                            </label>
                            <div className="col-sm-9">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rec-submit">
                    <button
                      type="button"
                      className="btn-submit-recuitment"
                      onClick={() => HandleSubmit()}
                    >
                      <i className="fa fa-floppy-o pr-2" />
                      Post
                    </button>
                  </div>
                </form>
              </div>
              {/* Side bar */}
              <div className="col-md-4 col-sm-12 col-12">
                <div className="recuiter-info">
                  <div className="recuiter-info-avt">
                    <img src="assets/home/img/icon_avatar.jpg" />
                  </div>
                  <div className="clearfix list-rec">
                    <h4>{getUserName()}</h4>
                    <ul>
                      <li>
                        <a href="#">
                          Việc làm đang đăng <strong>(0)</strong>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Follower <strong>(450)</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block-sidebar" style={{ marginBottom: 20 }}>
                  <header>
                    <h3 className="title-sidebar font-roboto bg-primary">
                      Job Seeker
                    </h3>
                  </header>
                  <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                    <a href="/jobseeker">
                      <h3 className="menu-ql-ntv">JobSeeker Management</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
