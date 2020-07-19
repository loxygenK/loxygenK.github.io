import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NotFoundPage } from "./pages/Error404";
import { WhoAmIPage } from "./pages/who/WhoAmIPage";
import { WorksPage } from "./pages/works/WorksPage";

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/who/" component={WhoAmIPage} />
        <Route exact path="/what-i-did/" component={WorksPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
