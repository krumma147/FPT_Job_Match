import React, { useState, useEffect } from "react";
import Navbar from "../../../components/home/Navbar";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import PostNewBody from "./PostNewBody";
import { checkAccess, getUserId } from "../../Auth/Auth";
import { useHistory } from "react-router-dom";

export default function PostNews() {
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const isEmployer = checkAccess("Employer");

  useEffect(() => {
    GetAllCategories();
  }, []);

  //console.log(isEmployer);
  if (!isEmployer) {
    alert("You are not authorized to post new jobs!");
    history.push("/");
    window.location.reload();
  }

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
      <PostNewBody categories={categories} />
      <JobSupport />
      <Footer />
    </div>
  );
}
