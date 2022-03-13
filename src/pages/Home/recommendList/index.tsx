import React, { useEffect, useState, memo } from "react";

import { Api } from "@/api";
import LoadingTips from "@/components/LoadingTips";
import RecommendCard from "@/components/RecommendCard";
import { useLoadingTips } from "@/hooks/useLoadingTips";
import { Http } from "@/utils/fetch";

/**
 * 推荐歌单 组件
 * @param props
 * @returns
 */
const RecommendList = () => {
  const [personalized, setPersonalized] = useState<any[]>();
  const loadingTips = useLoadingTips(false, "歌单加载中...");
  useEffect(() => {
    const func = async () => {
      loadingTips.showLoading("歌单加载中...");
      const data: any = await Http.get(Api.MUSIC.MUSIC_PERSONALIZED, {
        limit: 10
      });
      if (data && data.code === 200) {
        setPersonalized(data.result);
        loadingTips.hideLoading();
      }
    };
    func();
  }, []);
  return (
    <div>
      <p>
        <a>推荐歌单 {">"}</a>
      </p>
      <LoadingTips show={loadingTips.loading} text={loadingTips.text} />
      <RecommendCard personalized={personalized} />
    </div>
  );
};

export default RecommendList;
