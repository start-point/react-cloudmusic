import "./nav.less";

import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";

import { CopyRight } from "@/components/CopyRight";
import { PROJECT_NAME, WEBSITE_TITLE } from "@/config/constance";
import { INavList } from "@/config/nav";
import { useStore } from "@/hooks/use";
// interface INavProps {
//   location?: any;
// }

/**
 * 顶部/侧边栏 组件
 */
const Nav = observer(() => {
  const nav = useStore().navStore;
  const lists = nav.lists;
  const asidelists = nav.asidelists;

  const classString = classNames({
    [`${PROJECT_NAME}-nav`]: true
  });

  return (
    <>
      <nav className={classString}>
        <div className="nav-content">
          <div className="nav-logo">
            <h2 className="nav-title">
              <NavLink to="/home">{WEBSITE_TITLE}</NavLink>
            </h2>
          </div>
        </div>
        <div className="nav-lists">
          {lists.slice().map((item: INavList) => {
            return (
              <NavLink
                className="nav-list"
                to={item.link}
                key={item.key}
                onClick={() => nav.setNavLists(item.type)}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
      <div className="nav-aside">
        {asidelists.slice().map((item: INavList) => {
          return (
            <NavLink
              className="nav-aside-list"
              to={item.link}
              key={item.key}
              onClick={() => nav.setAsideNavLists(item.type)}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <CopyRight />
    </>
  );
});

export default Nav;
