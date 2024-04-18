import React, { useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import Search from "../../../components/home/Search";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import JobDetailBody from "./JobDetailBody";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  let { id } = useParams();
  const jobDataJSON = localStorage.getItem("JobsData");
  const jobData = JSON.parse(jobDataJSON);
  const userDataJSON = localStorage.getItem("UserNameData");
  const userData = JSON.parse(userDataJSON);
  //console.log(jobData);
  if (!jobData) {
    console.log("No data in local storage");
    return null;
  }
  const jobId = parseInt(id);
  const job = jobData.find((j) => j.id === jobId);
  const relatedJobs = jobData.filter(
    (j) => j.jobCategoryId === job.jobCategoryId
  );
const findAuthor = (id) => {
  return userData.find((j) => j.id === id);
};

  return (
    <div>
      <Navbar page={"another-page"} />
      <JobDetailBody job={job} relatedJobs={relatedJobs} findAuthor={findAuthor} />
      <JobSupport />
      <Footer />
    </div>
  );
};

export default JobDetail;
