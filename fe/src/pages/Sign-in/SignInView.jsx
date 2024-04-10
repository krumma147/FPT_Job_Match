import React, { useState } from "react";
import LoginBody from "./SignInBody";
import Header from "../../components/Auth/Header";
import Footer from "../../components/Auth/Footer";


const SignInView = () => {
  return (
    <div>
      <div className="container-fluid login-fluid clear-left clear-right">
        <Header title = {'Sign In'}/>

        <div className="clearfix"></div>

        <div className="padding-top-90"></div>

        <div className="login-main">
          <div className="w-login m-auto">
            <LoginBody />
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  );
};

export default SignInView;
