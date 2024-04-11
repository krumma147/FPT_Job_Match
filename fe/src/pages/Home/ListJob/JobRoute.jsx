import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListJob from "./ListJob";
import JobDetail from "../JobDetail/JobDetail";
import JobDetailTest from "./JobDetailTest";

const JobRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/jobs/:id" exact component={JobDetailTest} />
        <Route path="/jobs" exact component={ListJob} />
      </Switch>
    </BrowserRouter>
  );
};

export default JobRoute;
