import React from "react";
import MainBanner from "../../components/main/MainBanner";
import MainNav from "../../components/main/MainNav";
import SearchSection from "../../components/main/SearchSection";
import JobBoard from "../../components/main/JobBoard";
import TopEmployer from "../../components/main/TopEmployer";
import JobBestSalary from "../../components/main/JobBestSalary";
import HomePageFooter from "../../Share/Footer/HomePageFooter";
import JobSupport from "../../components/JobSupport";
export default function home() {
  return (
    <>
      <MainNav />
      <div class="clearfix"></div>
      <MainBanner />
      <div class="clearfix"></div>

      <SearchSection />

      <JobBoard />

      <div class="clearfix"></div>

      <TopEmployer />

      <div class="clearfix"></div>

      <JobBestSalary />

      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="home-ads">
                <a href="#">
                  <img src="./assets/images/hna2.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JobSupport />
      <HomePageFooter />
    </>
  );
}
