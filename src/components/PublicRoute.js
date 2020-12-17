/*
  Ini komponen PublicRoute, tujuannya kalo misal user udah login terus ada Route yang 
  restricted, nanti dia redirect ke halaman dashboard (Misal kalo aku masuk halaman login padal
    udah login)
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
