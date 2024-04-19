/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import "../../styles/admin/css/style.css";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/admin/NavBar";
import RevenueChart from "../../components/admin/RevenueChart";
import SalesChart from "../../components/admin/SalesChart";
import RecentSales from "../../components/admin/RecentSales";
import Widget from "../../components/admin/Widget";
import Spinner from "../../components/admin/Spinner";
import Footer from "../../components/admin/Footer";
// Notification
import { toast } from "react-toastify";
import CustomToastContainer from "../../components/admin/Notification/CustomToastContainer";
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
import AdminChatNav from "./AdminChatNav";
// Socket
import connection from "../../Service/signalRConfig";
import Swal from "sweetalert2";
export default function AdminMainPage() {
  const [categories, setCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [showMessages, setShowMessages] = useState(false);

  const fetchApplication = async () => {
    const appData = await ApplicationHook.GetAllApplications();
    if (appData) {
      setApplications(appData.applications);
    } else {
      setApplications([]);
    }
  };

  const fetchJobs = async () => {
    const jobdata = await JobHooks.GetAllJob();
    if (jobdata) {
      setJobs(jobdata.jobs);
    } else {
      setJobs([]);
    }
  };

  const fetchCategories = async () => {
    const categorydata = await CategoryHook.GetAllCategory();
    if (categorydata) {
      setCategories(categorydata.jobCategories);
    } else {
      setCategories([]);
    }
  };

  const fetchUserData = async () => {
    const userData = await UserHook.GetAllUsers();
    if (userData) {
      setUsers(userData);
      const employerData = userData.filter((u) => u.roles[0] === "Employer");
      setEmployers(employerData);
    } else {
      setUsers([]);
      setEmployers([]);
    }
  };

  const fetchAllData = async () => {
    await fetchApplication();
    await fetchJobs();
    await fetchCategories();
    await fetchUserData();
  };

  const AddCategory = async (cat) => {
    try {
      const res = await CategoryHook.CreateCategory(cat);
      // if (res !== null) alert("Create success!");
      await fetchCategories();
    } catch (err) {
      Swal.fire("Error", err.res.data, "error");
    }
  };

  const ModifyCategory = async (id, cat) => {
    try {
      const res = await CategoryHook.EditCategory(id, cat);
      // console.log(res);
      // alert("Edit success!");
      await fetchCategories();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const RemoveCategory = async (id) => {
    try {
      const res = await CategoryHook.DeleteCategory(id);
      // console.log(res);
      // alert("Delete successful!");
      await fetchCategories();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const AddJob = async (job) => {
    try {
      const res = await JobHooks.CreateJob(job);
      // console.log(res);
      // alert("Create Job success!");
      await fetchJobs();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const ModifyJob = async (id, job) => {
    try {
      const res = await JobHooks.EditJob(id, job);
      // console.log(res);
      // if (res !== null) alert("Edit Job success!");
      await fetchJobs();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const RemoveJob = async (id) => {
    try {
      const res = await JobHooks.DeleteJob(id);
      // console.log(res);
      // alert("Delete Job successful!");
      await fetchJobs();
    } catch (error) {
      Swal.fire("Error", error.data, "error");
    }
  };

  const AddApplication = async (application) => {
    try {
      const res = await ApplicationHook.CreateApplication(application);
      // if (res.message !== null) alert("Create Application success!");
      await fetchApplication();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const ModifyApplication = async (id, application) => {
    try {
      const res = await ApplicationHook.EditApplication(id, application);
      console.log(res);
      if (res !== null) alert("Edit User success!");
      await fetchApplication();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const RemoveApplication = async (id) => {
    try {
      const res = await ApplicationHook.DeleteApplication(id);
      // console.log(res);
      // alert("Delete User successful!");
      await fetchApplication();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const AddUser = async (user) => {
    try {
      const res = await UserHook.CreateUser(user);
      await fetchUserData();
    } catch (err) {
      Swal.fire("Error", err.res.data, "error");
    }
  };

  const ModifyUser = async (id, user) => {
    try {
      const res = await UserHook.EditUser(id, user);
      // console.log(res);
      await fetchUserData();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  const RemoveUser = async (id) => {
    try {
      const res = await UserHook.DeleteUser(id);
      // console.log(res);
      // alert("Delete User successful!");
      await fetchUserData();
    } catch (error) {
      Swal.fire("Error", error.res.data, "error");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  //notification
  useEffect(() => {
    //user
    connection.on("createdUser", (newUser) => {
      if (newUser && newUser.userName) {
        toast.success(`New user registered: ${newUser.userName}`);
        // setUsers((prevUsers) => [...prevUsers, newUser]);
      }
    });

    connection.on("updatedUser", (updatedUser) => {
      toast.info(`User updated: ${updatedUser.userName}`);
      // setUsers((prevUsers) =>
      //   prevUsers.map((user) =>
      //     user.id === updatedUser.id ? updatedUser : user
      //   )
      // );
    });

    connection.on("deletedUser", (deletedUserId) => {
      toast.info(`User deleted: ${deletedUserId}`);
      // setUsers((prevUsers) =>
      //   prevUsers.filter((user) => user.id !== deletedUserId)
      // );
    });
    //category
    connection.on("createdCategory", (newCategory) => {
      toast.success(`New Category registered: ${newCategory.name}`);
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    });

    connection.on("updatedCategory", (updatedCategory) => {
      toast.info(`category updated: ${updatedCategory.name}`);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === updatedCategory.id ? updatedCategory : category
        )
      );
    });

    connection.on("deletedCategory", (deletedCategoryId) => {
      toast.info(`Category deleted: ${deletedCategoryId.name}`);
      setCategories((prevCategories) =>
        prevCategories.filter(
          (category) => category.id !== deletedCategoryId.id
        )
      );
    });
    //job
    connection.on("createdJob", (newJob) => {
      toast.success(`New Job registered: ${newJob.title}`);
      setJobs((prevJobs) => [...prevJobs, newJob]);
    });

    connection.on("updatedJob", (updatedJob) => {
      toast.info(`Job updated: ${updatedJob.title}`);
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
      );
    });

    connection.on("deletedJob", (deletedJobId) => {
      toast.info(`Job deleted: ${deletedJobId.title}`);
      setJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== deletedJobId.id)
      );
    });

    //application
    connection.on("createdApplication", (newApplication) => {
      toast.success(`New Application registered: ${newApplication.id}`);
      setApplications((prevApplications) => [
        ...prevApplications,
        newApplication,
      ]);
    });

    connection.on("updatedApplication", (updatedApplication) => {
      toast.info(`Application updated: ${updatedApplication.id}`);
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === updatedApplication.id ? updatedApplication : app
        )
      );
    });

    connection.on("deletedApplication", (deletedApplicationId) => {
      toast.info(`Application deleted: ${deletedApplicationId.id}`);
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app.id !== deletedApplicationId.id)
      );
    });

    return () => {
      //user
      connection.off("createdUser");
      connection.off("updatedUser");
      connection.off("deletedUser");
      //category
      connection.off("createdCategory");
      connection.off("updatedCategory");
      connection.off("deletedCategory");
      //job
      connection.off("createdJob");
      connection.off("updatedJob");
      connection.off("deletedJob");
      //application
      connection.off("createdApplication");
      connection.off("updatedApplication");
      connection.off("deletedApplication");
    };
  }, [
    AddUser,
    ModifyUser,
    RemoveUser,
    AddCategory,
    ModifyCategory,
    RemoveCategory,
    AddJob,
    ModifyJob,
    RemoveJob,
    AddApplication,
    ModifyApplication,
    RemoveApplication,
  ]);

  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      <CustomToastContainer />
      {/* <Spinner /> */}
      <div className="sidebar pe-4 pb-3 bg-grayE8">
        <Sidebar />
      </div>

      <div className="content tab-content">
        <Navbar showMessages={showMessages} setShowMessages={setShowMessages} />
        <div className="container-fluid">
          <div className=" row">
            <div className="tab-content col">
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
                  employers={employers}
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
            {showMessages ? (
              <div className="col-md-3 bg-grayE8">
                <AdminChatNav users={users} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
