import axios from "axios";
const apiURL = "https://localhost:7282/api";

const ApplicationHook = {
  GetAllApplications: async () => {
    try {
      const response = await axios.get(`${apiURL}/Application`);
      return response.data;
    } catch (error) {
      alert(`Can't create account! ${error}`);
    }
  },

  CreateApplication: async (application) => {
    try {
      const response = await axios.post(`${apiURL}/Application`, application);
      return response.data;
    } catch (error) {
      alert(`Can't create application! ${error}`);
    }
  },

  EditApplication: async (id, application) => {
    try {
      const response = await axios.put(
        `${apiURL}/Application/${id}`,
        application
      );
      return response.data;
    } catch (error) {
      alert(`Can't edit application! ${error}`);
    }
  },

  DeleteApplication: async (id) => {
    try {
      const response = await axios.delete(`${apiURL}/Application/${id}`);
      return response.data;
    } catch (error) {
      alert(`Can't delete application! ${error}`);
    }
  },

  GetApplicationById: async (id) => {
    try {
      const response = await axios.get(`${apiURL}/Application/${id}`);
      return response.data;
    } catch (error) {
      alert(`Can't get application detail! ${error}`);
    }
  },
};

export default ApplicationHook;
