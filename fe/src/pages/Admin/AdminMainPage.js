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

  const fetchJobs = async () => {
    try {
      const res = await GetAllCategory();
      console.log(res.jobCategories);
      setCategories(res.jobCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await GetAllCategory();
      console.log(res.jobCategories);
      setCategories(res.jobCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const AddCategory = async (cat) => {
    const res = await CreateCategory(cat);
    console.log(res);
    alert("Create success!");
    fetchCategories();
  };

  const ModifyCategory = async (id, cat) => {
    const res = await EditCategory(id, cat);
    console.log(res);
    alert("Edit success!");
    fetchCategories();
  };

  const RemoveCategory = async (id) => {
    const res = await DeleteCategory(id);
    console.log(res);
    alert("Delete successful!");
    fetchCategories();
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
        />
      </div>
    </div>
  );
};

export default AdminMainPage;
