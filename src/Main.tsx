import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/index";
import Notice from "./components/Notice";
import { TIP_INFO } from "./config/constance";
import { Blog, Home, Order } from "./config/loadable";
// interface IMainProps {
//   prefixClass?: string;
//   history?: any;
// }

const Main = () => {
  useEffect(() => {
    Notice.default(TIP_INFO.FIRST_INFO);
  });
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/blog" component={Blog} />
          <Redirect from="/*" to="/home" strict exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Main;
