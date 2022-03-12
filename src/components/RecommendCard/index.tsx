import React from "react";
import "./recommend.less";
interface ILoadingTips {
  personalized: any[] | undefined;
}

const RecommendCard = (props: ILoadingTips) => {
  console.log(props.personalized, "personalized..");
  return (
    <div className="recommend-wrap">
      {props.personalized &&
        props.personalized.map((v) => (
          <div className="recommend-card">
            <div className="recommend-list">
              <img src={v.picUrl} />
            </div>
            <span className="text-over">{v.name}</span>
          </div>
        ))}
    </div>
  );
};

export default RecommendCard;
