import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const useAuth = () => {
  //login
  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://localhost:7282/api/Auth/Login",
        {
          UserName: username,
          Password: password,
        }
      );

      if (
        response.data.message ===
        "OTP has been sent to your email. Please verify it."
      ) {
        return true;
      } else if (typeof response.data.token === "string") {
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
      Swal.fire("Error", error.response.data.message, "error");
    }
  };

  //forgot password
  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(
        "https://localhost:7282/api/Auth/ForgotPassword",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire("Successful", response.data, "success");
    } catch (error) {
      Swal.fire("Error", error.response.data, "error");
    }
  };

  //reset password
  const resetPassword = async (newPassword, id) => {
    try {
      const response = await axios.put(
        `https://localhost:7282/api/Auth/ResetPassword/${id}`,
        { NewPassword: newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire("Successful", response.data, "success");
      return true;
    } catch (error) {
      Swal.fire("Error", error.response.data, "error");
      return false;
    }
  };

  //confirm OTP by email
  const confirmOTP = async (username, otp) => {
    try {
      const response = await axios.post(
        "https://localhost:7282/api/Auth/Login-2FA-Email",
        {
          UserName: username,
          otp: otp,
        }
      );

      if (response.data.message === "Login Success!") {
        const decodedToken = jwtDecode(response.data.token);

        // Check the role and redirect the user
        if (decodedToken.Role === "Admin") {
          window.location.href = "/admin";
        } else if (
          decodedToken.Role === "JobSeeker" ||
          decodedToken.Role === "Employer"
        ) {
          window.location.href = "/";
        }
        Cookies.set("token", response.data.token, { expires: 7 });
        return true;
      }
      return false;
    } catch (error) {
      Swal.fire("Error", error.response.data, "error");
      return false;
    }
  };

  //register
  const signup = async (
    name,
    email,
    phone,
    password,
    confirmPassword,
    role
  ) => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all input!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user = {
      fullName: name,
      userName: email,
      password,
      phoneNumber: phone,
      email,
      role,
    };
    try {
      const response = await axios.post(
        "https://localhost:7282/api/Auth/Register",
        user
      );
      Swal.fire("Successful", response.data, "success");
    } catch (error) {
      Swal.fire("Error", error.response.data.message, "error");
    }
  };

  return { login, forgotPassword, resetPassword, confirmOTP, signup };
};

export default useAuth;
