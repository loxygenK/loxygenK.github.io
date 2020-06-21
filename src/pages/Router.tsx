import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
