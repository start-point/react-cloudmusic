import { action, observable } from "mobx";

export default class ColorModel {
  @observable
  mode: string = "light";

  @action
  changeMode(mode?: string) {
    if (mode) {
      this.mode = mode;
      return;
    }
    this.mode = this.mode === "light" ? "dark" : "light";
  }
}
