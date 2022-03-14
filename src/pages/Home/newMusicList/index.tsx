import "./newmusiclist.less";

import React, { useEffect, useState } from "react";

import { getPersonalizedNewsong } from "@/server";
const NewMusicList = () => {
  const [musicList, setMusicList] = useState<any[]>();

  useEffect(() => {
    const func = async () => {
      const data = await getPersonalizedNewsong({
        limit: 12
      });
      if (data.code === 200) {
        setMusicList(data.result);
      }
    };
    func();
  }, []);

  return (
    <div className="liziyuan-newmusic-list">
      <p>最新音乐{">"}</p>
      <div className="liziyuan-newmusic-list-container">
        {musicList &&
          musicList.map((v) => (
            <div className="liziyuan-newmusic-list-wrap" key={v.id}>
              <div className="music-list-img">
                <div className="img-pic">
                  <img className="img-url" src={v.picUrl} alt="暂无图片" />
                </div>
              </div>
              <div className="music-list-text">
                <p>{v.name}</p>
                <p>{v.song.artists[0].name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewMusicList;
