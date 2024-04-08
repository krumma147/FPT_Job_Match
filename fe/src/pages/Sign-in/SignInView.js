import React, { useState } from "react";
import LoginBody from "./SignInBody";
import SignUpFooter from "../../Share/Footer/SignUpFooter";
import SignInHeader from "../../Share/Header/SignInHeader";

const SignInView = () => {
  return (
    <>
      <div class="container-fluid login-fluid clear-left clear-right">
        <SignInHeader />

        <div class="clearfix"></div>

        <div class="padding-top-90"></div>

        <div class="login-main">
          <div class="w-login m-auto">
            <LoginBody />
          </div>
        </div>
      </div>
      <SignUpFooter />
    </>
  );
};

export default SignInView;
