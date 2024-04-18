import axios from "axios";
const apiURL = "https://localhost:7282/api";

const JobHooks = {
  GetAllJob: async () => {
    try {
      const response = await axios.get(`${apiURL}/Job`);
      //console.log(response.data);
      return response.data;
    } catch (error) {
      alert(`Can't get all jobs! ${error}`);
      return error;
    }
  },
  CreateJob: async (job) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.post(`${apiURL}/Job`, job);
      return response.data;
    } catch (error) {
      alert(`Can't create job! ${error}`);
      return error;
    }
  },
  EditJob: async (id, job) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.put(`${apiURL}/Job/${id}`, job);
      return response.data;
    } catch (error) {
      alert.error(`Can't set job! ${error}`);
      return error;
    }
  },
  DeleteJob: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.delete(`${apiURL}/Job/${id}`);
      return response.data;
    } catch (error) {
      alert(`Can't delete job! ${error}`);
      return error;
    }
  },
  GetJobById: async (id) => {
    try {
      //const data = JSON.stringify(category);
      const response = await axios.get(`${apiURL}/Job/${id}`);
      return response.data;
    } catch (error) {
      alert(`Can't get job by id! ${error}`);
      return error;
    }
  },
};

export default JobHooks;
