import { pathArrayToPoints } from "./utils";

class Layout {
  constructor(obj, img) {
    this.id = obj.name;
    this.name =
      obj.prettyName !== undefined
        ? obj.prettyName
        : obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
    this.official = obj.official !== undefined ? obj.official : false;
    this.image = img;
    this.greenhouse = obj.greenhouse;
    this.house = obj.house;
    if (obj.restrictionPath) {
      this.restrictionPaths = obj.restrictionPath.map(rp =>
        pathArrayToPoints(rp)
      );
    }
    if (obj.buildingRestrictionPath) {
      this.buildingRestrictionPaths = obj.buildingRestrictionPath.map(brp =>
        pathArrayToPoints(brp)
      );
    }
    this.width = obj.width;
    this.height = obj.height;
    this.url = obj.url;
    this.avatar = obj.avatar;
  }
}

export default Layout;
