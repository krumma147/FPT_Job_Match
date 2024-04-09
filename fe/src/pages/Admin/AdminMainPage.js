import React, { useState, useEffect } from "react";
import Content from "../../components/admin/Content";
import SideNav from "../../components/admin/SideNav";
import Navbar from "../../components/admin/NavBar";
import "../../styles/admin/assets/css/adminstyle.css";
import {
  GetAllCategory,
  CreateCategory,
  EditCategory,
  DeleteCategory,
} from "../../hooks/CategoryHook";

import { GetAllJob, CreateJob, EditJob, DeleteJob } from "../../hooks/JobHook";
const AdminMainPage = () => {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      const categorydata = await GetAllCategory();
      // console.log(categorydata.jobCategories);
      setCategories(categorydata.jobCategories);
      const jobdata = await GetAllJob();
      console.log(jobdata);
      setJobs(jobdata.jobs);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AddCategory = async (cat) => {
    const res = await CreateCategory(cat);
    console.log(res);
    alert("Create success!");
    await fetchData();
  };

  const ModifyCategory = async (id, cat) => {
    const res = await EditCategory(id, cat);
    console.log(res);
    alert("Edit success!");
    fetchData();
  };

  const RemoveCategory = async (id) => {
    const res = await DeleteCategory(id);
    console.log(res);
    alert("Delete successful!");
    await fetchData();
  };

  const AddJob = async (job) => {
    const res = await CreateJob(job);
    //alert(res);
    console.log(res);
    if (res.job !== null) alert("Create Job success!");
    await fetchData();
  };

  const ModifyJob = async (id, job) => {
    const res = await EditJob(id, job);
    console.log(res);
    if (res !== null) alert("Edit Job success!");
    await fetchData();
  };

  const RemoveJob = async (id) => {
    const res = await DeleteJob(id);
    console.log(res);
    alert("Delete Job successful!");
    await fetchData();
  };

  return (
    <div class="row">
      <SideNav />
      <div class="container-fluid page-body-wrapper">
        <Navbar />
        <Content
          categories={categories}
          AddCategory={AddCategory}
          ModifyCategory={ModifyCategory}
          RemoveCategory={RemoveCategory}
          AddJob={AddJob}
          jobs={jobs}
          ModifyJob={ModifyJob}
          RemoveJob={RemoveJob}
        />
      </div>
    </div>
  );
};

export default AdminMainPage;
