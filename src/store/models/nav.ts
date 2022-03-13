import { observable, action } from 'mobx';
import { INavLists, AsideNav, NavList } from '@/config/nav'; //MusicNav
export default class ColorModel {
  @observable
  lists: INavLists = NavList;

  @observable
  asidelists: INavLists = AsideNav;

  @action.bound
  setNavLists() {
    return (this.lists = NavList);
  }

  @action.bound
  setAsideNavLists() {
    return (this.asidelists = AsideNav);
  }
}
