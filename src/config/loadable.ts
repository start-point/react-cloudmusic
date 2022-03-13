import Loadable from "react-loadable";
import Loading from "@/components/Loading";

/**
 * 个性推荐/发现页面
 */
export const Home = Loadable({
  loader: () => import("@/pages/Home"),
  loading: Loading
});

/**
 * 专属定制
 */
export const Order = Loadable({
  loader: () => import("@/pages/Order"),
  loading: Loading
});

/**
 * 全局组件 顶部导航栏/侧边导航栏
 */
export const Nav = Loadable({
  loader: () => import("@/components/Nav"),
  loading: Loading
});

/**
 * aside  左侧
 */

export const Blog = Loadable({
  loader: () => import("@/pages/Blog"),
  loading: Loading
});
