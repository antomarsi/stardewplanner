class Tool {
  mousePos
  constructor(name, image, shortcut) {
    this.name = name;
    this.image = image;
    this.shortcut = shortcut;
  }
  onMouseMove = evt => {};

  onMouseDown = evt => {};

  onMouseUp = evt => {};

  onMouseOut = evt => {
    evt.preventDefault();
  };

  onMouseWheel = evt => {
    evt.preventDefault();
  };

  update = () => {};
}

export default Tool;
