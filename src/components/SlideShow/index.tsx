import React, { useEffect, useState, useRef } from "react";
import "./slideshow.less";

const SlideShow = (props: any) => {
  const clsRef = useRef(["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"]);
  const dotsRef = useRef(["change", "", "", "", "", "", "", ""]);

  const [dots, setDots] = useState([""]);
  const [cls, setCls] = useState([""]);

  useEffect(() => {
    setCls([...clsRef.current]);
    setDots([...dotsRef.current]);
    const time = setInterval(() => {
      const clsTmp = [...clsRef.current];
      const dotsTmp = [...dotsRef.current];
      let tmp = String(clsTmp.pop());
      clsTmp.unshift(tmp);
      let dotTmp = String(dotsTmp.pop());
      dotsTmp.unshift(dotTmp);
      setCls(clsTmp);
      setDots(dotsTmp);
      clsRef.current = clsTmp;
      dotsRef.current = dotsTmp;
    }, 3000);
    return () => clearInterval(time);
  }, []);

  return (
    <div className="box">
      <ul className="imgs">
        {props.bannerList &&
          props.bannerList.map((v: any, i: number) => {
            return (
              <li className={cls[i]}>
                <img src={v.imageUrl} />
              </li>
            );
          })}
      </ul>
      <ul className="list">
        <li className={dots[0]}></li>
        <li className={dots[1]}></li>
        <li className={dots[2]}></li>
        <li className={dots[3]}></li>
        <li className={dots[4]}></li>
        <li className={dots[5]}></li>
        <li className={dots[6]}></li>
        <li className={dots[7]}></li>
      </ul>
    </div>
  );
};

export { SlideShow };
