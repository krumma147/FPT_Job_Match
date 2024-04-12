import React from "react";
import Navbar from "../../../components/home/Navbar";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import PostNewBody from "./PostNewBody";
import { checkAccess, getUserId } from "../../Auth/Auth";
import { useHistory } from "react-router-dom";
export default function PostNews() {
  const history = useHistory();
  const isEmployer = checkAccess("Employer");
  console.log(isEmployer);
  if (!isEmployer) {
    alert("You are not authorized to post new jobs!");
    history.push("/");
    window.location.reload();
  }
  return (
    <div>
      <Navbar page={"another-page"} />
      <div class="clearfix"></div>
      <PostNewBody />
      <JobSupport />
      <Footer />
    </div>
  );
}
