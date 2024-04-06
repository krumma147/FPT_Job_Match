import React, { Component } from "react";

const SignInHeader = () => {
  return (
    <div class="login-header">
      <div class="w-login m-auto">
        <div class="login-logo">
          <h3>
            <a href="#">
              <img src="./assets/images/techjobs_bgw.png" alt="TechJobs" />
            </a>
          </h3>
          <span class="login-breadcrumb">
            <em>/</em> Sign In
          </span>
        </div>
        <div class="login-right">
          <a href="#" class="btn btn-return">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInHeader;
