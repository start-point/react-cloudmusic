import ColorModel from "./models/color";
import Music from "./models/music";
import NavModel from "./models/nav";

const store: any = {
  colorStore: new ColorModel(),
  navStore: new NavModel(),
  musicStore: new Music()
};
export default store;
