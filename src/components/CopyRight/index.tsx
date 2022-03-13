import "./copy_right.less";

import classNames from "classnames";
import { formatDate } from "d-utils/lib/genericUtils";
import React from "react";

import { PROJECT_NAME } from "@/config/constance";
// import { Link } from 'react-router-dom';

const CopyRight: React.FC = () => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-copy-right`]: true
  });

  return (
    <div className={classString}>
      <span className={`${classString}-info list`}>
        © 2022 - {formatDate("yyyy", new Date())} from 李子园ye
      </span>
      {/* <span className="list split"> | </span> */}
    </div>
  );
};
export { CopyRight };
