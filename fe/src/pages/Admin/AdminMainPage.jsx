import React, { useState, useEffect } from "react";
import "../../styles/admin/css/style.css";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/NavBar";
import RevenueChart from "../../components/admin/RevenueChart";
import SalesChart from "../../components/admin/SalesChart";
import RecentSales from "../../components/admin/RecentSales";
import Widget from "../../components/admin/Widget";
import Spinner from "../../components/admin/Spinner";
import Footer from "../../components/admin/Footer";
// Hooks
import CategoryHook from "../../hooks/CategoryHook";
import JobHooks from "../../hooks/JobHook";
import UserHook from "../../hooks/UserHook";
import ApplicationHook from "../../hooks/ApplicationHook";
// Panel
import ApplicationPanel from "../../components/admin/TabPanelContents/ApplicationPanel";
import UserPanel from "../../components/admin/TabPanelContents/UserPanel";
import CategoryPanel from "../../components/admin/TabPanelContents/CategoryPanel";
import JobPanel from "../../components/admin/TabPanelContents/JobPanel";
export default function AdminMainPage() {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);

  const fetchData = async () => {
    const categorydata = await CategoryHook.GetAllCategory();
    // console.log(categorydata.jobCategories);
    setCategories(categorydata.jobCategories);
    const jobdata = await JobHooks.GetAllJob();
    setJobs(jobdata.jobs);
    //console.log(jobdata);
    const usersData = await UserHook.GetAllUsers();
    setUsers(usersData);
    //console.log(usersData);
    const applicationsData = await ApplicationHook.GetAllApplications();
    //console.log(applicationsData);
    setApplications(applicationsData.applications);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddCategory = async (cat) => {
    const res = await CategoryHook.CreateCategory(cat);
    console.log(res);
    alert("Create success!");
    await fetchData();
  };

  const ModifyCategory = async (id, cat) => {
    const res = await CategoryHook.EditCategory(id, cat);
    console.log(res);
    alert("Edit success!");
    fetchData();
  };

  const RemoveCategory = async (id) => {
    const res = await CategoryHook.DeleteCategory(id);
    console.log(res);
    alert("Delete successful!");
    await fetchData();
  };

  const AddJob = async (job) => {
    const res = await JobHooks.CreateJob(job);
    //console.log(res);
    if (res.job !== null) alert("Create Job success!");
    await fetchData();
  };

  const ModifyJob = async (id, job) => {
    const res = await JobHooks.EditJob(id, job);
    console.log(res);
    if (res !== null) alert("Edit Job success!");
    await fetchData();
  };

  const RemoveJob = async (id) => {
    const res = await JobHooks.DeleteJob(id);
    console.log(res);
    alert("Delete Job successful!");
    await fetchData();
  };

  const AddApplication = async (application) => {
    try {
      const res = await ApplicationHook.CreateApplication(application);
      if (res.message !== null) alert("Create Application success!");
    } catch (err) {
      alert(err);
    }
    //alert(res);
    //console.log(res);
    await fetchData();
  };

  const ModifyApplication = async (id, application) => {
    const res = await ApplicationHook.EditApplication(id, application);
    console.log(res);
    if (res !== null) alert("Edit User success!");
    await fetchData();
  };

  const RemoveApplication = async (id) => {
    const res = await ApplicationHook.DeleteApplication(id);
    console.log(res);
    alert("Delete User successful!");
    await fetchData();
  };
  const AddUser = async (user) => {
    try {
      const res = await UserHook.CreateUser(user);
      if (res !== null) alert("Create User success!");
    } catch (err) {
      alert(err);
    }
    //alert(res);
    //console.log(res);
    await fetchData();
  };

  const ModifyUser = async (id, user) => {
    const res = await UserHook.EditUser(id, user);
    console.log(res);
    if (res !== null) alert("Edit User success!");
    await fetchData();
  };

  const RemoveUser = async (id) => {
    const res = await UserHook.DeleteUser(id);
    console.log(res);
    alert("Delete User successful!");
    await fetchData();
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      {/* <Spinner /> */}
      <div className="sidebar pe-4 pb-3 bg-grayE8">
        <Sidebar />
      </div>
      <div className="content tab-content">
        <Navbar />
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <RevenueChart />
            <SalesChart />
            <RecentSales />
            <Widget />
            <Footer />
          </div>
          <div
            className="tab-pane fade"
            id="jobs"
            role="tabpanel"
            aria-labelledby="jobs-tab"
          >
            <JobPanel
              AddJob={AddJob}
              jobs={jobs}
              ModifyJob={ModifyJob}
              RemoveJob={RemoveJob}
              categories={categories}
            />
          </div>
          <div
            class="tab-pane fade"
            id="categories"
            role="tabpanel"
            aria-labelledby="categories-tab"
          >
            <CategoryPanel
              categories={categories}
              AddCategory={AddCategory}
              ModifyCategory={ModifyCategory}
              RemoveCategory={RemoveCategory}
            />
          </div>
          <div
            class="tab-pane fade"
            id="application"
            role="tabpanel"
            aria-labelledby="application-tab"
          >
            <ApplicationPanel
              AddApplication={AddApplication}
              ModifyApplication={ModifyApplication}
              RemoveApplication={RemoveApplication}
              jobs={jobs}
              users={users}
              applications={applications}
            />
          </div>
          <div
            class="tab-pane fade"
            id="users"
            role="tabpanel"
            aria-labelledby="users-tab"
          >
            <UserPanel
              users={users}
              AddUser={AddUser}
              ModifyUser={ModifyUser}
              RemoveUser={RemoveUser}
            />
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
}
