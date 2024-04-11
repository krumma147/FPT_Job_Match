import axios from "axios";
const apiURL = "http://localhost:5253/api";

const UserHook = {
  GetAllUsers: async () => {
    try {
      const response = await axios.get(`${apiURL}/User`);
      return response.data;
    } catch (error) {
      //console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  CreateUser: async (user) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.post(`${apiURL}/User`, user);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  EditUser: async (id, user) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.put(`${apiURL}/User/${id}`, user);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  DeleteUser: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.delete(`${apiURL}/User/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },
  GetUserById: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.get(`${apiURL}/User/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },
};

export default UserHook;
