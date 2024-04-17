import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { getUserId } from "../../Auth/Auth";
import UserHook from "../../../hooks/UserHook";
import { Form } from "react-bootstrap";
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
  const [is2FAEnabled, setIs2FAEnabled] = useState(false); // Assume 2FA is disabled initially
  const [userId, setUserId] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [userName, setUserName] = useState("");

  const fetchUserData = async () => {
    const id = await getUserId();
    const userData = await UserHook.GetUserById(id);
    const Fa2Status = await UserHook.GetUser2FAStatus(id);
    console.log(Fa2Status);
    //console.log("userId:", id);
    //console.log("user:", userData);
    setUserId(id);
    setData(userData);
    setFullName(userData.fullName);
    setPhoneNumber(userData.user.phoneNumber);
    setEmail(userData.user.email);
    setUserName(userData.user.userName);
    setIs2FAEnabled(Fa2Status.data);
  };

  const handleToggle2FA = () => {
    // Cập nhật trạng thái is2FAEnabled
    setIs2FAEnabled(!is2FAEnabled);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmitEdit = async () => {
    try {
      const editUser = {
        fullName,
        phoneNumber,
        email,
        password,
        UserName: userName,
        role: data.roles[0],
      };
      const faStatus = {
        enable: is2FAEnabled,
      };
      const res = await UserHook.EditUser(userId, editUser);
      const res2 = await UserHook.SetUser2FAStatus(userId, faStatus);
      //   Swal.fire("Successful", res.data, "success");
      fetchUserData();
      alert(res + " " + res2);
    } catch (error) {
      console.error(error.message);
    }
  };

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
                          Thông tin tài khoản
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
                      <div className="card-body recuitment-body row">
                        <div className="col-md-3">
                          <div className="avatar-upload">
                            <div className="avatar-edit">
                              <input
                                type="file"
                                id="imageUpload"
                                accept=".png, .jpg, .jpeg"
                              />
                              <label htmlFor="imageUpload" />
                            </div>
                            <div className="avatar-preview">
                              <div
                                id="imagePreview"
                                style={{
                                  backgroundImage:
                                    "url(https://i.pravatar.cc/500?img=7)",
                                }}
                              ></div>
                            </div>
                          </div>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              label="Check this switch"
                              value={is2FAEnabled}
                              onChange={handleToggle2FA}
                            />
                          </Form>
                        </div>
                        <div className="col-md-9">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">
                              Họ tên
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
                              Số điện thoại
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="number"
                                className="form-control"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                    Lưu Hồ Sơ
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
                  <h4>Hồ Quốc Hiếu</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Nhà tuyển dụng của tôi <strong>(0)</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Việc làm đã lưu <strong>(450)</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Việc làm đã nộp <strong>(1150)</strong>
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
                  <h3 className="menu-ql-ntv">Hồ sơ của bạn</h3>
                  <ul>
                    <li>
                      <a href="#">Quản lý Tài khoản</a>
                    </li>
                    <li>
                      <a href="#">Quản lý hồ sơ</a>
                    </li>
                  </ul>
                  <h3 className="menu-ql-ntv">Việc làm của bạn</h3>
                  <ul>
                    <li>
                      <a href="#">Việc làm đã lưu</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Việc làm dã ứng tuyển
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
  );
}
