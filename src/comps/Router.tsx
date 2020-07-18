import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/Error404";
import { WhoAmIPage } from "./pages/who/WhoAmIPage";

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/who" component={WhoAmIPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
