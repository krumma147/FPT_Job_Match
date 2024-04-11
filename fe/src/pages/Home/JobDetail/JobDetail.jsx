import React from "react";
import Navbar from "../../../components/home/Navbar";
import Search from "../../../components/home/Search";
import JobSupport from "../../../components/home/JobSupport";
import Footer from "../../../components/home/Footer";
import JobDetailBody from "./JobDetailBody";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  let { id } = useParams();
  return (
    <div>
      <Navbar page={"another-page"} />
      <div class="clearfix"></div>
      {id}
      <JobDetailBody />
      <JobSupport />
      <Footer />
    </div>
  );
};

export default JobDetail;
