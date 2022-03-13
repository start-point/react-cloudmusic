import classNames from "classnames";
import React from "react";

import { PROJECT_NAME } from "@/config/constance";

const Order = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-order`]: true,
    [`liziyuan-page-router`]: true
  });

  return <div className={classString}>订制开发中...</div>;
};
export default Order;
