import React from "react";
import { Switch, Route } from "react-router-dom";
import { AboutPage, SkillsPage, HomePage, ConnectPage } from "../pages/index";
import ROUTINGS from "./routings";

const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTINGS.ABOUT}>
        <AboutPage />
      </Route>
      <Route exact path={ROUTINGS.SKILLS}>
        <SkillsPage />
      </Route>
      <Route exact path={ROUTINGS.CONNECT}>
        <ConnectPage />
      </Route>
      <Route exact path={ROUTINGS.HOME}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Router;
