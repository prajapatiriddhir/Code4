import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./login";
import DashboardPage from "./dashboard";
import { PrivateRoute } from "./private-route";

export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}
