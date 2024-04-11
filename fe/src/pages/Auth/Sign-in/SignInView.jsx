import React, { useEffect, useState } from "react";
import LoginBody from "./SignInBody";
import Header from "../../../components/Auth/Header";
import Footer from "../../../components/Auth/Footer";
import ModalResetPassword from "../ModalResetPassword";
import { useLocation } from 'react-router-dom';


const SignInView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resetPassword = queryParams.get('resetPassword');
  const id = queryParams.get('id');

  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  useEffect(() => {
    if (resetPassword === 'true') {
      setShowResetPasswordModal(true);
    }
  }, [resetPassword]);

  const handleClose = () => {
    setShowResetPasswordModal(false);
  };

  return (
    <div>
      <div className="container-fluid login-fluid clear-left clear-right">
        <Header title = {'Sign In'}/>

        <div className="clearfix"></div>

        <div className="padding-top-90"></div>

        <div className="login-main">
          <div className="w-login m-auto">
            <LoginBody />
            <ModalResetPassword show={showResetPasswordModal} handleClose={handleClose} id={id} />
          </div>
        </div>
      </div>

      <Footer/>
      </div>
  );
};

export default SignInView;
