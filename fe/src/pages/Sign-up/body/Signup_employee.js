import React, { useState } from "react";

const SignupEmployee = ({ registerHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupBtn = async (e) => {
    e.preventDefault();

    if (!CheckAllFields) {
      alert("Password do not match!");
    } else {
      alert("Đăng ký thành công");
      const user = {
        email,
        password,
        confirmPassword,
      };
      registerHandler(user);
    }
    //console.log({name, email, phone, password, confirmPassword});
  };

  const CheckAllFields = () => {
    return (
      name == "" &&
      email == "" &&
      phone == "" &&
      password == "" &&
      confirmPassword == ""
    );
  };

  return (
    <div class="row">
      <div class="col-md-6 col-sm-12 col-12 login-main-left">
        <img src="./assets/images/banner-login.png" />
      </div>

      <div class="col-md-6 col-sm-12 col-12 login-main-right">
        <form class="login-form reg-form">
          <div class="login-main-header">
            <h3>Đăng Ký</h3>
          </div>

          <div class="input-div one">
            <div class="div lg-lable">
              <input
                class="input form-control-lgin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ Và Tên *"
                type="text"
              />
            </div>
          </div>

          <div class="input-div one">
            <div class="div lg-lable">
              <input
                type="text"
                class="input form-control-lgin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Địa Chỉ Email *"
              />
            </div>
          </div>

          <div class="input-div one">
            <div class="div lg-lable">
              <input
                type="text"
                class="input form-control-lgin"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại *"
              />
            </div>
          </div>

          <div class="input-div one">
            <div class="div lg-lable">
              <input
                type="password"
                class="input form-control-lgin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu *"
              />
            </div>
          </div>

          <div class="input-div one">
            <div class="div lg-lable">
              <input
                type="password"
                class="input form-control-lgin"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập Lại Mật khẩu *"
              />
            </div>
          </div>

          <div class="form-group d-block frm-text">
            <a href="#" class="fg-login d-inline-block"></a>
            <a href="#" class="fg-login float-right d-inline-block">
              Bạn đã có tài khoản? Đăng Nhập
            </a>
          </div>

          <button
            class="btn btn-primary float-right btn-login d-block w-100"
            onClick={signupBtn}
          >
            Đăng Ký
          </button>

          <div class="form-group d-block w-100 mt-5">
            <div class="text-or text-center">
              <span>Hoặc</span>
            </div>

            <div class="row">
              <div class="col-sm-6 col-12 pr-7">
                <button class="btn btn-secondary btn-login-facebook btnw w-100 float-left">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <span>Đăng nhập bằng Facebook</span>
                </button>
              </div>
              <div class="col-sm-6 col-12 pl-7">
                <button class="btn btn-secondary btn-login-google btnw w-100 float-left">
                  <i class="fa fa-google" aria-hidden="true"></i>
                  <span>Đăng nhập bằng Google</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupEmployee;
