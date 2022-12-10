import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {AboutPage, SkillsPage, HomePage, Page404, ConnectPage} from '../pages/index'


const Router = () => {
    return(
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default Router;