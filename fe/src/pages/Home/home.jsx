import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Navbar from "../../components/home/Navbar";
import Search from "../../components/home/Search";
import Banner from "../../components/home/Banner";
import SideBar from "../../components/home/SideBar";
import JobBoard from "../../components/home/JobBoard";
import TopEmployer from "../../components/home/TopEmployer";
import JobSalary from "../../components/home/JobSalary";
import News from "../../components/home/News";
import JobSupport from "../../components/home/JobSupport";
import Footer from "../../components/home/Footer";
// Hooks
import JobHooks from "../../hooks/JobHook";
import CategoryHook from "../../hooks/CategoryHook";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterJob, setFilterJob] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const fetchData = async () => {
    const jobdata = await JobHooks.GetAllJob();
    const categorydata = await CategoryHook.GetAllCategory();
    //console.log(categorydata.jobCategories);
    setJobs(jobdata.jobs);
    setCategories(categorydata.jobCategories);
    setFilterJob(jobs);
    //console.log(jobdata.jobs);
    const jobsJSON = JSON.stringify(jobdata.jobs);
    const categoriesJSON = JSON.stringify(categorydata.jobCategories);

    if (localStorage.getItem("JobCategories") == null)
      localStorage.setItem("JobCategories", categoriesJSON);

    if (localStorage.getItem("JobsData") == null)
      localStorage.setItem("JobsData", jobsJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchKey === "") {
      setFilterJob(jobs);
    } else {
      const newJobList = jobs.filter((j) => j.title.includes(searchKey));
      setFilterJob(newJobList);
    }
    //console.log(filterCategory);
  }, [searchKey, filterCategory]);

  return (
    <div>
      <Navbar />
      <div class="clearfix"></div>
      <Banner />
      <Search
        searchHome={{ marginTop: "-11rem" }}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        setFilterCategory={setFilterCategory}
        categories={categories}
        filterCategory={filterCategory}
      />
      <SideBar jobs={filterJob} categories={categories} />
      <div class="clearfix"></div>
      <JobBoard />
      <div class="clearfix"></div>
      <TopEmployer />
      <div class="clearfix"></div>
      <JobSalary />
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-ads">
                <a href="#">
                  <img src="assets/home/img/hna2.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
      <News />
      <JobSupport />
      <Footer />
    </div>
  );
};

export default Home;
