import React, { useState, useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import PostNewBody from "./PostNewBody";
import { checkAccess, getUserId } from "../../Auth/Auth";
import { useHistory, useParams } from "react-router-dom";
import { fetchApplication, fetchJobs } from "../home";
export default function PostNews() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [employerId, setEmployerId] = useState("");
  const [editJob, setEditJob] = useState(null);
  const history = useHistory();
  const isEmployer = checkAccess("Employer");

  if (!isEmployer) {
    alert("You are not authorized to post new jobs!");
    history.push("/");
    window.location.reload();
  }

  useEffect(() => {
    GetAllCategories();
    const userid = getUserId();
    setEmployerId(userid);
  }, []);

  useEffect(() => {
    const jobsDataJSON = localStorage.getItem("JobsData");
    if (jobsDataJSON) {
      const jobData = JSON.parse(jobsDataJSON);
      const editJob = jobData.find((j) => j.id === parseInt(id));
      console.log(editJob, id);
      setEditJob(editJob);
    }
  }, [id]);

  const ReFetchingData = async () => {
    await fetchApplication();
    await fetchJobs();
  };

  //console.log(isEmployer);

  const GetAllCategories = () => {
    const categoriesJSON = localStorage.getItem("JobCategories");
    const categoriesdata = JSON.parse(categoriesJSON);
    if (categoriesdata !== null && categoriesdata.length > 0)
      setCategories(categoriesdata);
  };

  return (
    <div>
      <Navbar page={"another-page"} />
      <div class="clearfix"></div>
      <PostNewBody
        categories={categories}
        employerId={employerId}
        ReFetchingData={ReFetchingData}
        editJob={editJob}
      />
      <JobSupport />
      <Footer />
    </div>
  );
}
