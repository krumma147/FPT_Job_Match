import React from "react";
import SignUpHeader from "../../Share/Header/SignUpHeader";
import SignUpFooter from "../../Share/Footer/SignUpFooter";
import SignupEmployee from "./body/Signup_employee";
import SignupEmployeer from "./body/Signup_employer";
import { Register } from "../../hooks/authHook";

const SignupView = () => {
  const registerHandler = async (e, user) => {
      const res = await Register(user);
      console.log(res);
  };

  const employeeTab = <SignupEmployee registerHandler={registerHandler} />;
  const employerTab = <SignupEmployeer registerHandler={registerHandler} />;

  return (
    <div class="container-fluid login-fluid clear-left clear-right">
      <SignUpHeader />

      <div class="clearfix"></div>

      <div class="padding-top-90"></div>

      <div class="login-main">
        <div class="w-login m-auto">
          <div class="row">
            <ul class="nav nav-pills nav-fill text-dark" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                >
                  Sign up as Job Seeker
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                  Sign up as Recruiter
                </a>
              </li>
            </ul>
          </div>

          <div class="tab-content">
            <div class="tab-pane active" id="tabs-1" role="tabpanel">
              {employeeTab}
            </div>
            <div class="tab-pane" id="tabs-2" role="tabpanel">
              {employerTab}
            </div>
          </div>
        </div>
      </div>
      <SignUpFooter />
    </div>
  );
};

export default SignupView;
