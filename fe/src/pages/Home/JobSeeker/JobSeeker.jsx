import React, { useState, useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import Search from "../../../components/home/Search";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import JobSeekerBody from "./JobSeekerBody";
export default function JobSeeker() {
  const [jobs, setJobs] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [application, setApplication] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const appData = localStorage.getItem("ApplicationData");
    const jobsData = localStorage.getItem("JobsData");
    const jobCategories = localStorage.getItem("JobCategories");
    const userData = localStorage.getItem("UserNameData");
    if (jobsData) {
      const parsedJobs = JSON.parse(jobsData);
      setJobs(parsedJobs);
      //console.log(parsedJobs);
    }
    if (jobCategories) {
      const parsedJobCategories = JSON.parse(jobCategories);
      setJobCategories(parsedJobCategories);
    }
    if (appData) {
      const parsedApps = JSON.parse(appData);
      console.log(parsedApps);
      setApplication(parsedApps);
    }
    if (userData) {
      const parsedUs = JSON.parse(userData);
      setUser(parsedUs);
      //console.log(parsedJobs);
    }
  }, []);

  const FindJobCategory = (id) => {
    const data = jobCategories.find((c) => c.id === id);
    return data;
  };

  const GetApplication = (id) => {
    const appData = application.filter((a) => a.jobId === id);
    console.log(appData);
    return appData;
  };

  const GetUserName = (id) => {
    const data = user.find((c) => c.id === id);
    return data;
  };

  return (
    <div>
      <Navbar page={"another-page"} />
      <div class="clearfix"></div>
      <Search search={{ color: "#000", borderBottom: "1px solid #000;" }} />
      <JobSeekerBody
        jobs={jobs}
        FindJobCategory={FindJobCategory}
        GetApplication={GetApplication}
        GetUserName={GetUserName}
      />
      <JobSupport />
      <Footer />
    </div>
  );
}
