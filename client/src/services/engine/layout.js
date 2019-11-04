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
  getHousePosition = tilesize => {
    return {
      x: this.house.x * tilesize,
      y: this.house.y * tilesize
    };
  };
  getGreenhousePosition = tilesize => {
    return {
      x: this.greenhouse.x * tilesize,
      y: this.greenhouse.y * tilesize
    };
  };
  getGridSize = tilesize => {
    return {
      x: Math.floor(this.width / tilesize),
      y: Math.floor(this.height / tilesize)
    };
  };

  drawPathRestrictions = (ctx, { x, y }, lineWidth = 1, rColor = "#a52a2a", rbColor = "red", alpha = 0.8) => {
    let oldAlpha = ctx.globalAlpha;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = rColor;

    this.restrictionPaths.forEach(paths => {
      ctx.beginPath();
      paths.forEach((path, index) => {
        const pos = {
          x: path[0] + x,
          y: path[1] + y
        };
        if (index === 0) {
          ctx.moveTo(pos.x, pos.y);
        } else {
          ctx.lineTo(pos.x, pos.y);
        }
      });
      ctx.lineTo(paths[0][0] + x, paths[0][1] + y);
      ctx.stroke();
      ctx.closePath();
    });
    ctx.strokeStyle = rbColor;

    this.buildingRestrictionPaths.forEach(paths => {
      ctx.beginPath();
      paths.forEach((path, index) => {
        const pos = {
          x: path[0] + x,
          y: path[1] + y
        };
        if (index === 0) {
          ctx.moveTo(pos.x, pos.y);
        } else {
          ctx.lineTo(pos.x, pos.y);
        }
      });
      ctx.lineTo(paths[0][0] + x, paths[0][1] + y);
      ctx.stroke();
      ctx.closePath();
    });
    ctx.globalAlpha = oldAlpha;
  };
}

export default Layout;
