import axios from "axios";
const apiURL = "http://localhost:5253/api";

const GetAllCategory = async () => {
  try {
    const response = await axios.post(`${apiURL}/Categories`);
    // const { token } = response.data;
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(response.status);
    return response;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

export {GetAllCategory};
