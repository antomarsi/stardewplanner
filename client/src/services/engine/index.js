import sprites from "../../assets/data/sprites";
import { loadImage, GreenHouseEnum } from "./utils";
import Building from "./building";
import Tile from "./tile";
import layouts from "../../assets/data/layouts";
import Layout from "./layout";

export default class Engine {
  //#region Constructor
  constructor() {
    this.canvas = null;
    this.canvasUI = null;
    this.layout = null;
    this.tileSize = 16;
    this.tiles = [];
    this.buildings = [];
    this.grid = null;
    this.tools = [];
    this.position = {
      x: 0,
      y: 0
    };
    this.scale = 1;
    this.scaleBy = 1.05;
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.highlightPattern = null;

    this.showHighlights = false;
    this.house = true;
    this.greenhouse = GreenHouseEnum.NOT_FIXED;
  }
  //#endregion

  //#region LoadProcesses
  load = (canvas, canvasUI, layoutName, cb) => {
    const callback = msg => {
      cb(msg);
      console.log(msg);
    };
    this.canvas = canvas;
    this.canvasUI = canvasUI;
    this.ctx = this.canvas.getContext("2d");
    this.ctxUI = this.canvas.getContext("2d");
    callback("Loading Layout");
    return this.loadLayout(layoutName)
      .then(layout => {
        this.layout = layout;
        callback("Loading tiles");
        return this.loadTiles();
      })
      .then(tiles => {
        this.tiles = tiles;
        callback("Loading Buildings");
        return this.loadBuildings();
      })
      .then(buildings => {
        this.buildings = buildings;
        return loadImage(`assets/tiles/highlight.png`).then(img => {
          this.highlightPattern = this.ctx.createPattern(img, `repeat`);
        });
      })
      .then(() => {
        callback("Binding Events");
        return this.loadBindings();
      })
      .then(() => {
        callback("Loading Complete");
        requestAnimationFrame(() => this.draw());
      });
  };

  loadBindings = () => {
    return new Promise((resolve, reject) => {
      this.canvasUI.addEventListener("mousemove", this.onMouseMove);
      this.canvasUI.addEventListener("mousedown", this.onMouseDown);
      this.canvasUI.addEventListener("mouseup", this.onMouseUp);
      this.canvasUI.addEventListener("mouseout", this.onMouseOut);
      this.canvasUI.addEventListener("contextmenu", e => e.preventDefault());
      this.canvasUI.addEventListener("wheel", this.onMouseWheel);
      resolve(true);
    });
  };

  loadLayout = layoutName => {
    let layout = layouts[layoutName];
    return loadImage(`assets/layouts/${layout.backgroundImage}`).then(img => {
      return new Layout(layout, img);
    });
  };

  loadBuildings = () => {
    const _this = this;
    let promises = Object.entries(sprites.buildings).map(([key, building]) =>
      loadImage(`assets/${building.sprite}`).then(
        img =>
          new Building(
            _this,
            key,
            img,
            building.width,
            building.height,
            building.highlight
          )
      )
    );
    return Promise.all(promises);
  };

  loadTiles = () => {
    const _this = this;
    let promises = sprites.tiles.map(tile => {
      return loadImage(`assets/tiles/${tile}.png`).then(
        img => new Tile(_this, tile, img, _this.tileSize, _this.tileSize)
      );
    });
    return Promise.all(promises);
  };

  unload() {
    this.tiles.remove();
    this.buildings.remove();
    this.layout.remove();
    cancelAnimationFrame();
  }
  // #endregion
  getBuilding = id => {
    return this.buildings.find(b => b.id === id);
  };

  //#region Mouse Helpers
  getMousePos = e => {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x:
        ((e.clientX - rect.left) / (rect.right - rect.left)) *
        this.canvas.width,
      y:
        ((e.clientY - rect.top) / (rect.bottom - rect.top)) * this.canvas.height
    };
  };

  getMouseGridPos() {
    let mousePointTo = this.MousePointTo();
    const gridCount = this.layout.getGridSize(this.tileSize);
    return {
      x: Math.min(
        Math.max(Math.floor(mousePointTo.x / this.tileSize), 0),
        gridCount.x - 1
      ),
      y: Math.min(
        Math.max(Math.floor(mousePointTo.y / this.tileSize), 0),
        gridCount.y - 1
      )
    };
  }

  MousePointTo = () => {
    return {
      x: this.mousePosition.x / this.scale - this.position.x,
      y: this.mousePosition.y / this.scale - this.position.y
    };
  };
  //#endregion

  //#region Draw Processes
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.clear();
    this.ctx.save();
    const { x1, y1 } = this.MousePointTo();
    this.ctx.translate(x1, y1);
    this.ctx.scale(this.scale, this.scale);
    const { x2, y2 } = this.MousePointTo();
    this.ctx.translate(-x2, -y2);
    this.drawMap();
    this.ctx.restore();
    this.drawHelpers();
    requestAnimationFrame(() => this.draw());
  }

  drawMap() {
    this.ctx.drawImage(this.layout.image, this.position.x, this.position.y);
    if (this.house) {
      let house = this.getBuilding("house");
      let { x, y } = this.layout.getHousePosition(this.tileSize);
      this.ctx.drawImage(house.image, this.position.x + x, this.position.y + y);
    }
    if (this.greenhouse !== GreenHouseEnum.NONE) {
      let greenhouse = null;
      if (GreenHouseEnum.NOT_FIXED === this.greenhouse) {
        greenhouse = this.getBuilding("greenhouse");
      } else if (GreenHouseEnum.FIXED === this.greenhouse) {
        greenhouse = this.getBuilding("greenhouse-fixed");
      }
      let { x, y } = this.layout.getGreenhousePosition(this.tileSize);
      this.ctx.drawImage(
        greenhouse.image,
        this.position.x + x,
        this.position.y + y
      );
    }
    this.drawGrid();
  }

  drawGrid() {
    // Draw map grid
    this.ctx.strokeStyle = "#808080";
    this.ctx.lineWidth = 0.5;
    const gridCount = this.layout.getGridSize(this.tileSize);
    for (let x = 0; x < gridCount.x; x++) {
      let pos = this.position.x + x * this.tileSize;
      this.ctx.beginPath();
      this.ctx.moveTo(pos, this.position.y);
      this.ctx.lineTo(pos, this.position.y + this.layout.height);
      this.ctx.stroke();
      this.ctx.closePath();
    }
    for (let y = 0; y < gridCount.y; y++) {
      let pos = this.position.y + y * this.tileSize;
      this.ctx.beginPath();
      this.ctx.moveTo(this.position.x, pos);
      this.ctx.lineTo(this.position.x + this.layout.width, pos);
      this.ctx.stroke();
      this.ctx.closePath();
    }
    // Draw Restriction
    this.layout.drawPathRestrictions(this.ctx, this.position, 1.2);

    //Draw Mouse Tile
    this.ctxUI.beginPath();
    this.ctx.moveTo(this.position.x, this.position.y);
    this.ctxUI.lineWidth = 1;
    this.ctxUI.strokeStyle = "red";
    const gridPos = this.getMouseGridPos();
    this.ctxUI.rect(
      gridPos.x * this.tileSize + this.position.x,
      gridPos.y * this.tileSize + this.position.y,
      this.tileSize,
      this.tileSize
    );
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawHelpers() {
    const mousePointTo = this.MousePointTo();
    // Display mouse position... on the mouse
    this.ctxUI.fillStyle = "#ffffff";
    this.ctxUI.font = "18px SW";
    this.ctxUI.shadowBlur = 4;
    this.ctxUI.shadowOffsetX = 3;
    this.ctxUI.shadowOffsetY = 3;
    this.ctxUI.fillText(
      `MP: ${this.mousePosition.x}, ${this.mousePosition.y}`,
      this.mousePosition.x,
      this.mousePosition.y
    );
    this.ctxUI.fillText(
      `MPTo: ${mousePointTo.x.toFixed(1)}, ${mousePointTo.y.toFixed(1)}`,
      this.mousePosition.x,
      this.mousePosition.y - 20
    );
    // Grid Helper
    const gridPos = this.getMouseGridPos();
    this.ctxUI.font = "48px SW";
    this.ctxUI.fillText(
      `${gridPos.x}, ${gridPos.y}, ${this.position.x}, ${this.position.y}`,
      10,
      50
    );
  }
  //#endregion

  //#region MOUSE EVENTS
  onMouseMove = evt => {
    this.mousePosition = this.getMousePos(evt);
    if (this.moving) {
      this.position.x += evt.movementX / this.scale;
      this.position.y += evt.movementY / this.scale;
    }
  };

  onMouseDown = evt => {
    evt.preventDefault();
    if (evt.button === 2) {
      this.moving = true;
    }
  };

  onMouseUp = evt => {
    evt.preventDefault();
    if (evt.button === 2) {
      this.moving = false;
    }
  };

  onMouseOut = evt => {
    evt.preventDefault();
  };

  onMouseWheel = evt => {
    evt.preventDefault();
    console.log("onMouseWheel");
    var oldScale = this.scale;

    var mousePointTo = this.MousePointTo();
    var newScale =
      evt.deltaY > 0 ? oldScale * this.scaleBy : oldScale / this.scaleBy;
    this.scale = newScale;
  };
  //#endregion
}

// Board.prototype.loadLayout = function loadLayout (layout) {
//     if (this.background) {
//         this.background.remove();
//     }

//     this.background = this.R.image(Board.toFullPath('img/layouts/'+ layout.backgroundImage), 0, 0, layout.width, layout.height);
//     this.background.toFront();

//     if (this.house) {
//         this.house.remove();
//         this.house = null;
//     }

//     if (this.greenhouse) {
//         this.greenhouse.remove();
//         this.greenhouse = null;
//     }

//     if (this.restrictedBuildingArea) {
//         this.restrictedBuildingArea.remove();
//     }

//     if (this.restrictedTillingArea) {
//       this.restrictedTillingArea.remove();
//     }

//     this.restrictedPath = null;
//     this.restrictionCheck = false;

//     // start adding stuff
//     if (layout.restrictionPath) {
//         this.restrictedPath = layout.restrictionPath;
//         this.restrictionCheck = true;
//         // TODO: actually use correct path
//         this.restrictedTillingArea = this.R.path(this.restrictedPath);
//         this.restrictedTillingArea.attr({
//             fill: 'none',
//             stroke: 'brown'
//         });
//     }

//     if (layout.restrictionPath && !layout.buildingRestrictionPath) {
//         layout.buildingRestrictionPath = layout.restrictionPath;
//     }

//     if (layout.buildingRestrictionPath) {
//       this.restrictedBuildingArea = this.R.path(layout.buildingRestrictionPath);
//       this.restrictedBuildingArea.attr({
//         fill: 'none',
//         stroke: 'red'
//       });
//     }

//     if (layout.house) {
//         this.house = new Building(this, 'house', layout.house.x*this.tileSize, layout.house.y*this.tileSize, false, true);
//     }

//     if (layout.greenhouse) {
//         this.greenhouse = new Building(this, 'greenhouse', layout.greenhouse.x*this.tileSize, layout.greenhouse.y*this.tileSize, false, true);
//     }

//     this.layout = layout;
// };

// Board.prototype.toggleGreenhouse = function toggleGreenhouse(forcedState) {
//     if (!this.layout.greenhouse) {
//         return;
//     }

//     var currentGreenhouse = this.greenhouse.type;
//     var newState = (currentGreenhouse == 'greenhouse') ? 'greenhouse-fixed' : 'greenhouse';

//     this.greenhouse.remove();

//     if (forcedState) {
//         newState = forcedState;
//     }

//     this.greenhouse = new Building(this, newState, this.layout.greenhouse.x*this.tileSize, this.layout.greenhouse.y*this.tileSize, false, true);
// };

// Board.prototype.showHighlights = function showHighlights(type) {
//     var board = this;

//     if (type && board.keepHighlights.indexOf(type) === -1) {
//         board.keepHighlights.push(type);
//     }

//     board.buildings.forEach(function (building) {
//         if (board.keepHighlights.indexOf(building.typeGroup) !== -1) {
//             building.moveHighlight();
//         }
//     });
// };

// Board.prototype.hideHighlights = function hideHighlights(type) {
//     var board = this;
//     var index = board.keepHighlights.indexOf(type);
//     if (index >= 0) {
//         board.keepHighlights.splice(board.keepHighlights.indexOf(type), 1);

//         board.buildings.forEach(function (building) {
//             if (building.highlight && board.keepHighlights.indexOf(building.typeGroup) === -1) {
//                 building.highlight.attr('opacity', 0);
//             }
//         });
//     }
// };

// Board.prototype.drawHelpers = function drawHelpers() {
//     var helperAttr = {
//         fill: 'none',
//         pointerEvents: 'none',
//         stroke: '#000',
//         strokeWidth: 0.5,
//         opacity: 1
//     };

//     this.helperX = this.R.rect(0, 0, this.width, this.tileSize);
//     this.helperY = this.R.rect(0, 0, this.tileSize, this.height);

//     this.helperX.attr(helperAttr);
//     this.helperY.attr(helperAttr);
// };

// Board.prototype.moveHelpers = function moveHelpers(pos) {
//     this.helperX.attr({
//         y: pos.y
//     });
//     this.helperY.attr({
//         x: pos.x
//     });
// };

// /**
//  * Deselects building
//  */
// Board.prototype.deselectBuilding = function deselectBuilding() {
//     var board = this;
//     if (board.placingBuilding) {
//         board.removeBuilding(board.placingBuilding);
//     }
// };

// /**
//  * Deletes building from the buildings list
//  * @param building
//  */
// Board.prototype.removeBuilding = function removeBuilding(building) {
//     var board = this;
//     var bIndex = board.buildings.map(function (b) { return (b || {}).uuid; }).indexOf((building || {}).uuid);

//     if (bIndex >= 0) {
//         board.buildings.splice(bIndex, 1);
//     }

//     building.remove();

//     if ((board.placingBuilding || {}).uuid === building.uuid) {
//         board.placingBuilding = null;
//     }
//     window.dispatchEvent(new Event('updateCount'));
// };

// /**
//  * Starts placing building ("picks" it up)
//  * @param id
//  * @param building
//  * @param x
//  * @param y
//  */
// Board.prototype.placeBuilding = function placeBuilding(id, building, x, y) {
//     var board = this;

//     if (building && board.brush.erase) {
//         board.removeBuilding(building);
//         return;
//     }

//     if (!building) {
//         this.deselectBuilding();
//         building = new Building(this, id, (x || 0), (y || 250), true);
//     }

//     board.brush.changeBrush('select');
//     board.placingBuilding = building;
// };

// /**
//  * Brings all buildings to top (uses toBack because it is reverted for snapsvg plugin)
//  */
// Board.prototype.buildingsToTop = function buildingsToTop(e) {
//     // hold buildings on top
//     this.buildings.forEach(function (b) {
//         if (b) {
//             b.sprite.toBack();
//         }
//     });
//     this.buildings.forEach(function (b) {
//         if (b.highlight) {
//             b.highlight.toBack();
//         }
//     });

//     this.helperX.toBack();
//     this.helperY.toBack();
//     this.brush.rect.toBack();
// };

// /**
//  * Handles darg start, if building placing is in action, cancles drag
//  * @param x
//  * @param y
//  * @param e
//  */
// Board.prototype.dragStart = function dragStart(x, y, e) {
//     this.brush.lock();
// };

// /**
//  * Handles drag move event
//  * @param dx
//  * @param dy
//  * @param x
//  * @param y
//  * @param e
//  */
// Board.prototype.dragMove = function dragMove(dx, dy, x, y, e) {
//     if (this.brush.freemode) {
//         var pos = Board.normalizePos(e, this.background.node, this.tileSize);
//         this.drawTile(pos, this.brush.type);
//     } else {
//         this.brush.drag(this.snap(Board.normalizePos(e, this.background.node)));
//     }
// };

// /**
//  * Handles dragEnd event
//  * @param e
//  */
// Board.prototype.dragEnd = function dragEnd(e) {
//     this.brush.move(this.snap(Board.normalizePos(e, this.background.node)));
//     this.brush.unlock();

//     // check if rect happens to be inside of restricted area
//     if (!this.restrictionCheck || ($(e.target).data('custom-type') !== 'building' && (!this.brush.type || !this.checkRestriction(this.restrictedTillingArea, this.brush.rect)))) {
//         this.drawTiles(this.brush.rect, this.brush.type);
//     }

//     this.brush.reset();
//     this.buildingsToTop();
// };

// /**
//  * Handles board mousedown event
//  * @param e
//  */
// Board.prototype.mousedown = function mousedown(e) {
//     var board = this;
//     var pos = Board.normalizePos(e, null, board.tileSize);

//     if (board.ghosting) {

//         if (e.shiftKey) {
//             pos.x += board.tileSize;
//         }

//         if (e.altKey) {
//             pos.y += board.tileSize;
//         }

//         board.ghostPathPoints.push('L'+ pos.x +','+ pos.y);

//         if (board.ghostPath) {
//             board.ghostPath.remove();
//         }

//         var tempPath = 'M'+ board.ghostPathPoints.join('').substring(1);

//         board.ghostPath = board.R.path(tempPath);

//         board.ghostPath.attr({
//             fill: 'none',
//             stroke: 'blue',
//             strokeWidth: 3
//         });
//     }

//     if (board.placingBuilding) {

//         if(this.checkRestriction(this.restrictedBuildingArea, this.placingBuilding.sprite)) {
//             this.removeBuilding(this.placingBuilding);
//             return;
//         }
//         var bIndex = board.buildings.map(function (b) { return (b || {}).uuid; }).indexOf((board.placingBuilding || {}).uuid);
//         var tileX = pos.x/board.tileSize;
//         var tileY = pos.y/board.tileSize;
//         var buildingId = board.placingBuilding.type;

//         board.placingBuilding.move(pos);
//         board.placingBuilding.putDown();

//         // if it is a torch and placed on a fence, we turn the fence into torch-{type}-fence
//         if (board.placingBuilding.type == 'torch' && (board.tiles[tileY] && board.tiles[tileY][tileX] && board.tiles[tileY][tileX].attr('tileType').indexOf('fence') !== -1)) {
//             board.drawTile(pos, 'torch-'+ board.tiles[tileY][tileX].attr('tileType'), true);

//             board.placingBuilding.remove();
//         } else if (bIndex === -1) {
//             board.buildings.push(board.placingBuilding);
//         }

//         board.placingBuilding = null;

//         if (e.ctrlKey || e.metaKey || e.shiftKey) {
//             setTimeout(function () {
//                 board.placeBuilding(buildingId, null, pos.x, pos.y);
//             }, 1);
//             e.preventDefault();
//         } else {
//             board.brush.restoreBrush();
//         }
//         window.dispatchEvent(new Event('updateCount'));
//     }
// };

// /**
//  * Checks if element bbox intersects with path
//  * @param restrictedArea
//  * @param element
//  * @returns {*}
//  */
// Board.prototype.checkPathRestriction = function checkPathRestriction (restrictedArea, element) {
//     var bb = element.getBBox();
//     // you might ask WHY?! but there is a good reason we down-scale the path here:
//     // we don't want edge-to-edge collisions to be detected, so we make the actual testing path smaller
//     var matrix = (Snap.matrix()).scale(0.98, 0.98, bb.x + bb.width / 2, bb.y + bb.height / 2);

//     // also we're going to draw extra paths for even better collision detection
//     var s = {
//         x: bb.x + 4,
//         y: bb.y + 4,
//         x2: bb.x + bb.width - 4,
//         y2: bb.y + bb.height - 4
//     };

//     var extraPaths = [
//         ['M'+ s.x, s.y +'L'+ (s.x2), (s.y2) +'z'],
//         ['M'+ (s.x2), (s.y) +'L'+ (s.x), (s.y2) +'z'],
//         ['M'+ (s.x + bb.width / 2) , (s.y) +'L'+ (s.x + bb.width / 2), (s.y2) +'z']
//     ];
//     var transformPath = Snap.path.map(bb.path.toString(), matrix);
//     transformPath += extraPaths.join('');

//     return Snap.path.intersection(restrictedArea, transformPath.toString()).length > 0;
// };

// /**
//  * Checks if rect is in restrictionPath or not
//  * @param restrictionPath
//  * @param rect
//  */
// Board.prototype.checkRestriction = function checkRestriction (restrictionPath, rect) {
//     if (!this.restrictionCheck) {
//         return false;
//     }

//     var data = {};
//     if (rect.type) {
//         data = {
//             x: +rect.attr('x') + 1,
//             y: +rect.attr('y') + 1,
//             width: +rect.attr('width') - 2,
//             height: +rect.attr('height') - 2
//         };
//     } else {
//         data = {
//             x: +rect.x + 1,
//             y: +rect.y + 1,
//             width: +rect.width - 2,
//             height: +rect.height - 2
//         };
//     }

//     var points = [
//         { x: data.x, y: data.y},
//         { x: data.x + data.width, y: data.y},
//         { x: data.x, y: data.y + data.height},
//         { x: data.x + data.width, y: data.y + data.height}
//     ];

//     return points.some(function (p) {
//         return Snap.path.isPointInside(restrictionPath, p.x, p.y);
//     });
// };

// /**
//  * Handles mouse movement over the background (considered to be our "canvas")
//  * @param e
//  */
// Board.prototype.mousemove = function mousemove(e) {
//     if (this.placingBuilding) {

//         if(this.checkRestriction(this.restrictedBuildingArea, this.placingBuilding.getBBox())) {
//             // sorry, can't build here
//             // TODO: I like red. Try to figure out how to use red here
//             this.placingBuilding.sprite.attr({
//                 opacity: .2
//             });
//         } else {
//             // build away
//             this.placingBuilding.sprite.attr({
//                 opacity: .7
//             });
//         }

//         this.placingBuilding.move(Board.normalizePos(e, null, this.tileSize));
//     }

//     // show pos
//     var snappedPos = Board.normalizePos(e, null, this.tileSize);
//     this.positionHelpers[0].attr({
//         'text': 'Y: '+ (+snappedPos.y / this.tileSize) +' ('+ (+snappedPos.y) +')',
//         'y': snappedPos.y - 16,
//         'x': snappedPos.x - 3*16
//     }).toBack();
//     this.positionHelpers[1].attr({
//         'text': 'X: '+ (+snappedPos.x / this.tileSize) +' ('+ (+snappedPos.x) +')',
//         'y': snappedPos.y,
//         'x': snappedPos.x - 3*16
//     }).toBack();

//     //move the brush
//     this.brush.move(snappedPos);

//     // move helpers
//     this.moveHelpers(snappedPos);
// };

// /**
//  * Handles key presses
//  * @param e
//  */
// Board.prototype.keydown = function keydown(e) {
//     // 'Del'
//     if (e.which == 46) {
//         this.deselectBuilding();
//     }

//     // 'E' for eraser
//     if (e.which === 69) {
//         this.deselectBuilding();

//         if (!this.brush.erase) {
//             this.brush.changeBrush('eraser');
//         } else {
//             this.brush.restoreBrush();
//         }
//     }

//     // 'S' for select tool
//     if (e.which === 83) {
//         this.deselectBuilding();

//         if (!this.brush.type && !this.brush.erase) {
//             this.brush.restoreBrush();
//         } else {
//             this.brush.changeBrush('select');
//         }
//     }

//     // 'w' for highlights
//     if (e.which === 87) {
//         this.highlightsState = [].concat(this.keepHighlights);

//         this.showHighlights('sprinkler');
//         this.showHighlights('scarecrow');
//         this.showHighlights('hive');
//         this.showHighlights('junimo');
//     }

//     // 'Esc'
//     if (e.which === 27) {
//         if (this.placingBuilding) {
//             this.deselectBuilding();
//             this.brush.restoreBrush();
//         }

//         this.brush.unlock();
//         this.brush.reset();
//     }

//     e.stopPropagation();
// };

// /**
//  * Keyup handler
//  * @param e
//  */
// Board.prototype.keyup = function keyup(e) {
//     // 'w' for highlights
//     if (e.which === 87) {

//         if (this.highlightsState.indexOf('sprinkler') === -1) {
//             this.hideHighlights('sprinkler');
//         }

//         if (this.highlightsState.indexOf('scarecrow') === -1) {
//             this.hideHighlights('scarecrow');
//         }

//         if (this.highlightsState.indexOf('hive') === -1) {
//             this.hideHighlights('hive');
//         }

//         if (this.highlightsState.indexOf('junimo') === -1) {
//             this.hideHighlights('junimo');
//         }
//     }
// };

// /**
//  * Snaps the given x,y obj to closest point
//  * @param pos
//  */
// Board.prototype.snap = function snap(pos) {
//     return {
//         x: Math.floor(pos.x / this.tileSize) * this.tileSize,
//         y: Math.floor(pos.y / this.tileSize) * this.tileSize
//     }
// };

// /**
//  * Normalizes position for all browsers
//  * @param e
//  * @newTarget
//  * @snap
//  * @returns {{x: number, y: number}}
//  */
// Board.normalizePos = function normalizePos(e, newTarget, snap) {
//     var target = (newTarget || e.currentTarget);
//     var rect = target.getBoundingClientRect();
//     var offsetX = e.clientX - rect.left;
//     var offsetY = e.clientY - rect.top;

//     if (snap) {
//         offsetX = Math.floor(offsetX / snap) * snap;
//         offsetY = Math.floor(offsetY / snap) * snap;
//     }

//     return {
//         x: offsetX,
//         y: offsetY
//     }
// };

// /**
//  * Draws tiles to given area or location
//  * @param area {R.rect|{x,y}}
//  * @param tile
//  */
// Board.prototype.drawTiles = function drawTiles(area, tile) {
//     // first we check path restriction
//     if (this.restrictionCheck && this.brush.type && this.checkPathRestriction(this.restrictedTillingArea, area)) {
//         return;
//     }

//     // we are drawing to an area (most likely from a brush)
//     if (area.type === 'rect') {

//         // Note: Could draw areas of tiles as rects with fill to url(#)
//         // but then there is problem with deleting them

//         var areaData = {
//             x: +area.attr('x'),
//             y: +area.attr('y'),
//             width: +area.attr('width'),
//             height: +area.attr('height')
//         };

//         // loop this area and draw tiles on every square
//         for (var y = areaData.y;y < areaData.y + areaData.height;y += this.tileSize) {
//             for (var x = areaData.x;x < areaData.x + areaData.width;x += this.tileSize) {
//                 this.drawTile({
//                     x: x,
//                     y: y
//                 }, tile);
//             }
//         }

//         window.dispatchEvent(new Event('updateCount'));
//         return;
//     }

//     // not area, just draw this one tile to location
//     this.drawTile(area, tile);
//     window.dispatchEvent(new Event('updateCount'));
// };

// /**
//  * Draws tile to given location, also does all the checking work
//  * @param location
//  * @param tile
//  * @param replace
//  * @return {*}
//  */
// Board.prototype.drawTile = function drawTile(location, tile, replace) {
//     var hardX = location.x / this.tileSize;
//     var hardY = location.y / this.tileSize;

//     if (!this.tiles[hardY]) {
//         this.tiles[hardY] = [];
//     }

//     if (tile === 'select') {
//         return;
//     }

//     if (this.tiles[hardY][hardX]) {
//         // there seems to be a tile in place here already, remove it

//         if (!this.brush.overwriting && !this.brush.erase && !replace) {
//             return;
//         } else {
//             this.tiles[hardY][hardX].remove();
//             this.tiles[hardY][hardX] = null;

//             if (this.brush.erase) {
//                 return;
//             }
//         }
//     }

//     if (tile) {
//         var newTile = this.R.use(tile);
//         newTile.attr({
//             x: location.x,
//             y: location.y,
//             tileType: tile,
//             pointerEvents: 'none'
//         });

//         this.tiles[hardY][hardX] = newTile;

//         return newTile;
//     }
// };

// /**
//  * Draws grid. This is just to visually ease planning
//  * Uses path tag in pattern tag and full width/height rect to fill the grid. Disables mouseEvents on the fill rect
//  */
// Board.prototype.drawGrid = function drawGrid() {
//     var oneGridBlock = this.R.path('M 16 0 L 0 0 0 16');

//     oneGridBlock.attr({
//         fill: 'none',
//         stroke: 'grey',
//         strokeWidth: .5
//     });

//     var pattern = oneGridBlock.toPattern(0, 0, 16, 16);
//     pattern.attr({
//         id: 'grid'
//     });

//     this.grid = this.R.rect(0, 0, this.width, this.height);
//     this.grid.attr({
//         fill: 'url(#grid)',
//         pointerEvents: 'none'
//     });
// };

// /**
//  * Inserts all our sprites to defs
//  */
// Board.prototype.preDrawSprites = function preDrawSprites() {
//     data.tiles.forEach(function (tile) {
//         var tileImage = this.R.image(Board.toFullPath('img/tiles/'+ tile +'.png'), 0, 0, this.tileSize, this.tileSize);
//         tileImage.attr({
//             id: tile
//         });

//         tileImage.toDefs();
//     }.bind(this));

//     Object.keys(data.buildings).forEach(function (b) {
//         var building = data.buildings[b];
//         var buildingImage = this.R.image(Board.toFullPath(building.sprite), 0, 0, building.width, building.height);
//         buildingImage.attr({
//             id: b
//         });

//         buildingImage.toDefs();
//     }.bind(this));
// };

// /**
//  * Exports data to JSON string
//  */
// Board.prototype.exportData = function exportData() {
//     var farmData = {
//         tiles: [],
//         buildings: []
//     };

//     this.tiles.forEach(function (yTiles) {
//         yTiles.forEach(function (tile) {
//             if (tile) {
//                 var tileData = {
//                     type: tile.attr('tileType'),
//                     y: tile.attr('y'),
//                     x: tile.attr('x')
//                 };

//                 if (tileData) {
//                     farmData.tiles.push(tileData);
//                 }
//             }
//         });
//     });

//     this.buildings.forEach(function (building) {
//         if (!building) {
//             return;
//         }

//         var buildingData = building.convertToData();

//         if (buildingData && buildingData.x && buildingData.y) {
//             farmData.buildings.push(buildingData);
//         }
//     });

//     return farmData;
// };

// /**
//  * Imports farm data
//  * @param data
//  * @param cb
//  */
// Board.prototype.importData = function importData(data, cb) {
//     if (!data) {
//         return;
//     }

//     var board = this;
//     var farmData = data;

//     // import buildings
//     farmData.buildings.forEach(function (building) {
//         // don't import buildings on 0,0
//         if (building.x > 0 || building.y > 0) {
//             board.buildings.push(new Building(board, building.type, building.x, building.y))
//         }
//     });

//     // import tiles
//     farmData.tiles.forEach(function (tile) {
//         board.drawTile(tile, tile.type);
//     });

//     // draw buildings on tops
//     this.buildingsToTop();

//     // show highlights
//     this.showHighlights();

//     if (typeof cb === 'function') {
//         cb();
//     }

//     window.dispatchEvent(new Event('updateCount'));
// };

// /**
//  * Clears the board
//  */
// Board.prototype.clear = function clear() {
//     var board = this;

//     this.tiles.forEach(function (cTiles) {
//         if (cTiles) {
//             cTiles.forEach(function (tile) {
//                 tile.remove();
//             });
//         }
//     });

//     this.tiles = [];

//     this.buildings.forEach(function (building) {
//         building.sprite.remove();

//         if(building.highlight) {
//             building.highlight.remove();
//         }

//     });

//     this.buildings = [];
// };

// /**
//  * Well, you wouldn't believe it, but this function hides stuff
//  */
// Board.prototype.hideStuff = function hideStuff() {
//     var hideMe = {
//         opacity: 0
//     };

//     this.modifiyStuff(hideMe);
// };

// /**
//  * And this function shows the same stuff that was hidden
//  */
// Board.prototype.showStuff = function showStuff() {
//     var showMe = {
//         opacity: 1
//     };

//     this.modifiyStuff(showMe);
// };

// Board.prototype.modifiyStuff = function modifyStuff(attr) {
//     this.helperY.attr(attr);
//     this.helperX.attr(attr);
//     this.grid.attr(attr);
//     this.restrictedBuildingArea.attr(attr);
//     this.restrictedTillingArea.attr(attr);
// };

// /**
//  * Show coordinates
//  */
// Board.prototype.showCoords = function showCoords() {
//     this.positionHelpers.forEach(function (h) {
//         h.attr('opacity', 1);
//     });
// };

// /**
//  * Hide coordinates
//  */
// Board.prototype.hideCoords = function hideCoords() {
//     this.positionHelpers.forEach(function (h) {
//         h.attr('opacity', 0);
//     });
// };

// /**
//  * Converts relative path to absolute (this is needed to be able to save SVG's as images)
//  * @param relativePath
//  * @returns {string}
//  */
// Board.toFullPath = function toFullPath(relativePath) {
//     return window.location.origin + '/planner/'+ relativePath;
// };

// /**
//  * Generates unique uuid
//  * @returns {string}
//  */
// Board.generateGUID = function generateGUID() {
//     var S4 = function() {
//         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
//     };
//     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
// };

// /**
//  * Little plugin for snap to support toFront / toBack
//  */
// Snap.plugin(function (Snap, Element, Paper, glob) {
//     var elproto = Element.prototype;
//     elproto.toFront = function () {
//         this.prependTo(this.paper);
//     };
//     elproto.toBack = function () {
//         this.appendTo(this.paper);
//     };
// });
