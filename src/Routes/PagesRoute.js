// import React from "react";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import RadarPage from "../pages/RadarPage";
import BarPage from "../pages/BarPage";
import Nav from "../components/Nav";
import { Modules } from "../util/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
function Routers() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>

          <Route path="/radar">
            <RadarPage />
          </Route>
          <Route path="/bar">
            <BarPage />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Routers;
