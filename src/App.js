/*
  Ini entry point reactnya, disini dipake buat define react router
*/

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { APP_ROUTE } from "./routes";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router>
      <Switch>
        {APP_ROUTE.map((value, index) => {
          return (
            <PublicRoute
              key={value.name}
              restricted={value.restricted}
              path={value.path}
              component={value.component}
              exact={value.exact}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
