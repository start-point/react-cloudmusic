import React from "react";
import classNames from "classnames";
import { PROJECT_NAME } from "@/config/constance";
type Props = {};

export default function index({}: Props) {
  const classString = classNames({
    [`${PROJECT_NAME}-order`]: true,
    [`liziyuan-page-router`]: true,
  });

  return <div className={classString}>订制开发中...</div>;
}
