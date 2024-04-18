import axios from "axios";
const apiURL = "https://localhost:7282/api";

const UserHook = {
  GetAllUsers: async () => {
    try {
      const response = await axios.get(`${apiURL}/User`);
      return response.data;
    } catch (error) {
      console.error(`Can't get all account! ${error}`);
      //return error;
    }
  },

  CreateUser: async (user) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.post(`${apiURL}/User`, user);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      //return error;
    }
  },

  EditUser: async (id, user) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.put(`${apiURL}/User/${id}`, user);
      return response.data;
    } catch (error) {
      console.error(`Can't edit account! ${error}`);
    }
  },

  DeleteUser: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.delete(`${apiURL}/User/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't delete user! ${error}`);
      //return error;
    }
  },
  GetUserById: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.get(`${apiURL}/User/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't get user! ${error}`);
      //return error;
    }
  },
  GetUser2FAStatus: async (id) => {
    try {
      const response = await axios.get(`https://localhost:7282/api/Home/${id}`);
      return response.data;
    } catch (e) {
      console.error(`Cant get user two factor status! ${e}`);
    }
  },
  SetUser2FAStatus: async (id, status) => {
    try {
      const response = await axios.put(
        `https://localhost:7282/api/Home/Check2FA/${id}`,
        status
      );
      return response.data;
    } catch (e) {
      console.error(`Cant set user two factor status! ${e}`);
    }
  },
};

export default UserHook;
