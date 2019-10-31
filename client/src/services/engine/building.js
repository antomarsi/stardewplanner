import { pathArrayToPoints } from "./utils";

/**
 * Created by Henrik Peinar on 01/04/16
 */

class Building {
  constructor(board, id, image, width, height, highlight) {
    this.board = board;
    this.id = id;
    this.image = image;
    this.width = width;
    this.height = height;
    this.typeGroup = id.split("-").pop();
    if (highlight) {
      this.highlight = {
        ...highlight,
        path: pathArrayToPoints(highlight.path)
      };
    }
  }
}

export default Building;
