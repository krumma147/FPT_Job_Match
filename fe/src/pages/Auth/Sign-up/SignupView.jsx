import React from "react";
import Header from "../../../components/Auth/Header";
import Footer from "../../../components/Auth/Footer";
import SignupEmployee from "./Signup_employee";
import SignupEmployeer from "./Signup_employer";

const SignupView = () => {

  const employeeTab = <SignupEmployee />;
  const employerTab = <SignupEmployeer />;

  return (
    <>
      <div className="container-fluid login-fluid clear-left clear-right">
        <Header title={'Sign Up'} />

        <div className="clearfix"></div>

        <div className="padding-top-90"></div>

        <div className="login-main">
          <div className="w-login m-auto">
            <div className="row">
              <ul className="nav nav-pills nav-fill text-dark" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    Sign up as Job Seeker
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Sign up as Recruiter
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                {employeeTab}
              </div>
              <div className="tab-pane" id="tabs-2" role="tabpanel">
                {employerTab}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupView;
