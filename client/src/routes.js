import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/HOC/layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_login";
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
