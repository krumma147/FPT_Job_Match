import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./pages/Home/home";
import SignupView from "./pages/Sign-up/SignupView";
import SignInView from "./pages/Sign-in/SignInView";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AdminMainPage from "./pages/Admin/AdminMainPage";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/signup" exact component={SignupView} />
        <Route path="/signin" exact component={SignInView} />
        <Route path="/admin" exact component={AdminMainPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
