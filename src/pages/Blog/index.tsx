import React from "react";
import classNames from "classnames";
import { PROJECT_NAME } from "@/config/constance";
type Props = {};

const index = (props: Props) => {
  const classString = classNames({
    [`${PROJECT_NAME}-blog`]: true,
    [`liziyuan-page-router`]: true,
  });
  return <div className={classString}>blog 正在开发中...</div>;
};

export default index;
