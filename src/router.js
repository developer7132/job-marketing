import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layouts";

import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { JobsPage } from "./pages/JobsPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/jobs" component={JobsPage}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
