import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./modules/Home"
const ROUTES = [
    Home,
];
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }
  export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Não encontrado!</h1>} />
      </Switch>
    );
  }  
  
export default ROUTES;
