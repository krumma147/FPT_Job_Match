import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./pages/Home/home";
import SignupView from "./pages/Auth/Sign-up/SignupView";
import SignInView from "./pages/Auth/Sign-in/SignInView";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AdminMainPage from "./pages/Admin/AdminMainPage";
import JobRoute from "./pages/Home/ListJob/JobRoute";
import Profile from "./pages/Home/Profile/Profile";
import PostNews from "./pages/Home/PostNews/PostNews";
import JobSeeker from "./pages/Home/JobSeeker/JobSeeker";
import JobDetail from "./pages/Home/JobDetail/JobDetail";
import { Callback } from "./pages/Auth/Callback";
import { checkAccess, checkAuth } from "./pages/Auth/Auth";
import { Redirect } from 'react-router-dom';

function AdminRoute({ component: Component, ...rest }) {
  const canAccess = checkAccess(['Admin']);
  return (
    <Route
      {...rest}
      render={props =>
        canAccess ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location, noAccess: true, redirected: true } }} />
        )
      }
    />
  );
}

function EmployerRoute({ component: Component, ...rest }) {
  const canAccess = checkAccess(['Employer']);
  return (
    <Route
      {...rest}
      render={props =>
        canAccess ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location, noAccess: true, redirected: true } }} />
        )
      }
    />
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = checkAuth();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location, noAccess: true, redirected: true } }} />
        )
      }
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/signup" exact component={SignupView} />
        <Route path="/signin" exact component={SignInView} />
        <AdminRoute path="/admin" exact component={AdminMainPage} />
        <Route path="/jobs" exact component={JobRoute} />
        <Route path="/jobDetail/:id" exact component={JobDetail} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <EmployerRoute path="/postnews" exact component={PostNews} />
        <EmployerRoute path="/jobseeker" exact component={JobSeeker} />
        <Route path="/callback" exact component={Callback} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
