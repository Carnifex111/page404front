import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AboutPage,
  SkillsPage,
  HomePage,
  ConnectPage,
  PortfolioPage,
} from "../pages/index";
import ROUTINGS from "./routings";

const Router = () => {
  const { PORTFOLIO, ABOUT, SKILLS, CONNECT, HOME } = ROUTINGS;
  return (
    <Switch>
      <Route exact path={ABOUT}>
        <AboutPage />
      </Route>
      <Route exact path={SKILLS}>
        <SkillsPage />
      </Route>
      <Route exact path={CONNECT}>
        <ConnectPage />
      </Route>
      <Route exact path={PORTFOLIO}>
        <PortfolioPage />
      </Route>
      <Route exact path={HOME}>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Router;
