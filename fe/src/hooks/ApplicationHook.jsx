import axios from "axios";
const apiURL = "http://localhost:5253/api";

const ApplicationHook = {
  GetAllApplications: async () => {
    try {
      const response = await axios.get(`${apiURL}/Application`);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  CreateApplication: async (application) => {
    try {
      const response = await axios.post(`${apiURL}/Application`, application);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  EditApplication: async (id, application) => {
    try {
      const response = await axios.put(`${apiURL}/Application/${id}`, application);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  DeleteApplication: async (id) => {
    try {
      const response = await axios.delete(`${apiURL}/Application/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },

  GetApplicationById: async (id) => {
    try {
      const response = await axios.get(`${apiURL}/Application/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Can't create account! ${error}`);
      return error;
    }
  },
};

export default ApplicationHook;
