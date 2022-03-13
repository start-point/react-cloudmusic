import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.less';
import { initPageMode } from './utils/utils';
import selfEvent from './utils/event';
import PF from 'd-utils/lib/performanceUtils';
import LogUtils from 'd-utils/lib/logUtils';
import { CONSOLE_TEXT, CONSOLE_BGS } from './config/constance';

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
  document.getElementById('root')
);
