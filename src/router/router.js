import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AboutPage, SkillsPage, HomePage, Page404, ConnectPage} from '../pages/index'


const Router = () => {
    return(
        <Switch>
            <Route exact path="/about">
                <AboutPage />
            </Route>
            <Route exact path="/skills">
                <SkillsPage />
            </Route>
            <Route exact path="/connect">
                <ConnectPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default Router;