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
  return (
    <div>
      <Navbar page={"another-page"} />
      <JobDetailBody job={job} relatedJobs={relatedJobs} />
      <JobSupport />
      <Footer />
    </div>
  );
};

export default JobDetail;
