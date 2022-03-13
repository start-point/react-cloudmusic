export interface INavList {
  type?: (type: any) => void;
  link: string;
  name: string;
  key: string;
}

export type INavLists = INavList[];

/**
 * 顶部路由菜单
 */
export const NavList: INavLists = [
  {
    name: "个性推荐",
    link: "/home",
    key: "home"
  },
  {
    name: "专属订制",
    link: "/order",
    key: "order"
  }
  // {
  //   name: "歌单",
  //   link: "/home",
  //   key: "home_index",
  // },
  // {
  //   name: "排行榜",
  //   link: "/home",
  //   key: "home_index",
  // },
  // {
  //   name: "歌手",
  //   link: "/home",
  //   key: "home_index",
  // },
  // {
  //   name: "最新音乐",
  //   link: "/home",
  //   key: "home_index",
  // },
];

/**
 * 左侧路由菜单
 */
export const AsideNav: INavLists = [
  {
    name: "发现音乐",
    link: "/home",
    key: "found_music"
  },
  {
    name: "博客",
    link: "/blog",
    key: "blog"
  },
  {
    name: "关注",
    link: "/focus",
    key: "focus"
  },
  {
    name: "直播",
    link: "/live",
    key: "live"
  },
  {
    name: "私人FM",
    link: "/privatefm",
    key: "privatefm"
  }
];
