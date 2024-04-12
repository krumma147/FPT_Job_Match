import React, { Component, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ModalResetForgot from '../ModalForgot';
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ModalOTP from '../ModalOTP';
import useAuth from '../../../hooks/authHook';

const LoginBody = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { login } = useAuth();

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    window.location.assign('https://localhost:7282/api/Auth/LoginGoogle?role=JobSeeker');
  };

  const handleFacebookLogin = (event) => {
    event.preventDefault();
    window.location.assign('https://localhost:7282/api/Auth/signin-facebook?role=JobSeeker');
  }

  //login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const isOTPRequired = await login(username, password);
    if (isOTPRequired) {
      setIsModalOpen(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const confirmEmail = params.get('confirmEmail');

    if (confirmEmail === 'true') {
      Swal.fire('Successful', 'Email confirmed. You can now log in.', 'success');
    }
  }, [location]);

  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 col-12 login-main-left">
        <img src="./assets/home/img/banner-login.png" />
      </div>
      <div className="col-md-6 col-sm-12 col-12 login-main-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-main-header">
            <h3>Login</h3>
          </div>
          <div className="input-div one">
            <div className="div lg-lable">
              {/* <h5>Username</h5> */}
              <input
                placeholder='Email'
                type="text"
                className="input form-control-lgin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="div lg-lable" style={{ position: 'relative' }}>
              {/* <h5>Password</h5> */}
              <input
                placeholder='Password'
                type={showPassword ? "text" : "password"}
                className="input form-control-lgin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent', color: 'black' }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="form-group d-block frm-text">
            <a type="button" data-toggle="modal" data-target="#forgotPasswordModal" className="fg-login d-inline-block">
              Forgot Password
            </a>

            <a href="/signup" className="fg-login float-right d-inline-block">
              Do not have an account? Register
            </a>
          </div>
          <button
            type="submit"
            className="btn btn-primary float-right btn-login d-block w-100"
          >
            Login
          </button>
          <div className="form-group d-block w-100 mt-5">
            <div className="text-or text-center">
              <span>Or</span>
            </div>
            <ModalOTP isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} username={username} />
            <ModalResetForgot />
            <div className="row">
              <div className="col-sm-6 col-12 pr-7">
                <button className="btn btn-secondary btn-login-facebook btnw w-100 float-left"
                  onClick={handleFacebookLogin}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span> Login with Facebook</span>
                </button>
              </div>
              <div className="col-sm-6 col-12 pl-7">
                <button className="btn btn-secondary btn-login-google btnw w-100 float-left"
                  onClick={handleGoogleLogin}>
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

export default LoginBody;
