import React, { useState } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../../Service/configFirebase";
import Swal from "sweetalert2";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import CustomToastContainer from "../../components/admin/Notification/CustomToastContainer";
const slideDown = keyframes`
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
`;

const Modal = styled(BootstrapModal)`
  .modal-dialog {
    animation: ${slideDown} 0.5s ease-out;
  }
`;

const ModalPhoneLogin = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const auth = getAuth(app);
  auth.useDeviceLanguage();
  const convertPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("+84")) {
      return "0" + phoneNumber.slice(3);
    }
    return phoneNumber;
  };
  const signin = async () => {
    if (phoneNumber === "") return;

    try {
      const response = await axios.post(
        `https://localhost:7282/api/Auth/CheckPhoneNumber`,
        {
          PhoneNumber: convertPhoneNumber(phoneNumber),
        }
      );

      if (response.data.exists) {
        const recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "normal",
            callback: async (response) => {
              try {
                const confirmationResult = await signInWithPhoneNumber(
                  auth,
                  phoneNumber,
                  recaptchaVerifier
                );
                setConfirmationResult(confirmationResult);
                setOtpSent(true);
                toast.success(`OTP is send to phone number: ${phoneNumber}`);
              } catch (error) {
                console.error("Error, can't send OTP: ", error);
                toast.error(`OTP cannot be sent!`);
              }
            },
            "expired-callback": () => {},
          }
        );
        recaptchaVerifier.render();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error, can't check phone number: ", error);
    }
  };

  const verifyOtp = async () => {
    if (otp === "") {
      Swal.fire(
        "Error",
        "OTP cannot be empty. Please enter your OTP.",
        "error"
      );
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      try {
        const response = await axios.post(
          `https://localhost:7282/api/Auth/LoginWithPhoneNumber`,
          {
            PhoneNumber: convertPhoneNumber(phoneNumber),
          }
        );

        console.log(response);

        if (typeof response.data.token === "string") {
          const decodedToken = jwtDecode(response.data.token);
          if (decodedToken.Role === "Admin") {
            window.location.href = "/admin";
          } else if (
            decodedToken.Role === "JobSeeker" ||
            decodedToken.Role === "Employer"
          ) {
            window.location.href = "/";
          }

          Cookies.set("token", response.data.token, { expires: 7 });
        } else {
          Swal.fire("Error", "Invalid token: " + response.data.token, "error");
        }
      } catch (error) {
        console.error("Error, can't login with phone number: ", error);
      }

      onClose();
    } catch (error) {
      Swal.fire("Error", "OTP is not valid! ", "error");
    }
  };

  const resetCaptchaAndPhoneNumber = () => {
    setPhoneNumber("");
    setOtp("");
    setOtpSent(false);
    console.log(confirmationResult);
    // if (confirmationResult) {
    //   confirmationResult.confirmationResult.clear(); // Xóa reCAPTCHA hiện tại
    // }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <>
      <CustomToastContainer />
      <Modal show={isOpen} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login with Phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                defaultValue="+84"
                onChange={handlePhoneNumberChange}
              />
              <Form.Text className="text-muted">
                We'll never share your phone number with anyone else.
              </Form.Text>
            </Form.Group>
            <div id="recaptcha-container"></div>
            {otpSent && (
              <Form.Group controlId="formOTP">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  onChange={handleOTPChange}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={onClose}>
            Close
          </Button> */}
          {otpSent && (
            <Button variant="warning" onClick={resetCaptchaAndPhoneNumber}>
              Reset Captcha
            </Button>
          )}
          <Button
            variant="primary"
            onClick={confirmationResult ? verifyOtp : signin}
          >
            {confirmationResult ? "Verify" : "Send OTP"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPhoneLogin;
