import axios from "axios";
const apiURL = "http://localhost:5253/api";

const GetAllJob = async () => {
  try {
    const response = await axios.get(`${apiURL}/Job`);
    return response.data;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

const CreateJob = async (job) => {
  try {
    //const data = JSON.stringify(category);
    const response = await axios.post(`${apiURL}/Job`, job);
    return response.data;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

const EditJob = async (id, job) => {
  try {
    //const data = JSON.stringify(category);
    const response = await axios.put(`${apiURL}/Job/${id}`, job);
    return response.data;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

const DeleteJob = async (id) => {
  try {
    //const data = JSON.stringify(category);
    const response = await axios.delete(`${apiURL}/Job/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Can't create account! ${error}`);
    return error;
  }
};

export { GetAllJob, CreateJob, EditJob, DeleteJob };
