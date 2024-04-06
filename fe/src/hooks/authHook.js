import axios from "axios";
const apiURL = "http://localhost:5253/api/Auth";

const Register = async (account) => {
  try {
    const response = await axios.post(`${apiURL}/Register`, account);
    // const { token } = response.data;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(response.status);
    return response;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

const Login = async (account) => {
  try {
    const response = await axios.post(`${apiURL}/login`, account);
    console.log("userLogin response:", response.data);
    // const { token } = response.data;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // return response.data;
  } catch (error) {
    console.error("userLogin error!");
    throw error;
  }
};

export { Register, Login };
