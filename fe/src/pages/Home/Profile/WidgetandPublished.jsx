import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { checkAccess, getUserId, getUserName } from "../../Auth/Auth";
import UserHook from "../../../hooks/UserHook";
import { Form, Button } from "react-bootstrap";
// import Swal from "sweetalert2";
const toggle2FA = async (userId, enable) => {
  try {
    const response = await axios.put(
      `https://localhost:7282/api/Home/Check2FA/${userId}`,
      { enable }
    );
    Swal.fire({
      title: "Success!",
      text:
        "Two-factor authentication has been " +
        (enable ? "enabled" : "disabled") +
        " for your account.",
      icon: "success",
      confirmButtonText: "OK",
    });
    return response.data;
  } catch (error) {
    console.error("There was an error!", error.response.data);
    Swal.fire({
      title: "Error!",
      text: "There was an error!",
      icon: "error",
      confirmButtonText: "OK",
    });
    return null;
  }
};

export default function WidgetandPublished() {
  const [FAStatus, setFAStatus] = useState(false); //
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState('https://i.pravatar.cc/500?img=7');

  const fetchUserData = async () => {
    try {
      const id = await getUserId();
      const userData = await UserHook.GetUserById(id);
      const Fa2Status = await UserHook.GetUser2FAStatus(id);
      console.log(Fa2Status);
      if (userData && userData.fullName) {
        setUserId(id);
        setData(userData);
        setFullName(userData.fullName);
        setImagePreviewUrl(userData.image);
        setPhoneNumber(userData.user.phoneNumber);
        setEmail(userData.user.email);
        setUserName(userData.user.userName);
        setFAStatus(Fa2Status.status);
      } else {
        console.error("User data or full name is undefined");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange2FA = async () => {
    if (
      window.confirm(
        `Are you sure you want to turn 2 factor authentication ${FAStatus ? "on" : "off"
        }?`
      )
    ) {
      const faStatus = {
        enable: !FAStatus,
      };
      const res2 = await UserHook.SetUser2FAStatus(userId, faStatus);
      alert(res2);
      fetchUserData();
    }
  };

  const handleSubmitEdit = async () => {
    try {
      const editUser = {
        fullName,
        phoneNumber,
        email,
        password,
        UserName: userName,
        role: data.roles[0],
        image: imagePreviewUrl,
      };
      const res = await UserHook.EditUser(userId, editUser);
      //   Swal.fire("Successful", res.data, "success");
      fetchUserData();
      alert(res);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const handleImageUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    }

    reader.readAsDataURL(file);
  }

  return (
    <div>
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
              <form className="employee-form">
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
                          Account information
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
                        <div className="row">
                          <div className="col-md-3">
                            <div className="avatar-upload">
                              <div className="avatar-edit">
                                <input
                                  type="file"
                                  id="imageUpload"
                                  accept=".png, .jpg, .jpeg"
                                  onChange={handleImageUpload}
                                />
                                <label htmlFor="imageUpload" />
                              </div>
                              <div className="avatar-preview">
                                <div
                                  id="imagePreview"
                                  style={{
                                    backgroundImage: `url(${imagePreviewUrl})`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Full Name
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nhập họ và tên"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Phone Number
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control"
                                  value={phoneNumber}
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Email
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="email"
                                  className="form-control"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Password
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="password"
                                  className="form-control"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Other Setting ( 2 Factor Authentication ) */}
                        <div className="row">
                          <div className="col-md-8">
                            <h4>
                              Two Factor Authentication status:{" "}
                              {FAStatus ? "Enable" : "Disable"}
                            </h4>
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              class={
                                FAStatus
                                  ? "btn btn-success"
                                  : "btn btn-secondary"
                              }
                              onClick={handleChange2FA}
                            >
                              {FAStatus ? "Turn On" : "Turn Off"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rec-submit">
                  <button
                    type="button"
                    className="btn-submit-recuitment mb-3 ml-3"
                    name
                    onClick={handleSubmitEdit}
                  >
                    <i className="fa fa-floppy-o pr-2" />
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/* Side bar */}
            <div className="col-md-4 col-sm-12 col-12">
              <div className="recuiter-info">
                <div className="recuiter-info-avt">
                  <img src={imagePreviewUrl} />
                </div>
                <div className="clearfix list-rec">
                  <h4>{fullName}</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Email  <strong>{email}</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Phone  <strong>{phoneNumber}</strong>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {checkAccess(["Admin"]) && (<div className="block-sidebar" style={{ marginBottom: 20 }}>
                <header>
                  <h3 className="title-sidebar font-roboto bg-primary">
                    Admin
                  </h3>
                </header>
                <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                  <h3 className="menu-ql-ntv">User Management</h3>
                  <ul>
                    <li>
                      <a href="/admin">Add and Edit accounts</a>
                    </li>
                    <li>
                      <a href="/admin">Delete Accounts</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Categories Management</h3>
                  <ul>
                    <li>
                      <a href="/admin">Add and Edit Categories</a>
                    </li>
                    <li>
                      <a href="/admin">Delete Categories</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Jobs Management</h3>
                  <ul>
                    <li>
                      <a href="/admin">Add and Edit Jobs</a>
                    </li>
                    <li>
                      <a href="/admin">Delete Jobs</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Application Management</h3>
                  <ul>
                    <li>
                      <a href="/admin">Add and Edit Application</a>
                    </li>
                    <li>
                      <a href="/admin">Delete Application</a>
                    </li>
                  </ul>
                </div>
              </div>)}
              {checkAccess(["Employer"]) && (<div className="block-sidebar" style={{ marginBottom: 20 }}>
                <header>
                  <h3 className="title-sidebar font-roboto bg-primary">
                    Employer
                  </h3>
                </header>
                <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                  <h3 className="menu-ql-ntv">Jobs</h3>
                  <ul>
                    <li>
                      <a href="/postnews">Post Jobs</a>
                    </li>
                    <li>
                      <a href="/">Edit and Delete Jobs</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">JobSeeker Management</h3>
                  <ul>
                    <li>
                      <a href="/jobseeker">Watch Infomation</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/profile">Edit Profile</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Contact Admin</h3>
                  <ul>
                    <li>
                      <a href="/">Chat with Admin</a>
                    </li>
                  </ul>
                </div>
              </div>)}
              {checkAccess(["JobSeeker"]) && (<div className="block-sidebar" style={{ marginBottom: 20 }}>
                <header>
                  <h3 className="title-sidebar font-roboto bg-primary">
                    JobSeeker
                  </h3>
                </header>
                <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                  <h3 className="menu-ql-ntv">Jobs</h3>
                  <ul>
                    <li>
                      <a href="/">Search Jobs</a>
                    </li>
                    <li>
                      <a href="/">Watch Detail Jobs</a>
                    </li>
                    <li>
                      <a href="/jobs">Apply Jobs</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Profile</h3>
                  <ul>
                    <li>
                      <a href="/profile">Edit Profile</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Contact Admin</h3>
                  <ul>
                    <li>
                      <a href="/">Chat with Admin</a>
                    </li>
                  </ul>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
