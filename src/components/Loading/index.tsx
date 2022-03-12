import React from "react";
import "./loading.less";

interface ILoadingProps {
  tip?: string;
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}

const Loading = (props: ILoadingProps) => {
  return <div className="loadable-loading">loading ...</div>;
};

// Loading.defaultProps = {
//   tip: "loading ...",
// };

export default Loading;
