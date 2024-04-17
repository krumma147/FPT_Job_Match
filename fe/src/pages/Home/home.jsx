import React, { useState, useEffect } from "react";
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
import ChatHome from "../Chat/ChatHome";
import { getUserName } from "../Auth/Auth";
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

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
    }
    const searchValue = searchKey.toLowerCase();
    const newJobList = jobs.filter((j) =>
      j.title.toLowerCase().includes(searchValue)
    );
    setFilterJob(newJobList);
    //console.log(filterCategory);
  }, [searchKey, filterCategory]);
  const location = useLocation();
  
  //show message check role
  useEffect(() => {
    if (location.state?.redirected && location.state?.noAccess) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your account does not have permission to access this page!',
      });
    }
  }, [location]);

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
      <SideBar
        jobs={searchKey === "" ? jobs : filterJob}
        categories={categories}
      />
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
      {getUserName() && <ChatHome username={getUserName()} />}
      <JobSupport />
      <Footer />
    </div>
  );
};

export default Home;
