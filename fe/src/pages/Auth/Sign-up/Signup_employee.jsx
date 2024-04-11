import React, { useState } from "react";
// import Loading from "../../Share/Loading";

const SignupEmployee = ({ registerHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupBtn = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      name === "" &&
      email === "" &&
      phone === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setLoading(false);
      alert("Please fill all input!");
      return;
    }
    if (password === confirmPassword) {
      const user = {
        name,
        email,
        password,
        phone,
        role: "JobSeeker",
      };

      //console.log(user);
      await registerHandler(user);
      alert("Đăng ký thành công");
    } else {
      alert("Confirm password not matching!");
    }
    setLoading(false);
    //console.log({name, email, phone, password, confirmPassword});
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    window.location.assign('https://localhost:7282/api/Auth/LoginGoogle?role=JobSeeker');
  };

  const handleFacebookLogin = (event) => {
    event.preventDefault();
    window.location.assign('https://localhost:7282/api/Auth/signin-facebook?role=JobSeeker');
  }

  return (
    <div className="row">
      {/* {loading && <Loading />} */}
      <div className="col-md-6 col-sm-12 col-12 login-main-left">
        <img src="./assets/home/img/banner-login.png" />
      </div>

      <div className="col-md-6 col-sm-12 col-12 login-main-right">
        <form className="login-form reg-form">
          <div className="login-main-header">
            <h3>Register</h3>
          </div>

          <div className="input-div one">
            <div className="div lg-lable">
              <input
                className="input form-control-lgin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                type="text"
              />
            </div>
          </div>

          <div className="input-div one">
            <div className="div lg-lable">
              <input
                type="text"
                className="input form-control-lgin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="input-div one">
            <div className="div lg-lable">
              <input
                type="text"
                className="input form-control-lgin"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="input-div one">
            <div className="div lg-lable">
              <input
                type="password"
                className="input form-control-lgin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="input-div one">
            <div className="div lg-lable">
              <input
                type="password"
                className="input form-control-lgin"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="form-group d-block frm-text">
            <a href="#" className="fg-login d-inline-block"></a>
            <a href="/signin" className="fg-login float-right d-inline-block">
              Do you already have an account? Log in
            </a>
          </div>

          <button
            className="btn btn-primary float-right btn-login d-block w-100"
            onClick={signupBtn}
          >
            Register
          </button>

          <div className="form-group d-block w-100 mt-5">
            <div className="text-or text-center">
              <span>Or</span>
            </div>

            <div className="row">
              <div className="col-sm-6 col-12 pr-7">
                <button className="btn btn-secondary btn-login-facebook btnw w-100 float-left"
                  onClick={handleFacebookLogin}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span> Login with Facebook</span>
                </button>
              </div>
              <div className="col-sm-6 col-12 pl-7">
                <button
                  className="btn btn-secondary btn-login-google btnw w-100 float-left"
                  onClick={handleGoogleLogin}
                >
                  <i className="fa fa-google" aria-hidden="true"></i>
                  <span> Login with Google</span>
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
