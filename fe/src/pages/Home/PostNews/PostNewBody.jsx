import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function PostNewBody() {
  const [categories, setCategories] = useState([]);
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

  const GetAllCategories = () => {
    const categoriesJSON = localStorage.getItem("JobCategories");
    const categoriesdata = JSON.parse(categoriesJSON);
    if (categoriesdata !== null && categoriesdata.length > 0)
      setCategories(categoriesdata);
  };

  const GetCategoryById = (id) => {};

  useEffect(() => {
    GetAllCategories();
  }, []);

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
                <a className="nav-link" href="#">
                  Quản lý đăng tuyển
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý ứng viên
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý đăng tin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý hồ sơ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tài khoản
                </a>
              </li>
            </ul>
            <ul className="rec-nav-right">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tìm hồ sơ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Đăng tuyển
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
                                {categories.map((cat) => (
                                  <option value={cat.id}>{cat.name}</option>
                                ))}
                              </select>
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
                                <lavel className="label p-2">
                                  Experience
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
                        </div>
                      </div>
                    </div>
                    {/* <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Phúc lợi
                                                        <span id="clickc1_advance3" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body recuitment-body">
                                                    <div className="checkboxsec" id="checkboxSection">
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chăm sóc sức khỏe</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Laptop</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Du lịch nước ngoài</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>phụ cấp thâm niên</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Du lịch</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Đào tạo</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Phụ cấp</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Đồng phục</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Nghỉ phép năm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ thưởng</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Tăng lương</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Xe đưa đón</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Công tác phí</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>CLB thể thao</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                        <div className="filter-topic">
                                                            <label className="label-container">
                                                                <span>Chế độ bảo hiểm</span>
                                                                <input type="checkbox" name defaultValue={1} />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Thông tin liên hệ
                                                        <span id="clickc1_advance1" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body recuitment-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tên người liên hệ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Tên người liên hệ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="mail" className="form-control" placeholder="Địa chỉ email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card recuitment-card">
                                            <div className="card-header recuitment-card-header" id="heading4">
                                                <h2 className="mb-0">
                                                    <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        Thông tin công ty
                                                        <span id="clickc1_advance4" className="clicksd">
                                                            <i className="fa fa fa-angle-up" />
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <div id="collapse4" className="collapse show" aria-labelledby="heading4" data-parent="#collapse4">
                                                <div className="card-body recuitment-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tên công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Tên công ty" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phô<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobProvince2">
                                                                <option value={1}>Hồ Chí Minh</option>
                                                                <option value={2}>Hà Nội</option>
                                                                <option value={3}>An Giang</option>
                                                                <option value={4}>Bạc Liêu</option>
                                                                <option value={5}>Bà Rịa-Vũng Tàu</option>
                                                                <option value={6}>Bắc Cạn</option>
                                                                <option value={7}>Bắc Giang</option>
                                                                <option value={8}>Bắc Ninh</option>
                                                                <option value={9}>Bến Tre</option>
                                                                <option value={10}>Bình Dương</option>
                                                                <option value={11}>Bình Định</option>
                                                                <option value={12}>Bình Phước</option>
                                                                <option value={13}>Bình Thuận</option>
                                                                <option value={14}>Cao Bằng</option>
                                                                <option value={15}>Cà Mau</option>
                                                                <option value={16}>Cần Thơ</option>
                                                                <option value={17}>Đà Nẵng</option>
                                                                <option value={18}>Đắk Lắk</option>
                                                                <option value={19}>Đắk Nông</option>
                                                                <option value={20}>Điện Biên</option>
                                                                <option value={21}>Đồng Nai</option>
                                                                <option value={22}>Đồng Tháp</option>
                                                                <option value={23}>Gia Lai</option>
                                                                <option value={24}>Hà Giang</option>
                                                                <option value={25}>Hà Nam</option>
                                                                <option value={27}>Hà Tĩnh</option>
                                                                <option value={28}>Hải Dương</option>
                                                                <option value={29}>Hải Phòng</option>
                                                                <option value={30}>Hậu Giang</option>
                                                                <option value={31}>Hòa Bình</option>
                                                                <option value={32}>Hưng Yên</option>
                                                                <option value={33}>Khánh Hòa</option>
                                                                <option value={34}>Kiên Giang</option>
                                                                <option value={35}>Kon Tum</option>
                                                                <option value={36}>Lai Châu</option>
                                                                <option value={37}>Lạng Sơn</option>
                                                                <option value={38}>Lào Cai</option>
                                                                <option value={39}>Lâm Đồng</option>
                                                                <option value={40}>Long An</option>
                                                                <option value={41}>Nam Định</option>
                                                                <option value={42}>Nghệ An</option>
                                                                <option value={43}>Ninh Bình</option>
                                                                <option value={44}>Ninh Thuận</option>
                                                                <option value={45}>Phú Thọ</option>
                                                                <option value={46}>Phú Yên</option>
                                                                <option value={47}>Quảng Bình</option>
                                                                <option value={48}>Quảng Nam</option>
                                                                <option value={49}>Quảng Ngãi</option>
                                                                <option value={50}>Quảng Ninh</option>
                                                                <option value={51}>Quảng Trị</option>
                                                                <option value={52}>Sóc Trăng</option>
                                                                <option value={53}>Sơn La</option>
                                                                <option value={54}>Tây Ninh</option>
                                                                <option value={55}>Thái Bình</option>
                                                                <option value={56}>Thái Nguyên</option>
                                                                <option value={57}>Thanh Hóa</option>
                                                                <option value={58}>Thừa Thiên-Huế</option>
                                                                <option value={59}>Tiền Giang</option>
                                                                <option value={60}>Trà Vinh</option>
                                                                <option value={61}>Tuyên Quang</option>
                                                                <option value={62}>Vĩnh Long</option>
                                                                <option value={63}>Vĩnh Phúc</option>
                                                                <option value={64}>Yên Bái</option>
                                                                <option value={65}>Toàn quốc</option>
                                                                <option value={66}>Nước ngoài</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobEmployerScale">
                                                                <option value>Chọn quy mô</option>
                                                                <option selected="selected" value={1}>Dưới 20 người</option>
                                                                <option value={2}>20 - 150 người</option>
                                                                <option value={3}>150 - 300 người</option>
                                                                <option value={4}>Trên 300 người</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự</label>
                                                        <div className="col-sm-9">
                                                            <select type="text" className="form-control" id="jobFieldsActivity">
                                                                <optgroup label="NÔNG NGHIỆP, LÂM NGHIỆP VÀ THUỶ SẢN">
                                                                    <option value={22}>Nông nghiệp và hoạt động dịch vụ có liên quan</option>
                                                                    <option value={23}>Lâm nghiệp và hoạt động dịch vụ có liên quan</option>
                                                                    <option value={24}>Khai thác, nuôi trồng thủy sản</option>
                                                                </optgroup>
                                                                <optgroup label="KHAI KHOÁNG">
                                                                    <option value={25}>Khai thác than cứng và than non</option>
                                                                    <option value={26}>Khai thác dầu thô và khí đốt tự nhiên</option>
                                                                    <option value={27}>Khai thác quặng kim loại</option>
                                                                    <option value={28}>Khai khoáng khác</option>
                                                                    <option value={29}>Hoạt động dịch vụ hỗ trợ khai khoáng</option>
                                                                </optgroup>
                                                                <optgroup label="CÔNG NGHIỆP CHẾ BIẾN, CHẾ TẠO">
                                                                    <option value={30}>Sản xuất, chế biến thực phẩm</option>
                                                                    <option value={31}>Sản xuất đồ uống</option>
                                                                    <option value={32}>Sản xuất sản phẩm thuốc lá</option>
                                                                    <option value={33}>Dệt</option>
                                                                    <option value={34}>Sản xuất trang phục</option>
                                                                    <option value={35}>Sản xuất da và các sản phẩm có liên quan</option>
                                                                    <option value={36}>Chế biến gỗ và sản xuất sản phẩm từ gỗ, tre, nứa (trừ giường, tủ, bàn, ghế); sản xuất sản phẩm từ rơm, rạ và vật liệu tết bện</option>
                                                                    <option value={37}>Sản xuất giấy và sản phẩm từ giấy</option>
                                                                    <option value={38}>In, sao chép bản ghi các loại</option>
                                                                    <option value={39}>Sản xuất than cốc, sản phẩm dầu mỏ tinh chế</option>
                                                                    <option value={40}>Sản xuất hoá chất và sản phẩm hoá chất</option>
                                                                    <option value={41}>Sản xuất thuốc, hoá dược và dược liệu</option>
                                                                    <option value={42}>Sản xuất sản phẩm từ cao su và plastic</option>
                                                                    <option value={43}>Sản xuất sản phẩm từ khoáng phi kim loại khác</option>
                                                                    <option value={44}>Sản xuất kim loại</option>
                                                                    <option value={45}>Sản xuất sản phẩm từ kim loại đúc sẵn (trừ máy móc, thiết bị)</option>
                                                                    <option value={46}>Sản xuất sản phẩm điện tử, máy vi tính và sản phẩm quang học</option>
                                                                    <option value={47}>Sản xuất thiết bị điện</option>
                                                                    <option value={48}>Sản xuất máy móc, thiết bị chưa được phân vào đâu</option>
                                                                    <option value={49}>Sản xuất ô tô và xe có động cơ khác</option>
                                                                    <option value={50}>Sản xuất phương tiện vận tải khác</option>
                                                                    <option value={51}>Sản xuất giường, tủ, bàn, ghế</option>
                                                                    <option value={52}>Công nghiệp chế biến, chế tạo khác</option>
                                                                    <option value={53}>Sửa chữa, bảo dưỡng và lắp đặt máy móc và thiết bị</option>
                                                                </optgroup>
                                                                <optgroup label="SẢN XUẤT VÀ PHÂN PHỐI ĐIỆN, KHÍ ĐỐT, NƯỚC NÓNG, HƠI NƯỚC VÀ ĐIỀU HOÀ KHÔNG KHÍ">
                                                                    <option value={54}>Sản xuất và phân phối điện, khí đốt, nước nóng, hơi nước và điều hoà không khí</option>
                                                                </optgroup>
                                                                <optgroup label="CUNG CẤP NƯỚC; HOẠT ĐỘNG QUẢN LÝ VÀ XỬ LÝ RÁC THẢI, NƯỚC THẢI">
                                                                    <option value={55}>Khai thác, xử lý và cung cấp nước</option>
                                                                    <option value={56}>Thoát nước và xử lý nước thải</option>
                                                                    <option value={57}>Hoạt động thu gom, xử lý và tiêu hủy rác thải; tái chế phế liệu</option>
                                                                    <option value={58}>Xử lý ô nhiễm và hoạt động quản lý chất thải khác</option>
                                                                </optgroup>
                                                                <optgroup label="XÂY DỰNG">
                                                                    <option value={59}>Xây dựng nhà các loại</option>
                                                                    <option value={60}>Xây dựng công trình kỹ thuật dân dụng</option>
                                                                    <option value={61}>Hoạt động xây dựng chuyên dụng</option>
                                                                </optgroup>
                                                                <optgroup label="BÁN BUÔN VÀ BÁN LẺ; SỬA CHỮA Ô TÔ, MÔ TÔ, XE MÁY VÀ XE CÓ ĐỘNG CƠ KHÁC">
                                                                    <option value={62}>Bán, sửa chữa ô tô, mô tô, xe máy và xe có động cơ khác</option>
                                                                    <option value={63}>Bán buôn (trừ ô tô, mô tô, xe máy và xe có động cơ khác)</option>
                                                                    <option value={64}>Bán lẻ (trừ ô tô, mô tô, xe máy và xe có động cơ khác)</option>
                                                                </optgroup>
                                                                <optgroup label="VẬN TẢI KHO BÃI">
                                                                    <option value={65}>Vận tải đường sắt, đường bộ và vận tải đường ống</option>
                                                                    <option value={66}>Vận tải đường thủy</option>
                                                                    <option value={67}>Vận tải hàng không</option>
                                                                    <option value={68}>Kho bãi và các hoạt động hỗ trợ cho vận tải</option>
                                                                    <option value={69}>Bưu chính và chuyển phát</option>
                                                                </optgroup>
                                                                <optgroup label="DỊCH VỤ LƯU TRÚ VÀ ĂN UỐNG">
                                                                    <option value={70}>Dịch vụ lưu trú</option>
                                                                    <option value={71}>Dịch vụ ăn uống</option>
                                                                </optgroup>
                                                                <optgroup label="THÔNG TIN VÀ TRUYỀN THÔNG">
                                                                    <option value={72}>Hoạt động xuất bản</option>
                                                                    <option value={73}>Hoạt động điện ảnh, sản xuất chương trình truyền hình, ghi âm và xuất bản âm nhạc</option>
                                                                    <option value={74}>Hoạt động phát thanh, truyền hình</option>
                                                                    <option value={75}>Viễn thông</option>
                                                                    <option value={76}>Lập trình máy vi tính, dịch vụ tư vấn và các hoạt động khác liên quan đến máy vi tính</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG TÀI CHÍNH, NGÂN HÀNG VÀ BẢO HIỂM">
                                                                    <option value={82}>Hoạt động dịch vụ tài chính (trừ bảo hiểm và bảo hiểm xã hội)</option>
                                                                    <option value={83}>Bảo hiểm, tái bảo hiểm và bảo hiểm xã hội (trừ bảo đảm xã hội bắt buộc)</option>
                                                                    <option value={84}>Hoạt động tài chính khác</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG KINH DOANH BẤT ĐỘNG SẢN">
                                                                    <option value={85}>Hoạt động kinh doanh bất động sản</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG CHUYÊN MÔN, KHOA HỌC VÀ CÔNG NGHỆ">
                                                                    <option value={86}>Hoạt động pháp luật, kế toán và kiểm toán</option>
                                                                    <option value={87}>Hoạt động của trụ sở văn phòng; hoạt động tư vấn quản lý</option>
                                                                    <option value={88}>Hoạt động kiến trúc; kiểm tra và phân tích kỹ thuật</option>
                                                                    <option value={89}>Nghiên cứu khoa học và phát triển công nghệ</option>
                                                                    <option value={90}>Quảng cáo và nghiên cứu thị trường</option>
                                                                    <option value={91}>Hoạt động chuyên môn, khoa học và công nghệ khác</option>
                                                                    <option value={92}>Hoạt động thú y</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG HÀNH CHÍNH VÀ DỊCH VỤ HỖ TRỢ">
                                                                    <option value={93}>Cho thuê máy móc, thiết bị (không kèm người điều khiển); cho thuê đồ dùng cá nhân và gia đình; cho thuê tài sản vô hình phi tài chính</option>
                                                                    <option value={94}>Hoạt động dịch vụ lao động và việc làm</option>
                                                                    <option value={95}>Hoạt động của các đại lý du lịch, kinh doanh tua du lịch và các dịch vụ hỗ trợ, liên quan đến quảng bá và tổ chức tua du lịch</option>
                                                                    <option value={96}>Hoạt động điều tra bảo đảm an toàn</option>
                                                                    <option value={97}>Hoạt động dịch vụ vệ sinh nhà cửa, công trình và cảnh quan</option>
                                                                    <option value={98}>Hoạt động hành chính, hỗ trợ văn phòng và các hoạt động hỗ trợ kinh doanh khác</option>
                                                                </optgroup>
                                                                <optgroup label="GIÁO DỤC VÀ ĐÀO TẠO">
                                                                    <option value={99}>Giáo dục và đào tạo</option>
                                                                </optgroup>
                                                                <optgroup label="Y TẾ VÀ HOẠT ĐỘNG TRỢ GIÚP XÃ HỘI">
                                                                    <option value={100}>Hoạt động y tế</option>
                                                                    <option value={101}>Hoạt động chăm sóc, điều dưỡng tập trung</option>
                                                                    <option value={102}>Hoạt động trợ giúp xã hội không tập trung</option>
                                                                </optgroup>
                                                                <optgroup label="NGHỆ THUẬT, VUI CHƠI VÀ GIẢI TRÍ">
                                                                    <option value={103}>Hoạt động sáng tác, nghệ thuật và giải trí</option>
                                                                    <option value={104}>Hoạt động của thư viện, lưu trữ, bảo tàng và các hoạt động văn hóa khác</option>
                                                                    <option value={105}>Hoạt động xổ số, cá cược và đánh bạc</option>
                                                                    <option value={106}>Hoạt động thể thao, vui chơi và giải trí</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG DỊCH VỤ KHÁC">
                                                                    <option value={107}>Hoạt động của các hiệp hội, tổ chức khác</option>
                                                                    <option value={108}>Sửa chữa máy vi tính, đồ dùng cá nhân và gia đình</option>
                                                                    <option value={109}>Hoạt động dịch vụ phục vụ cá nhân khác</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG LÀM THUÊ CÁC CÔNG VIỆC TRONG CÁC HỘ GIA ĐÌNH, SẢN XUẤT SẢN PHẨM VẬT CHẤT VÀ DỊCH VỤ TỰ TIÊU DÙNG CỦA HỘ GIA ĐÌNH">
                                                                    <option value={110}>Hoạt động làm thuê công việc gia đình trong các hộ gia đình</option>
                                                                    <option value={111}>Hoạt động sản xuất sản phẩm vật chất và dịch vụ tự tiêu dùng của hộ gia đình</option>
                                                                </optgroup>
                                                                <optgroup label="HOẠT ĐỘNG CỦA CÁC TỔ CHỨC VÀ CƠ QUAN QUỐC TẾ">
                                                                    <option value={112}>Hoạt động của các tổ chức và cơ quan quốc tế</option>
                                                                </optgroup>
                                                                <optgroup label>
                                                                </optgroup></select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Sơ lược về công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                                                        <div className="col-sm-9">
                                                            <textarea type="text" className="form-control" placeholder="Sơ lược về công ty" rows={5} defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Logo</label>
                                                        <div className="col-sm-9 ">
                                                            <div id="drop-area">
                                                                <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)" />
                                                                <label style={{ cursor: 'pointer' }} htmlFor="fileElem">Tải ảnh lên hoặc kéo thả vào đây</label>
                                                                <progress id="progress-bar" max={100} value={0} className="d-none" />
                                                                <div id="gallery" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label text-right label">Website</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" placeholder="Website" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                  <div className="rec-submit">
                    <button
                      type="submit"
                      className="btn-submit-recuitment"
                      name
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
                    <h4>NESTLE Inc.</h4>
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
                      Trung tâm quản lý
                    </h3>
                  </header>
                  <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                    <h3 className="menu-ql-ntv">Quản lý tài khoản</h3>
                    <ul>
                      <li>
                        <a href="#">Tài khoản</a>
                      </li>
                      <li>
                        <a href="#">Giấy phép kinh doanh</a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">Quản lý dịch vụ</h3>
                    <ul>
                      <li>
                        <a href="#">Lịch sử dịch vụ</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Báo giá
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">Quản lý tin tuyển dụng</h3>
                    <ul>
                      <li>
                        <a href="#">Đăng tin tuyển dụng</a>
                      </li>
                      <li>
                        <a href="#">Danh sách tin tuyển dụng</a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">Quản lý ứng viên</h3>
                    <ul>
                      <li>
                        <a href="#">Tìm kiếm hồ sơ</a>
                      </li>
                      <li>
                        <a href="#">Hồ sơ đã lưu</a>
                      </li>
                      <li>
                        <a href="#">Hồ sơ đã ứng tuyển</a>
                      </li>
                      <li>
                        <a href="#" title="Thông báo hồ sơ phù hợp">
                          Thông báo hồ sơ phù hợp
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">Hỗ trợ và thông báo</h3>
                    <ul>
                      <li>
                        <a href="#" title="Gửi yêu cầu đến ban quản trị">
                          Gửi yêu cầu đến ban quản trị
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Ban quản trị thông báo">
                          Ban quản trị thông báo
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Hướng dẫn thao tác">
                          Hướng dẫn thao tác
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <span>Thông tin thanh toán</span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <span>Cổng tra cứu lương</span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <span> Cẩm nang tuyển dụng</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="logout">
                        <a href="#" title="Đăng xuất">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
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
