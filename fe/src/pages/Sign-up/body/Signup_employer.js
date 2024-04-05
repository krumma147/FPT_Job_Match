import React, { useState } from "react";

const SignupEmployeer = () => {
  return (
    <div class="row">
      <div class="col-md-6 col-sm-12 col-12 login-main-left">
        <img src="./assets/images/banner-login.png" />
      </div>

      <div class="col-md-6 col-sm-12 col-12 login-main-right">
        <form class="login-form reg-form">
          <div class="login-main-header">
            <h3>Đăng Ký Tài Khoản Nhà Tuyển Dụng</h3>
          </div>
          <div class="reg-info">
            <h3>Tài khoản</h3>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Địa Chỉ Email<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Mật khẩu<span class="req">*</span>
              </h5>
              <input type="password" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Nhập Lại Mật khẩu<span class="req">*</span>
              </h5>
              <input type="password" class="input form-control-lgin" />
            </div>
          </div>
          <div class="reg-info">
            <h3>Công ty</h3>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Tên người liên hệ<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Số điện thoại liên hệ<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Tên công ty<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Địa Chỉ Công Ty<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="input-div one">
            <div class="div lg-lable">
              <h5>
                Thành phố<span class="req">*</span>
              </h5>
              <input type="text" class="input form-control-lgin" />
            </div>
          </div>
          <div class="form-group d-block frm-text">
            <a href="#" class="fg-login d-inline-block"></a>
            <a href="#" class="fg-login float-right d-inline-block">
              Bạn đã có tài khoản? Đăng Nhập
            </a>
          </div>
          <button
            type="submit"
            class="btn btn-primary float-right btn-login d-block w-100"
          >
            Đăng Ký Nhà Tuyển Dụng
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

export default SignupEmployeer;
