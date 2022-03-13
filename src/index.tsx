import "./style/index.less";

import LogUtils from "d-utils/lib/logUtils";
import PF from "d-utils/lib/performanceUtils";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CONSOLE_BGS, CONSOLE_TEXT } from "./config/constance";
import selfEvent from "./utils/event";
import { initPageMode } from "./utils/utils";

PF.logger();
/**
 * 控制台打印
 */
LogUtils.logBeauty(CONSOLE_TEXT, {
  isMax: true,
  colors: CONSOLE_BGS
});

selfEvent.addVisiblityChange();

ReactDOM.render(
  <div id="liziyuan-react-web-container" className={initPageMode()}>
    <App />
  </div>,
  document.getElementById("root")
);
