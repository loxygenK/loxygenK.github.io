import * as React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/Error404";
import { WhoAmIPage } from "./pages/who/WhoAmIPage";

export function AppRouter(): JSX.Element {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/who" component={WhoAmIPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </HashRouter>
  );
}
