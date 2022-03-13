import { action, observable, runInAction } from "mobx";

import { getSheetLists } from "@/server";
export default class MusicStore {
  @observable
  MusicBanner: any[] = [];

  /**
   * banner 轮播图数据
   */
  @action.bound
  BannerList() {
    runInAction(async () => {
      const data: any = await getSheetLists();
      if (data && data.code === 200) {
        this.MusicBanner = data.banners;
      }
    });
  }
}
