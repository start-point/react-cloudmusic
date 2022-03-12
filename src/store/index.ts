import ColorModel from "./models/color";
import NavModel from "./models/nav";
import Music from "./models/music";

const store: any = {
  colorStore: new ColorModel(),
  navStore: new NavModel(),
  musicStore: new Music(),
};
export default store;
