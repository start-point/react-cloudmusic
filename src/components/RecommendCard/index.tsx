import "./recommend.less";

import React from "react";
interface ILoadingTips {
  personalized: any[] | undefined;
}

const RecommendCard = (props: ILoadingTips) => {
  return (
    <div className="recommend-wrap">
      {props.personalized &&
        props.personalized.map((v, i) => (
          <div className="recommend-card" key={v + i}>
            <div className="recommend-list">
              <img src={v.picUrl} alt="图片暂无" />
            </div>
            <span className="text-over">{v.name}</span>
          </div>
        ))}
    </div>
  );
};

export default RecommendCard;
