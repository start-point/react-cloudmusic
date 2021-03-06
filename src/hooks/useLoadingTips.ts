import { useState } from "react";

interface IuseLoadingTips {
  /** 是否显示 提示信息 */
  loading: boolean;

  /** 提示信息的文字信息 */
  text: string;

  /** 显示LoadingTips 可以设置文字 可选 */
  // eslint-disable-next-line no-unused-vars
  showLoading: (text?: string) => void;

  /** 关闭 */
  hideLoading(): void;
}

/**
 * 控制显示LoadingTips的组件
 * 依赖于LoadingTips组件
 */
export const useLoadingTips = (
  state: boolean = false,
  text: string = "loading..."
): IuseLoadingTips => {
  const [loading, setLoading] = useState(state);
  const [loadingText, setLoadingText] = useState(text);

  function showLoading(text?: string) {
    // eslint-disable-next-line no-unused-vars
    setLoading((_loading) => (_loading = true));
    // eslint-disable-next-line no-unused-vars
    text && setLoadingText((_loadingText) => (_loadingText = text));
  }

  function hideLoading() {
    // eslint-disable-next-line no-unused-vars
    setLoading((__loading) => (__loading = false));
  }

  return {
    loading,
    text: loadingText,
    showLoading,
    hideLoading
  };
};
