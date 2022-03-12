import classNames from "classnames";
import { PROJECT_NAME } from "@/config/constance";
import React, { useEffect, useState } from "react";
import { SlideShow } from "@/components/SlideShow";
import { observer } from "mobx-react-lite";
import { getSheetLists } from "@/server";
import RecommendList from "./recommendList";
interface IHomeProps {}

/**
 * 首页 组件
 * @param props
 * @returns
 */
const Home = observer((props: IHomeProps) => {
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
    [`liziyuan-page-router`]: true,
  });
  return (
    <div className={classString}>
      <SlideShow bannerList={bannerList} />
      <RecommendList />
    </div>
  );
});

export default Home;
