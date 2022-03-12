import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, Order, Blog } from "@/config/loadable";
import Nav from "@/components/Nav/index";
import Notice from "@/components/Notice";
import { TIP_INFO } from "@/config/constance";
interface IMainProps {
  prefixClass?: string;
  history?: any;
}

const Main = (props: IMainProps) => {
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
