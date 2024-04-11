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
    // <div>
    //     <Navbar page={'another-page'} />
    //     <div class="clearfix"></div>
    //     <JobDetailBody/>
    //     <JobSupport />
    //     <Footer />
    // </div>
    <div>
      <h2>Job Detail</h2>
      <p>ID: {id}</p>
      {/* Hiển thị thông tin chi tiết công việc */}
    </div>
  );
};

export default JobDetail;
