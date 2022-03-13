import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import { SlideShow } from "@/components/SlideShow";
import { PROJECT_NAME } from "@/config/constance";
import { getSheetLists } from "@/server";

import RecommendList from "./recommendList";

/**
 * 首页 组件
 * @param props
 * @returns
 */
const Home = observer(() => {
  const [bannerList, setBannerList] = useState<[]>();
  useEffect(() => {
    const list = async () => {
      const data: any = await getSheetLists();
      if (data && data.code === 200) {
        setBannerList(data.banners);
      }
    };
    list();
  }, []);

  const classString = classNames({
    [`${PROJECT_NAME}-home`]: true,
    [`liziyuan-page-router`]: true
  });
  return (
    <div className={classString}>
      <SlideShow bannerList={bannerList} />
      <RecommendList />
      <div className="asfsafsa" />
    </div>
  );
});

export default Home;
