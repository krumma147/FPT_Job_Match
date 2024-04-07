import React from "react";
import Footer from "../../Share/Footer/AdminFooter";
import DashboardPanel from "./TabPanelContents/DashboardPanel";
import ApplicationPanel from "./TabPanelContents/ApplicationPanel";
import UserPanel from "./TabPanelContents/UserPanel";
import CategoryPanel from "./TabPanelContents/CategoryPanel";
import JobPanel from "./TabPanelContents/JobPanel";
const Content = () => {
  // In this area could get all data from API then send to other routes
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-dashboard"
            role="tabpanel"
            aria-labelledby="v-pills-dashboard-tab"
          >
            <DashboardPanel />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-jobs"
            role="tabpanel"
            aria-labelledby="v-pills-jobs-tab"
          >
            <JobPanel />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-categories"
            role="tabpanel"
            aria-labelledby="v-pills-categories-tab"
          >
            <CategoryPanel />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-applications"
            role="tabpanel"
            aria-labelledby="v-pills-applications-tab"
          >
            <ApplicationPanel />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-users"
            role="tabpanel"
            aria-labelledby="v-pills-users-tab"
          >
            <UserPanel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Content;
