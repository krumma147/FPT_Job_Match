import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./pages/Home/home";
import SignupView from "./pages/Auth/Sign-up/SignupView";
import SignInView from "./pages/Auth/Sign-in/SignInView";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AdminMainPage from "./pages/Admin/AdminMainPage";
import ListJob from "./pages/Home/ListJob/ListJob";
import JobDetail from "./pages/Home/JobDetail/JobDetail";
import Profile from "./pages/Home/Profile/Profile";
import PostNews from "./pages/Home/PostNews/PostNews";
import JobSeeker from "./pages/Home/JobSeeker/JobSeeker";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/signup" exact component={SignupView} />
        <Route path="/signin" exact component={SignInView} />
        <Route path="/admin" exact component={AdminMainPage} />
        <Route path="/joblist" exact component={ListJob} />
        <Route path="/jobDetail" exact component={JobDetail} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/postnews" exact component={PostNews} />
        <Route path="/jobseeker" exact component={JobSeeker} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
