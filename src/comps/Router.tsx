import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/Error404";
import { WhoAmIPage } from "./pages/who/WhoAmIPage";

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/who/" component={WhoAmIPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
