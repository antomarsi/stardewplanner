class Tile {
  constructor(board, id, image, width, height) {
    this.board = board;
    this.id = id;
    this.image = image;
    this.width = width;
    this.height = height;
    let name = id.replace("-", " ");
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  get src() {
    return this.image.src;
  }
}

export default Tile;
