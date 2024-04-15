import React, { useState, useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import Search from "../../../components/home/Search";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import ListJobBody from "./ListJobBody";
export default function ListJob() {
  const [jobs, setJobs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const jobsJSON = localStorage.getItem("JobsData");
    if (jobsJSON) {
      const parsedJobs = JSON.parse(jobsJSON);
      setJobs(parsedJobs);
      //console.log(parsedJobs);
    }
  }, []);

  useEffect(() => {
    const searchValue = searchKey.toLowerCase();
    const searchJobList = jobs.filter((j) =>
      j.title.toLowerCase().includes(searchValue)
    );
    setSearchList(searchJobList);
  }, [searchKey]);

  return (
    <div>
      <Navbar page={"another-page"} />
      <div class="clearfix"></div>
      <Search
        search={{ color: "#000", borderBottom: "1px solid #000;" }}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      <ListJobBody jobs={searchKey === "" ? jobs : searchList} searchKey={searchKey} />
      <JobSupport />
      <Footer />
    </div>
  );
}
